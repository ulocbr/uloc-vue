<script>
  import UProps from '../../Props'
  import UPaginationExample from './example'
  import PaginationExamplePlugin from './samples/plugin'
  import PaginationExampleComponent from './samples/component'

  export default {
    components: {PaginationExampleComponent, UPaginationExample, PaginationExamplePlugin, UProps},
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
        <component-title :cdata="i18n.pagination" />

        <div class="component-page-content">
          <u-pagination-example />

          <div class="b-row">
            <div class="b-col-md-6">
              <u-box>
                <pagination-example-plugin />
              </u-box>

              <u-box class="m-t">
                <pagination-example-component />
              </u-box>
            </div>

            <div class="b-col-md-6">
              <u-box>
                <div>
                  <h5>Propriedades</h5>
                  <u-props :columns="i18n.propsColumns" :items="i18n.pagination.props" />
                </div>

                <div class="m-t-xl">
                  <h5>Eventos</h5>
                  <u-props :columns="i18n.eventsColumns" :items="i18n.pagination.events" />
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
