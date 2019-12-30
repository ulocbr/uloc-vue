import {cssTransform} from '../../utils/dom.js'
import {getScrollbarWidth, hasScrollbar} from '../../utils/scroll'

export default {
  name: 'UPageSticky',
  inject: {
    layout: {
      default () {
        console.error('UPageSticky needs to be child of ULayout')
      }
    }
  },
  props: {
    position: {
      type: String,
      default: 'bottom-right',
      validator: v => [
        'top-right', 'top-left',
        'bottom-right', 'bottom-left',
        'top', 'right', 'bottom', 'left'
      ].includes(v)
    },
    offset: {
      type: Array,
      validator: v => v.length === 2
    },
    expand: Boolean
  },
  computed: {
    attach () {
      const pos = this.position

      return {
        top: pos.indexOf('top') > -1,
        right: pos.indexOf('right') > -1,
        bottom: pos.indexOf('bottom') > -1,
        left: pos.indexOf('left') > -1,
        vertical: pos === 'top' || pos === 'bottom',
        horizontal: pos === 'left' || pos === 'right'
      }
    },
    top () {
      return this.layout.header.offset
      /* TODO: Bug */
    },
    right () {
      return this.layout.right.offset
    },
    bottom () {
      return this.layout.footer.offset
    },
    left () {
      return this.layout.left.offset
    },
    computedStyle () {
      const
        attach = this.attach,
        transforms = [],
        dir = this.$uloc.i18n.rtl ? -1 : 1

      if (attach.top && this.top) {
        transforms.push(`translateY(${this.top}px)`)
      }
      else if (attach.bottom && this.bottom) {
        transforms.push(`translateY(${-this.bottom}px)`)
      }

      if (attach.left && this.left) {
        transforms.push(`translateX(${dir * this.left}px)`)
      }
      else if (attach.right && this.right) {
        transforms.push(`translateX(${-dir * this.right}px)`)
      }

      const css = transforms.length
        ? cssTransform(transforms.join(' '))
        : {}

      if (this.offset) {
        css.margin = `${this.offset[1]}px ${this.offset[0]}px`
      }

      if (attach.vertical) {
        if (this.left) {
          css[this.$uloc.i18n.rtl ? 'right' : 'left'] = `${this.left}px`
        }
        if (this.right) {
          css[this.$uloc.i18n.rtl ? 'left' : 'right'] = `${this.right + getScrollbarWidth()}px`
        }
      }
      else if (attach.horizontal) {
        if (this.top) {
          css.top = `${this.top}px`
        }
        if (this.bottom) {
          css.bottom = `${this.bottom}px`
        }
      }

      if (['top-right', 'bottom-right', 'right'].includes(this.position) && hasScrollbar(this.$parent.$el)) {
        css.right = `${this.right + getScrollbarWidth()}px`
      }

      return css
    },
    classes () {
      return [`fixed-${this.position}`, `u-page-sticky-${this.expand ? 'expand' : 'shrink'}`]
    }
  },
  render (h) {
    return h('div', {
      staticClass: 'u-page-sticky u-layout-transition z-fixed row flex-center',
      'class': this.classes,
      style: this.computedStyle
    },
    this.expand
      ? this.$slots.default
      : [h('span', this.$slots.default)]
    )
  }
}
