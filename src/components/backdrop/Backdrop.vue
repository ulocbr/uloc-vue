<script>
  export default {
    name: 'UBackdrop',
    methods: {
      close () {
        this.$emit('close')
      }
    }
  }
</script>

<template>
  <div class="u-backdrop" @click="close" @keyup.esc="close" />
</template>

<!--<style src="./backdrop.styl" lang="stylus"></style>-->
