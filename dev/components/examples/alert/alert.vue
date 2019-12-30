<script>
  import UProps from '../../Props'
  import UAlertExample from './example'
  import AlertExamplePlugin from './samples/plugin'
  import AlertExampleComponent from './samples/component'

  export default {
    components: {UAlertExample, AlertExamplePlugin, AlertExampleComponent, UProps},
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
        <component-title :cdata="i18n.alert" />

        <div class="component-page-content">
          <u-alert-example />

          <div class="b-row">
            <div class="b-col-md-6">
              <u-box>
                <alert-example-plugin />
              </u-box>

              <u-box class="m-t">
                <alert-example-component />
              </u-box>
            </div>

            <div class="b-col-md-6">
              <u-box>
                <h5>Propriedades</h5>
                <u-props :columns="i18n.propsColumns" :items="i18n.alert.props" />
              </u-box>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </u-page>
</template>
