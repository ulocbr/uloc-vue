<script>
  export default {
    data () {
      return {
        chips: ['Joe']
      }
    }
  }
</script>

<template>
  <u-chips-input
    v-model="chips"
    placeholder="Type some names"
  />
</template>
