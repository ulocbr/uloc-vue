import {width, height, offset, getWindowScreenSize} from '../../utils/dom.js'
import {stopAndPrevent} from '../../utils/event.js'
import debounce from '../../utils/debounce'

let resizePosition
let pos1, pos2, pos3, pos4 = 0

export default {
  props: {
    resize: {
      type: Boolean,
      default: true
    },
    data () {
      return {}
    }
  },
  methods: {
    __resizeMousemove (e) {
      stopAndPrevent(e)
      this.__resize(resizePosition, e)
    },
    __resizeMouseup (e) {
      stopAndPrevent(e)
    },
    __resizeMousedown (e, position) {
      stopAndPrevent(e)
      if (typeof this.defineActive === 'function') {
        this.defineActive()
      }
      pos3 = e.clientX
      pos4 = e.clientY
      resizePosition = position
    },
    __getElementSize () {
      return {ewidth: width(this.$el), eheight: height(this.$el)}
    },
    __resize (position, e) {
      pos1 = pos3 - e.clientX
      pos2 = pos4 - e.clientY
      pos3 = e.clientX
      pos4 = e.clientY
      // console.log(pos3, pos4)
      /* if (pos3 > screenWidth) {
        pos3 = screenWidth
      }
      if (pos3 < 0) {
        pos3 = 0
      }
      if (pos4 > screenHeight) {
        pos4 = screenHeight
      }
      if (pos4 < 0) {
        pos4 = 0
      } */
      // let {ewidth, eheight} = this.__getElementSize()
      let map = {
        'r-top-left': this.__resizeLeftTop,
        'r-bottom-left': this.__resizeLeftBottom,
        'r-left': this.__resizeLeft,
        'r-top-right': this.__resizeRightTop,
        'r-top': this.__resizeTop,
        'r-right': this.__resizeRight,
        'r-bottom': this.__resizeBottom,
        'r-bottom-right': this.__resizeRightBottom
      }
      if (map[position] === void 0) return
      map[position](e)
      if (!this.eventResize) {
        this.eventResize = debounce(() => {
          this.__emit('resize', this.wid)
        }, 300)
      }
      this.eventResize()
    },
    __maxMinWidth (newWidth) {
      let maxWidth = parseFloat(this.maxWidth)
      let minWidth = parseFloat(this.minWidth)
      if (maxWidth > 0) {
        if (newWidth > maxWidth) return maxWidth
      }
      if (minWidth > 0) {
        if (newWidth < minWidth) return minWidth
      }
      return newWidth
    },
    __maxMinHeight (newHeight) { // TODO: Refact in unique maxMin(new, type)
      let maxHeight = parseFloat(this.maxHeight)
      let minHeight = parseFloat(this.minHeight)
      if (maxHeight > 0) {
        if (newHeight > maxHeight) return maxHeight
      }
      if (minHeight > 0) {
        if (newHeight < minHeight) return minHeight
      }
      return newHeight
    },
    __resizeRight (e) {
      let {screenWidth} = getWindowScreenSize()
      let {ewidth} = this.__getElementSize()
      let newPos = (ewidth - pos1)
      let {left} = offset(this.$el)
      if ((newPos + left) > (screenWidth - 4)) return
      this.$el.style.width = this.__maxMinWidth(newPos) + 'px'
      /* if ((parseFloat(this.$el.style.width) + left) > screenWidth) {
        this.$el.style.width = ((screenWidth - left) - 10) + 'px'
      } */
    },
    __resizeLeft (e) {
      let {ewidth} = this.__getElementSize()
      let {left} = offset(this.$el)
      let newPos = (left - pos1)
      if (newPos < 4) return
      this.$el.style.width = (ewidth + pos1) + 'px'
      this.$el.style.left = newPos + 'px'
    },
    __resizeTop (e) {
      let {eheight} = this.__getElementSize()
      let {top} = offset(this.$el)
      let newPos = (top - pos2)
      if (newPos < 4) return
      this.$el.style.height = this.__maxMinHeight(eheight + pos2) + 'px'
      this.$el.style.top = newPos + 'px'
    },
    __resizeBottom (e) {
      let {screenHeight} = getWindowScreenSize()
      let {eheight} = this.__getElementSize()
      let {top} = offset(this.$el)
      let newPos = (eheight - pos2)
      if ((newPos + top) > (screenHeight - 4)) return
      this.$el.style.height = this.__maxMinHeight(newPos) + 'px'
    },
    __resizeLeftTop (e) {
      this.__resizeLeft(e)
      this.__resizeTop(e)
    },
    __resizeLeftBottom (e) {
      this.__resizeLeft(e)
      this.__resizeBottom(e)
    },
    __resizeRightTop (e) {
      this.__resizeRight(e)
      this.__resizeTop(e)
    },
    __resizeRightBottom (e) {
      this.__resizeRight(e)
      this.__resizeBottom(e)
    }
  }
}
