<script>
  import UProps from '../../Props'
  import UShadowExample from './example'
  import ShadowExamplePlugin from './samples/plugin'

  export default {
    components: {UShadowExample, ShadowExamplePlugin, UProps},
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
        <component-title :cdata="i18n.shadow" />

        <div class="component-page-content">
          <u-shadow-example />

          <div class="b-row">
            <div class="b-col-md-6">
              <u-box>
                <shadow-example-plugin />
              </u-box>
            </div>

            <div class="b-col-md-6">
              <u-box>
                <h5>Propriedades</h5>
                <u-props :columns="i18n.propsColumns" :items="i18n.shadow.props" />
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
