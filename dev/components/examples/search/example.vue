<script>
  export default {
    name: 'USearchExample'
  }
</script>

<template>
  <div class="row justify-center m-b">
    <div class="u-if row no-wrap items-end relative-position u-input u-search text-primary">
      <i class="material-icons u-if-control u-if-control-before app-icon u-icon" aria-hidden="true">search</i>
      <div class="u-if-inner col row no-wrap relative-position">
        <input type="text" placeholder="Buscar" step="any" class="col u-input-target u-no-input-spinner text-left">
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
