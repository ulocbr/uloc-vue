<script>
  import UBtnExample from './example'
  import UProps from '../../Props'
  import ButtonComponentExample from './samples/component'
  export default {
    components: {ButtonComponentExample, UProps, UBtnExample}
  }
</script>

<template>
  <u-page padding class="docs-btn row justify-center block">
    <transition name="slide" appear>
      <div class="transition-generic">
        <component-title :cdata="i18n.button" />

        <div class="component-page-content">
          <u-btn-example />

          <div class="b-row">
            <div class="b-col-md-6">
              <u-box>
                <h5>Exemplo</h5>
                <code-loader component="btn" example="data.component" />
              </u-box>

              <u-box class="m-t">
                <button-component-example />
              </u-box>
            </div>

            <div class="b-col-md-6">
              <u-box>
                <div class="m-t r">
                  <h5>Propriedades</h5>
                  <u-props :columns="i18n.propsColumns" :items="i18n.button.props" />
                </div>

                <div class="m-t-xl">
                  <h5>Eventos Nativos</h5>
                  <u-props :columns="i18n.eventsColumns" :items="i18n.button.events" />
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
