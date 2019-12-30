<script>
  export default {
    name: 'UParallaxComponent',
    data () {
      return {
        loremipsum: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }
    }
  }
</script>

<template>
  <div class="view-parallax">
    <view-source src="https://github.com/ulocbr/uloc-vue/blob/master/dev/components/examples/parallax/samples/component.vue" />
    <h5 id="plugin">
      Component
    </h5>
    <p>
      Você pode utilizar o UParallax como um component em seu projeto.
    </p>

    <u-parallax src="assets/parallax1.jpg" :height="200">
      <div slot="loading">
        Loading...
      </div>
      <h1>Título</h1>
    </u-parallax>

    <div class="u-mx-xl u-my-md">
      <p v-for="n in 2" :key="`b-${n}`" class="par-text">
        {{ loremipsum }}
      </p>
    </div>

    <u-parallax src="assets/parallax2.jpg">
      <div slot="loading">
        Loading...
      </div>
      <h1>Bridge</h1>
    </u-parallax>

    <div class="u-mx-xl u-my-md">
      <p v-for="n in 2" :key="`c-${n}`" class="par-text">
        {{ loremipsum }}
      </p>
    </div>

    <u-parallax src="assets/parallax1.jpg">
      <div slot="loading">
        Loading...
      </div>
      <h1>Título</h1>
    </u-parallax>

    <div class="u-mx-xl u-my-md">
      <p v-for="n in 2" :key="`d-${n}`" class="par-text">
        {{ loremipsum }}
      </p>
    </div>

    <u-parallax src="assets/mountains.jpg" :height="200">
      <div slot="loading">
        Loading...
      </div>
      <h1>Mountains</h1>
    </u-parallax>

    <div class="u-mx-xl u-my-md">
      <p v-for="n in 2" :key="`e-${n}`" class="par-text">
        {{ loremipsum }}
      </p>
    </div>
  </div>
</template>

<style scoped>

</style>
