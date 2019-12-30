<script>
  export default {
    name: 'WindowContentExample',
    props: {
      sampleId: {
        type: Number,
        required: true
      }
    },
    data () {
      return {
        window: null,
        sampleModel: ''
      }
    },
    computed: {},
    mounted () {
      console.log(this.sampleId)
      console.log(this.$root)
      this.window = this.$root.wid
    },
    destroyed () {
    },
    methods: {
      customEvent () {
        let window = this.$root.wid // may be prop or other means. If the window is a plugin, $root will always be an instance of UWindow
        this.$uloc.window.emit(window, 'customEvent', this.sampleModel)
        // can be: this.$uloc.window.emit(window, {type: 'customEvent', data: this.sampleModel})
      },
      newWindow () {
        this.$uloc.window.new({
            wid: 'unique.window.sub1',
            width: '80%',
            title: 'Window Plugin SubWindow'
          }, () => import('./content-example.vue'))
          .then((wid) => {
            let window = wid
            console.log('Window wid:', window)
          })// return wid
      }
    },
    components: {}
  }
</script>

<template>
  <div class="flex u-flex row items-center justify-center h-full u-window-test">
    <div class="text-center">
      <div class="block m-b text-left">
        <u-input v-model="sampleModel" @keydown.enter="$refs.btn.click()" autofocus float-label="Digite algo para se comunicar por evento" />
      </div>
      <u-btn color="positive" ref="btn" @click="customEvent">
        Emitir um evento customizado
      </u-btn>
      <u-btn color="white" class="text-black m-l" @click="newWindow">
        New Window
      </u-btn>
      <u-btn color="white" class="text-black m-l" @click="$uloc.window.close(window)">
        Close
      </u-btn>
    </div>
  </div>
</template>

<style>
  .u-window-test{
  }
</style>
