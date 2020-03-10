import UWindowHeader from './UWindowHeader'
import UWindowContent from './UWindowContent'
import UWindowResizable from './UWindowResizable'
import WindowEventMixin from './window-event.js'
import ModelToggleMixin from '../../mixins/model-toggle.js'
import PreventScroll from '../../mixins/prevent-scroll.js'
import {width, height, getWindowScreenSize} from '../../utils/dom.js'
import EscapeKey from '../../utils/escape-key.js'
import Resize from './resize-mixin.js'
import {stopAndPrevent} from '../../utils/event.js'
import debounce from '../../utils/debounce.js'

let pos1, pos2, pos3, pos4 = 0

export default {
  name: 'UWindow',
  mixins: [WindowEventMixin, ModelToggleMixin, PreventScroll, Resize],
  inject: {
    container: {
      default () {
        console.error('UWindow needs to be child of UWindowContainer')
      }
    }
  },
  props: {
    wid: String,
    move: {
      type: Boolean,
      default: true
    },
    maximize: {
      type: Boolean,
      default: true
    },
    close: {
      type: Boolean,
      default: true
    },
    clickOutside: {
      type: Boolean,
      default: true
    },
    backdrop: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: '50%'
    },
    height: {
      type: String,
      default: '50%'
    },
    minWidth: {
      type: [Number, String],
      default: 200
    },
    minHeight: {
      type: [Number, String],
      default: 200
    },
    maxWidth: {
      type: [Number, String],
      default: 0
    },
    maxHeight: {
      type: [Number, String],
      default: 0
    },
    fullscreen: {
      type: Boolean,
      default: false
    },
    showHeader: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: null
    },
    icon: {
      type: [String, Object],
      default: null
    },
    contentClass: String,
    windowClass: String,
    headerButtons: Array,
    theme: String
  },
  data () {
    return {
      wWidth: this.width,
      wHeight: this.height,
      zindex: 10000,
      top: 0,
      left: 0,
      isMaximized: false,
      active: false
    }
  },
  watch: {
  },
  computed: {
    computedStyle () {
      let css = []

      css.push({width: `${this.wWidth}px`})
      css.push({height: `${this.wHeight}px`})
      css.push({top: `${this.top}px`})
      css.push({left: `${this.left}px`})
      css.push({'z-index': this.activeZIndex})

      return css
    },
    activeZIndex () {
      if (this.active) {
        return this.zindex + 200
      }
      return this.zindex
    },
    computedClass () {
      let css = []

      if (this.isMaximized) {
        css.push('u-window-maximized')
      }

      if (this.windowClass) {
        css.push(this.windowClass)
      }

      return css
    },
    backdropClass () {
      return {
        'no-pointer-events': this.clickOutside
      }
    },
    backdropStyle () {
      let css = []

      css.push({backgroundColor: `rgba(0,0,0,${(this.backdrop ? 1 : 0) * 0.4})`})

      return css
    }
  },
  created () {
    if (this.container) {
      this.container.instances.push(this)
    }
    this.__getPosition()
    /* console.log('CREATED-------')
    console.log('origin', this.originWindow)
    console.log('instanceActive', this.container.instanceActive)
    console.log('CREATED-------') */
  },
  mounted () {
    const container = this.container.$el
    container.appendChild(this.$el)
    window.setTimeout(() => {
      this.defineActive()
    }, 10) // to prevent clickoutside
  },
  beforeDestroy () {
    if (this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el)
    }
    if (this.container) {
      this.container.instances.splice(this.getInstance(), 1)
    }
  },
  methods: {
    getInstance () {
      return this.container.instances.indexOf(this)
    },
    click (e) {
      this.defineActive()
    },
    __getPosition () {
      let top, left
      let _width = this.width
      let _height = this.height

      let {screenWidth, screenHeight} = getWindowScreenSize()

      if (_width.includes('%')) {
        _width = screenWidth * (Number(_width.replace(/\D/, '')) / 100)
        if (parseInt(this.maxWidth) > 0 && _width > parseInt(this.maxWidth)) {
          _width = this.maxWidth
        }
      }
      if (_height.includes('%')) {
        _height = screenHeight * (Number(_height.replace(/\D/, '')) / 100)
      }

      if (_width > screenWidth) {
        left = 0
        _width = screenWidth
      }
      else {
        left = (screenWidth - _width) / 2
      }

      if (_height > screenHeight) {
        top = 0
        _height = screenHeight
      }
      else {
        top = (screenHeight - _height) / 2
      }

      this.wWidth = _width
      this.wHeight = _height
      this.top = top
      this.left = left
    },
    __show (e) {
      this.$nextTick(() => {
        this.updateZindex()
        this.defineActive()
      })
    },
    __hide (e) {
      e && stopAndPrevent(e)
      if (this.container) {
        if (this.container.instanceActive === this) {
          this.container.instanceActive = null
        }
      }
      EscapeKey.findAndPop(this.closeOnEscapeKey)
      EscapeKey.enable()
      if (this.originWindow) {
        this.$nextTick(() => {
          this.originWindow.defineActive('desactiveActual')
        })
      }
      /* console.log('HIDE-------')
      console.log('origin', this.originWindow)
      console.log('instanceActive', this.container.instanceActive)
      console.log('HIDE-------') */
      this.__getPosition()
      this.__emit('close', this.wid)
    },
    __restore (e) {
      e && stopAndPrevent(e)
      this.__getPosition()
      this.isMaximized = false
      this.__emit('restore', this.wid)
    },
    __maximize (e) {
      e && stopAndPrevent(e)
      let {screenWidth, screenHeight} = getWindowScreenSize()
      this.wWidth = screenWidth
      this.wHeight = screenHeight
      this.left = 0
      this.top = 0
      if (this.showHeader) {
        let header = document.querySelector('.u-header')
        if (header) {
          // this.top = height(header) TODO: wHeight - height(header) and create limitHeader prop to verify if maximize should occupy all screen or limit to header
        }
      }
      this.isMaximized = true
      this.__emit('maximize', this.wid)
    },
    __mousedown (e) {
      stopAndPrevent(e)
      this.defineActive()
      pos3 = e.clientX
      pos4 = e.clientY
    },
    __mouseup (e) {
      stopAndPrevent(e)
    },
    __mousemove (e) {
      stopAndPrevent(e)
      pos1 = pos3 - e.clientX
      pos2 = pos4 - e.clientY
      pos3 = e.clientX
      pos4 = e.clientY
      let el = this.$el
      let top = (el.offsetTop - pos2)
      let left = (el.offsetLeft - pos1)
      let elWidth = width(el)
      let elHeight = height(el)
      let posTop = elHeight + top
      let posLeft = elWidth + left
      let {screenWidth, screenHeight} = getWindowScreenSize()
      el.style.top = (
        top > -1
          ? (
            posTop < screenHeight ? top : screenHeight - elHeight
          )
          : 0
      ) + 'px'
      el.style.left = (
        left > -1
          ? (
            posLeft < screenWidth ? left : screenWidth - elWidth
          )
          : 0
      ) + 'px'
      if (!this.eventMove) {
        this.eventMove = debounce(() => {
          this.__emit('move', this.wid)
        }, 300)
      }
      this.eventMove()
    },
    updateZindex () {
      if (!this.container) {
        return this.zindex
      }
      this.zindex = this.container.zindex + this.container.instances.length + 1
    },
    defineActive (type = 'active') {
      if (this.container && this.container.instanceActive !== this) {
        if (this.container.instanceActive) {
          this.originWindow = this.container.instanceActive
          this.container.instanceActive.desactive()
        }
        this.container.instanceActive = this
        /* console.log('DEFINE ACTIVE-------')
        console.log('origin', this.originWindow)
        console.log('instanceActive', this.container.instanceActive)
        console.log('DEFINE ACTIVE-------') */
        this.active = true
        if (type === 'desactiveActual') {
          if (!this.$uloc.window.get(this.wid)) {
            return
          }
        }
        // console.log('ALLONS-Y!', typeof this.wid, this.wid, this.$uloc.window.get(this.wid))

        this.$uloc.window.get(this.wid) && this.__emit('active', this.wid)
      }
      EscapeKey.findAndPop(this.closeOnEscapeKey)
      EscapeKey.register(this.closeOnEscapeKey)
      !this.close && EscapeKey.disable()
    },
    desactive () {
      this.active = false
      this.container.instanceActive = this.originWindow
      this.originWindow = null
      // EscapeKey.pop()
      EscapeKey.findAndPop(this.closeOnEscapeKey)
      EscapeKey.enable()
      this.$uloc.window.get(this.wid) && this.__emit('desactive', this.wid)
    },
    closeOnEscapeKey () {
      this.hide()
    },
    clickBackdrop (e) {
      this.$el.classList.add('window-no-click-outside')
      window.setTimeout(() => {
        this.$el.classList.remove('window-no-click-outside')
      }, 400)
    }
  },
  render (h) {
    return this.showing ? h('div', {
      staticClass: 'u-window-layout absolute',
      style: this.computedStyle,
      'class': this.computedClass,
      on: {
        click: this.click
      }
    }, [
      h(UWindowResizable, {
        style: {
          'z-index': this.activeZIndex - 1
        },
        props: {
          resize: this.resize,
          minWidth: this.minWidth,
          minHeight: this.minHeight,
          maxWidth: this.maxWidth,
          maxHeight: this.maxHeight
        },
        on: {
          rmousedown: this.__resizeMousedown,
          rmouseup: this.__resizeMouseup,
          rmousemove: this.__resizeMousemove
        }
      }),
      h('div', {
        ref: 'uwindow',
        staticClass: 'u-window absolute-full bg-white',
        style: {'z-index': this.activeZIndex}
      }, [
        h(UWindowHeader, {
          ref: 'header',
          props: {
            move: this.move,
            maximize: this.maximize,
            close: this.close,
            fullscreen: this.fullscreen,
            title: this.title,
            icon: this.icon,
            headerButtons: this.headerButtons
          },
          on: {
            close: this.hide,
            restore: this.__restore,
            maximize: this.__maximize,
            hmousedown: this.__mousedown,
            hmouseup: this.__mouseup,
            hmousemove: this.__mousemove
          }
        }),
        h(UWindowContent, {
          'class': this.contentClass
        }, [this.$slots.default])
      ]),
      !this.clickOutside || this.backdrop ? h('div', {
        ref: 'backdrop',
        staticClass: 'fullscreen u-layout-backdrop u-layout-transition',
        'class': this.backdropClass,
        style: [{'z-index': this.activeZIndex - 2}, ...this.backdropStyle],
        on: {mousedown: this.clickBackdrop}
      }) : null]
    ) : null
  }
}
