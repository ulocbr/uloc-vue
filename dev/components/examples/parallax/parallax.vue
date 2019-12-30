<script>
  import UProps from '../../Props'
  import UParallaxExample from './example'
  import UParallaxComponent from './samples/component'
  export default {
    name: 'Parallax',
    components: {UParallaxComponent, UParallaxExample, UProps}
  }
</script>

<template>
  <u-page padding class="docs-btn row justify-center block">
    <transition name="slide" appear>
      <div class="transition-generic">
        <component-title :cdata="i18n.parallax" />

        <div class="component-page-content">
          <u-parallax-example />

          <div class="b-row">
            <div class="b-col-md-6">
              <u-box>
                <h5>Exemplo</h5>
                <code-loader component="parallax" example="data.component" />
              </u-box>

              <u-box class="m-t">
                <u-parallax-component />
              </u-box>
            </div>

            <div class="b-col-md-6">
              <u-box>
                <div class="m-t r">
                  <h5>Propriedades</h5>
                  <u-props :columns="i18n.propsColumns" :items="i18n.parallax.props" />
                </div>
              </u-box>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </u-page>
</template>

<style scoped>

</style>
