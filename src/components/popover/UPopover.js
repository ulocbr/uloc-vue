import {
  positionValidator,
  offsetValidator,
  parsePosition,
  setPosition
} from '../../utils/popup.js'
import frameDebounce from '../../utils/frame-debounce.js'
import { getScrollTarget } from '../../utils/scroll.js'
import { width } from '../../utils/dom.js'
import EscapeKey from '../../utils/escape-key.js'
import ModelToggleMixin from '../../mixins/model-toggle.js'
import { listenOpts } from '../../utils/event.js'
import CanRenderMixinMixin from '../../mixins/can-render.js'

export default {
  name: 'UPopover',
  mixins: [ModelToggleMixin, CanRenderMixinMixin],
  props: {
    anchor: {
      type: String,
      validator: positionValidator
    },
    self: {
      type: String,
      validator: positionValidator
    },
    fit: Boolean,
    maxHeight: String,
    touchPosition: Boolean,
    anchorClick: {
      /*
        for handling anchor outside of Popover
        example: context menu component
      */
      type: Boolean,
      default: true
    },
    offset: {
      type: Array,
      validator: offsetValidator
    },
    noFocus: Boolean,
    noRefocus: Boolean,
    disable: Boolean,
    hover: {
      type: Boolean,
      default: false
    },
    disableCloseOnClickOutside: {
      type: Boolean,
      default: false
    },
    hoverDelay: Number
  },
  watch: {
    $route () {
      this.hide()
    }
  },
  computed: {
    anchorOrigin () {
      return parsePosition(this.anchor || `bottom ${this.$uloc.i18n.rtl ? 'right' : 'left'}`)
    },
    selfOrigin () {
      return parsePosition(this.self || `top ${this.$uloc.i18n.rtl ? 'right' : 'left'}`)
    }
  },
  render (h) {
    if (!this.canRender) { return }

    return h('div', {
      staticClass: 'u-popover scroll',
      ref: 'content',
      attrs: { tabindex: -1 },
      on: {
        click (e) { e.stopPropagation() }
      }
    }, this.$slots.default)
  },
  mounted () {
    this.__updatePosition = frameDebounce((_, event, animate) => this.reposition(event, animate))
    this.$nextTick(() => {
      this.anchorEl = this.$el.parentNode
      this.anchorEl.removeChild(this.$el)
      if (this.anchorEl.classList.contains('u-btn-inner') || this.anchorEl.classList.contains('u-if-inner')) {
        this.anchorEl = this.anchorEl.parentNode
      }
      if (this.anchorClick) {
        this.anchorEl.classList.add('cursor-pointer')
        if (this.hover) {
          this.anchorEl.addEventListener('mouseover', this.toggleHover)
          this.anchorEl.addEventListener('mouseleave', this.mouseleave)
          this.anchorEl.addEventListener('click', this.hide)
        } else {
          this.anchorEl.addEventListener('click', this.toggle)
        }
        this.anchorEl.addEventListener('keyup', this.__toggleKey)
      }
    })
    if (this.value) {
      this.show()
    }
  },
  beforeDestroy () {
    if (this.anchorClick && this.anchorEl) {
      this.anchorEl.removeEventListener('mouseover', this.toggleHover)
      this.anchorEl.removeEventListener('mouseleave', this.mouseleave)
      this.anchorEl.removeEventListener('click', this.hide)
      this.anchorEl.removeEventListener('click', this.toggle)
      this.anchorEl.removeEventListener('mouseover', this.toggle)
      this.anchorEl.removeEventListener('keyup', this.__toggleKey)
    }
  },
  methods: {
    __show (evt) {
      clearTimeout(this.timerMousemove)
      if (!this.noRefocus) {
        this.__refocusTarget = (this.anchorClick && this.anchorEl) || document.activeElement
      }
      document.body.appendChild(this.$el)
      EscapeKey.register(() => { this.hide() })
      this.scrollTarget = getScrollTarget(this.anchorEl)
      this.scrollTarget.addEventListener('scroll', this.__updatePosition, listenOpts.passive)
      window.addEventListener('resize', this.__updatePosition, listenOpts.passive)
      this.__updatePosition(0, evt, true)

      clearTimeout(this.timer)
      if (!this.noFocus && this.$refs.content) {
        this.$refs.content.focus()
      }
      this.timer = setTimeout(() => {
        !this.disableCloseOnClickOutside && document.body.addEventListener('click', this.__bodyHide, true)
        if (this.hover) {
          document.body.addEventListener('mousemove', this.mousemove, true)
        }
        document.body.addEventListener('touchstart', this.__bodyHide, true)
        this.showPromise && this.showPromiseResolve()
      }, 0)
    },
    __toggleKey (evt) {
      if (evt.keyCode === 13) {
        this.toggle(evt)
      }
    },
    __bodyHide (evt) {
      if (
        evt && evt.target &&
        (this.$el.contains(evt.target) || this.anchorEl.contains(evt.target))
      ) {
        return
      }

      this.hide(evt)
    },
    __hide () {
      clearTimeout(this.timer)
      clearTimeout(this.timerMousemove)
      clearTimeout(this.timerOverDelay)

      !this.disableCloseOnClickOutside && document.body.removeEventListener('click', this.__bodyHide, true)
      document.body.removeEventListener('mousemove', this.mousemove, true)
      document.body.removeEventListener('touchstart', this.__bodyHide, true)
      this.scrollTarget.removeEventListener('scroll', this.__updatePosition, listenOpts.passive)
      window.removeEventListener('resize', this.__updatePosition, listenOpts.passive)
      EscapeKey.pop()

      this.$el.remove()
      this.hidePromise && this.hidePromiseResolve()
      if (!this.noRefocus && this.__refocusTarget) {
        this.__refocusTarget.focus()
      }
    },
    reposition (event, animate) {
      if (this.fit) {
        this.$el.style.minWidth = width(this.anchorEl) + 'px'
      }
      const { top, bottom } = this.anchorEl.getBoundingClientRect()

      if (bottom < 0 || top > window.innerHeight) {
        return this.hide()
      }

      setPosition({
        event,
        animate,
        el: this.$el,
        offset: this.offset,
        anchorEl: this.anchorEl,
        anchorOrigin: this.anchorOrigin,
        selfOrigin: this.selfOrigin,
        maxHeight: this.maxHeight,
        anchorClick: this.anchorClick,
        touchPosition: this.touchPosition
      })
    },
    toggleHover (e) {
      if (this.hoverDelay) {
        clearTimeout(this.timerOverDelay)
        this.timerOverDelay = setTimeout(() => {
          this.toggle(e)
        }, this.hoverDelay)
        return
      }
      this.toggle(e)
    },
    mousemove (e) {
      clearTimeout(this.timerMousemove)
      this.timerMousemove = setTimeout(() => {
        this.__bodyHide(e)
      }, 500)
    },
    mouseleave (e) {
      clearTimeout(this.timerOverDelay)
    }
  }
}
