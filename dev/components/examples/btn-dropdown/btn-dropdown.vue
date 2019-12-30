<script>
  import UProps from '../../Props'
  import UButtonDropdownExample from './example'
  import UBtnDropdownComponentExamples from './samples/component'
  export default {
    name: 'BtnDropdown',
    components: {UBtnDropdownComponentExamples, UButtonDropdownExample, UProps}
  }
</script>

<template>
  <u-page padding class="docs-btn row justify-center block">
    <transition name="slide" appear>
      <div class="transition-generic">
        <component-title :cdata="i18n.btndropdown" />

        <div class="component-page-content">
          <u-button-dropdown-example />

          <div class="b-row">
            <div class="b-col-md-6">
              <u-box>
                <h5>Exemplo</h5>
                <code-loader component="btn-dropdown" example="data.component" />
              </u-box>

              <u-box class="m-t">
                <u-btn-dropdown-component-examples />
              </u-box>
            </div>

            <div class="b-col-md-6">
              <u-box>
                <div class="m-t r">
                  <h5>Propriedades</h5>
                  <u-props :columns="i18n.propsColumns" :items="i18n.btndropdown.props" />
                </div>

                <div class="m-t-xl">
                  <h5>Eventos Nativos</h5>
                  <u-props :columns="i18n.eventsColumns" :items="i18n.btndropdown.events" />
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
