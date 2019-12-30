<script>
  export default {
    name: 'ChipsInputExample'
  }
</script>

<template>
  <div class="row justify-center m-b">
    <div tabindex="-1" class="u-if row no-wrap items-end relative-position u-chips-input text-primary">
      <div class="u-if-inner col row no-wrap relative-position">
        <div class="col row items-center group u-input-chips">
          <div class="u-chip row no-wrap inline items-center u-chip-small bg-primary text-white" tabindex="-1">
            <div class="u-chip-main ellipsis">
              Joe
            </div>
            <div class="u-chip-side u-chip-close u-chip-right row flex-center">
              <i class="material-icons cursor-pointer app-icon u-icon" type="material" aria-hidden="true">cancel</i>
            </div>
          </div>
          <input placeholder="Type some names" class="col u-input-target justify-start">
        </div>
      </div>
      <i class="material-icons u-if-control invisible app-icon u-icon" type="material" aria-hidden="true">send</i>
    </div>
  </div>
</template>
