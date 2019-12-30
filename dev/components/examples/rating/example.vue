<script>
  export default {
    name: 'URatingExample',
    data () {
      return {
        ratingModel: 4
      }
    }
  }
</script>

<template>
  <!--div class="u-rating row inline items-center no-wrap editable">
    <span tabindex="0">
      <i class="material-icons active app-icon u-icon" tabindex="-1" aria-hidden="true">grade</i>
    </span>
    <span tabindex="0">
      <i class="material-icons active app-icon u-icon" tabindex="-1" aria-hidden="true">grade</i>
    </span>
    <span tabindex="0">
      <i class="material-icons active app-icon u-icon" tabindex="-1" aria-hidden="true">grade</i>
    </span>
  </div-->
  <div class="row justify-center m-b">
    <u-rating v-model="ratingModel" :max="5" />
  </div>
</template>

<style scoped>

</style>
