// TODO: DRAFT.
export default {
  name: 'UBox',
  props: {
  },
  render (h) {
    return h('div', {
      staticClass: 'u-box'
    }, [
      h('div', {
        staticClass: 'u-box-content'
      }, this.$slots.default)
    ])
  }
}
