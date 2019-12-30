/* eslint prefer-promise-reject-errors: 0 */

export default {
  data () {
    return {
      hasUWindow: false
    }
  },
  mounted () {
    this.$nextTick(() => {
      let root = this.$root
      if (root.$el.className.includes('u-window')) {
        this.$el.classList.add('u-window-element')
        this.$el.style.zIndex = root.$el.style.zIndex + 1
      }
    })
  }
}
