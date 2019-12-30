export default {
  methods: {
    __emit (event, data) {
      this.$emit(event, this.wid)
      if (this.wid) { // is plugin
        this.$uloc.window.emit(this.wid, {type: event, data: data})
      }
    }
  }
}
