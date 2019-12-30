<script>
  export default {
    data () {
      return {
        ratingModel: 4
      }
    }
  }
</script>

<template>
  <u-rating
    v-model="ratingModel"
    :max="5"
  />
</template>
