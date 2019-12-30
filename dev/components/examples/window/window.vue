<script>
  import UProps from '../../Props'
  import UWindowExample from './example'
  import WindowExamplePlugin from './samples/plugin'
  import WindowExampleComponent from './samples/component'

  export default {
    components: {WindowExampleComponent, WindowExamplePlugin, UWindowExample, UProps},
    data () {
      return {
      }
    },
    computed: {},
    mounted () {
    },
    methods: {
    },
    beforeDestroy () {
    }
  }
</script>

<template>
  <u-page padding class="docs-btn row justify-center block">
    <transition name="slide" appear>
      <div class="transition-generic">
        <component-title :cdata="i18n.window" />

        <div class="component-page-content">
          <!--<div>
            Teste popover
            <u-popover>Teste</u-popover>
            <u-popover hover :hoverDelay="500"><div style="width: 300px; height: 300px">Teste Hover</div></u-popover>
          </div>-->

          <u-window-example />

          <div class="b-row">
            <div class="b-col-md-6">
              <u-box>
                <window-example-plugin />
              </u-box>

              <u-box class="m-t">
                <window-example-component />
              </u-box>
            </div>

            <div class="b-col-md-6">
              <u-box>
                O componente window pode ser utilizado por meio de um plugin do Vue <code
                  class="font-bold"
                >$uloc.window</code> ou por meio da importação comum do componente
                <strong>UWindow</strong>.

                <div class="m-t r">
                  <h5>Propriedades</h5>
                  <u-props :columns="i18n.propsColumns" :items="i18n.window.props" />
                </div>

                <div class="m-t-xl">
                  <h5>Eventos Nativos</h5>
                  <u-props :columns="i18n.eventsColumns" :items="i18n.window.events" />
                </div>
              </u-box>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </u-page>
</template>

<style lang="stylus">
</style>
