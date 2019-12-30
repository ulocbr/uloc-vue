<template>
  <u-pagination
    v-model="page"
    :min="minPages"
    :max="maxPages"
  />
</template>

<script>
export default {
  data () {
    return {
      page: 4,
      minPages: 4,
      maxPages: 27
    }
  }
}
</script>
