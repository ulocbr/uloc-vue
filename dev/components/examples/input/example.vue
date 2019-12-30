<script>
  export default {
    name: 'UInputExample'
  }
</script>

<template>
  <div class="row justify-center m-b">
    <div tabindex="-1" class="u-if row no-wrap items-end relative-position u-input text-primary">
      <div class="u-if-inner col row no-wrap relative-position">
        <input type="text" placeholder="Placeholder" step="any" class="col u-input-target u-no-input-spinner">
      </div>
    </div>
  </div>
</template>
