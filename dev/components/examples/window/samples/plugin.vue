<script>
  export default {
    name: 'WindowExamplePlugin',
    data () {
      return {
        windowIsOpened: false
      }
    },
    computed: {
    },
    mounted () {
    },
    destroyed () {
    },
    methods: {
      newWindowPlugin2 () {
        let window
        this.$uloc.window.new({
          wid: 'unique.window1',
          width: '80%',
          title: 'Window Plugin',
          props: {
            sampleId: 1
          }
        }, () => import('../content-example.vue'))
          .then((wid) => {
            window = wid
            this.$uloc.window.listen(window, {
              close: this.closeWindowSampleListener,
              customEvent: this.windowCustomSampleListener
            })
            console.log('Window wid:', window)
          })// return wid
      },
      closeWindowSampleListener (wid, data) {
        this.$uloc.notify(`Janela wid ${wid} fechada`)
      },
      windowCustomSampleListener (wid, data) {
        this.$uloc.notify(`Evento customizado na janela wid ${wid}: ${data}`)
      },
      newWindowDisableButtonActive () {
        this.$uloc.window.new({
          wid: 'unique.window2',
          title: 'Window Plugin',
          width: '200',
          height: '200',
          maximize: false
        }, {
          render: function (h) {
            return h('div', {
              staticClass: 'u-flex row items-center justify-center h-full text-center wrapper'
            }, 'O botão que aciona a janela fica desabilitado enquanto a janela está aberta')
          }
        })
          .then((wid) => {
            this.windowIsOpened = true
            this.$uloc.window.listen(wid, {
              close: () => {
                this.windowIsOpened = false
              }
            })
          })
      }
    },
    components: {}
  }
</script>

<template>
  <div>
    <view-source src="https://github.com/ulocbr/uloc-vue/blob/master/dev/components/examples/window/samples/plugin.vue" />
    <h5 id="plugin">
      Plugin
    </h5>
    <p>
      A forma mais recomendada de utilizar o componente.
    </p>
    <div class="m-t-md">
      <div class="m-b-xs">
        <u-btn color="primary" @click="newWindowPlugin2">
          Exemplo Simples
        </u-btn>
      </div>

      <p class="m-t m-b-xs">
        Exemplos utilizando eventos
      </p>
      <u-btn color="faded" @click="newWindowPlugin2">
        Evento Customizado
      </u-btn>
      <u-btn class="m-l-sm" :color="!windowIsOpened ? 'blue-grey-5' : 'green'"
             @click="newWindowDisableButtonActive" :disable="windowIsOpened"
      >
        <u-icon name="eye" type="fa" class="m-r-xs" :class="{'hide': !windowIsOpened}" />
        <u-icon name="eye-slash" type="fa" :class="{'hide': windowIsOpened}" class="m-r-xs" />
        <span v-if="!windowIsOpened">A janela não está aberta</span>
        <span v-else>A janela está aberta</span>
      </u-btn>
      <code-loader component="window" example="data.plugin.api2" />
    </div>
  </div>
</template>
