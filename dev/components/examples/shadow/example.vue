<script>
  export default {
    name: 'UShadowExample',
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
  <div class="column" style="justify-content: center; flex-direction: row;">
    <div class="flex bg-white inline shadow-box flex-center shadow-1">
      .shadow-1
    </div>
    <div class="flex bg-white inline shadow-box flex-center shadow-up-6">
      .shadow-up-6
    </div>
    <div class="flex bg-white inline shadow-box flex-center inset-shadow doc-inset-shadow">
      .inset-shadow
    </div>
  </div>
</template>

<style>
  .shadow-box{
    width: 90px;
    height: 90px;
    margin: 25px;
    border-radius: 50%;
    font-size: 12px;
  }
</style>
