export default {
  name: 'UWindowHeaderExtendButtons',
  data () {
    return {
      extButtonsMounted: false
    }
  },
  mounted () {
    this.$el.classList.add('hide')
    this.$nextTick(() => {
      let extend = this.$root.$el.querySelector('.extendButtons')
      extend.appendChild(this.$el)
      this.$el.classList.remove('hide')
    })
  },
  beforeDestroy () {
    if (this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el)
    }
  }
}
