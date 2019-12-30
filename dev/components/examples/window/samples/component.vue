<script>
  export default {
    name: 'WindowExampleComponent',
    data () {
      return {}
    },
    computed: {},
    mounted () {
    },
    destroyed () {
    },
    methods: {},
    components: {}
  }
</script>

<template>
  <div>
    <view-source src="https://github.com/ulocbr/uloc-vue/blob/master/dev/components/examples/window/samples/component.vue" />
    <h5 id="plugin">
      Component
    </h5>
    <p>
      Você pode utilizar o UWindow como um component em seu projeto.
    </p>
    <div class="m-t-md">
      <div class="m-b-xs">
        <u-btn color="primary" @click="$refs.window1.show()">
          Mostrar Window
        </u-btn>
      </div>

      <!-- component -->
      <u-window-container>
        <u-window ref="window1"
                  width="300"
                  height="300"
                  title="Meu Window"
                  :show-header="true"
                  :resize="true"
                  max-width="400"
                  max-height="400"
                  :icon="{name: 'verified_user', color: 'info'}"
                  content-class="row items-center justify-center"
        >
          <u-btn push color="white" text-color="black" icon="window" icon-type="fa" icon-style="light"
                 label="Mostrar Window 2" @click="$refs.window2.show()"
          />
          <u-window width="500" height="700" ref="window2"
                    :fullscreen="false"
                    :resize="false"
                    :maximize="false"
                    :move="false"
                    :close="false"
                    :click-outside="false"
                    :backdrop="false"
                    content-class="row items-center justify-center"
                    title="Tudo desabilitado"
          >
            <u-btn @click="$refs.window2.hide()" color="info" class="m-r-sm">
              Force Hide
            </u-btn>
            <u-btn @click="$refs.window3.show()" color="dark">
              Show Window 3
            </u-btn>
            <u-window width="50%" height="50%" ref="window3"
                      content-class="row items-center justify-center"
                      title="Window 3"
                      :icon="{name: 'window', type: 'fa', color: 'primary', iconStyle: 'light', extraStyle: {'font-size': '18px'}}"
                      :backdrop="true"
                      :move="false"
                      :click-outside="false"
            />
          </u-window>
        </u-window>
      </u-window-container>
      <!-- /component -->
    </div>
  </div>
</template>
