<script>
  export default {
    name: 'UFakeLoader',
    props: {
      width: {
        type: String,
        default: '80px'
      },
      height: {
        type: String,
        default: '8px'
      }
    },
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
  <div class="fake-loader" v-bind="$props">
    <span style="vertical-align: top;" :style="{width: width, height: height}" />
  </div>
</template>
