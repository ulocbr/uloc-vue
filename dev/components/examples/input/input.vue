<script>
  import UProps from '../../Props'
  import UInputExample from './example'
  import UInputExampleComponent from './samples/component'
  export default {
    name: 'UInput',
    components: {UInputExampleComponent, UInputExample, UProps}
  }
</script>

<template>
  <u-page padding class="docs-btn row justify-center block">
    <transition name="slide" appear>
      <div class="transition-generic">
        <component-title :cdata="i18n.input" />

        <div class="component-page-content">
          <u-input-example />

          <div class="b-row">
            <div class="b-col-md-6">
              <u-box>
                <h5>Exemplo</h5>
                <code-loader component="input" example="data.component" />
              </u-box>

              <u-box class="m-t">
                <u-input-example-component />
              </u-box>
            </div>

            <div class="b-col-md-6">
              <u-box>
                <div class="m-t r">
                  <h5>Propriedades</h5>
                  <u-props :columns="i18n.propsColumns" :items="i18n.input.props" />
                </div>

                <div class="m-t-xl">
                  <h5>Eventos Nativos</h5>
                  <u-props :columns="i18n.eventsColumns" :items="i18n.input.events" />
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
