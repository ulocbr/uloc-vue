<script>
  export default {
    name: 'ViewSource',
    props: {
      src: String
    },
    data () {
      return {}
    },
    computed: {},
    mounted () {
    },
    destroyed () {
    },
    methods: {
      open () {
        window.open(this.src)
      }
    },
    components: {}
  }
</script>

<template>
  <u-btn @click="open()" class="absolute-top-right bg-transparent no-border no-box-shadow" icon="github" icon-type="fa"
         icon-style="brand" icon-color="blue-grey" no-caps label="Ver código"
  />
</template>
