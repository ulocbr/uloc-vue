<template>
  <svg
    class="u-spinner u-spinner-anim"
    :width="size"
    :height="size"
    :class="classes"
    viewBox="25 25 50 50"
  >
    <circle class="path" cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="3" stroke-miterlimit="10" />
  </svg>
</template>

<script>
import mixin from './spinner-mixin'

export default {
  name: 'USpinner',
  mixins: [mixin]
}
</script>
