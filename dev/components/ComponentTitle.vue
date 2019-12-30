<script>
  export default {
    name: 'ComponentTitle',
    props: {
      cdata: Object
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
  <div class="component-page-title">
    <h1>{{ cdata.name }}</h1>
    <p>{{ cdata.description }}</p>
  </div>
</template>
