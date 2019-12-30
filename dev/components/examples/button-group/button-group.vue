<script>
  import UBox from '../../../../src/components/box/UBox'
  import UProps from '../../Props'
  import UButtonGroupExample from './example'
  import ButtonGroupExampleComponent from './samples/component'
  export default {
    name: 'ButtonGroup',
    components: {ButtonGroupExampleComponent, UButtonGroupExample, UProps, UBox}
  }
</script>

<template>
  <u-page padding class="docs-btn row justify-center block">
    <transition name="slide" appear>
      <div class="transition-generic">
        <component-title :cdata="i18n.buttongroup" />

        <div class="component-page-content">
          <u-button-group-example />

          <div class="b-row">
            <div class="b-col-md-6">
              <u-box>
                <button-group-example-component />
                <code-loader component="button-group" example="data.component" />
              </u-box>
            </div>

            <div class="b-col-md-6">
              <u-box>
                O componente button group pode ser utilizado por meio da importação do componente <strong>UBtnGroup</strong> e da tag <strong>&lt;u-btn-group&gt;&lt;/u-btn-group&gt;</strong>

                <div class="m-t r">
                  <h5>Propriedades</h5>
                  <u-props :columns="i18n.propsColumns" :items="i18n.buttongroup.props" />
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
