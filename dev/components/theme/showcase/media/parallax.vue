<template>
  <u-page padding class="view-parallax">
    <div class="u-mx-xl m-b-xs m-t-md">
      <p class="caption">
        Scroll down (best using scrollbar instead of mouse scroll
        if on desktop) to see Parallax in action.
      </p>

      <p v-for="n in 7" :key="`a-${n}`" class="par-text">
        {{ loremipsum }}
      </p>
    </div>

    <u-parallax src="assets/parallax1.jpg" :height="200">
      <div slot="loading">
        Loading...
      </div>
      <h1>Parallax  Title</h1>
    </u-parallax>

    <div class="u-mx-xl u-my-md">
      <p v-for="n in 7" :key="`b-${n}`" class="par-text">
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
      <p v-for="n in 7" :key="`c-${n}`" class="par-text">
        {{ loremipsum }}
      </p>
    </div>

    <u-parallax src="assets/parallax1.jpg">
      <div slot="loading">
        Loading...
      </div>
      <h1>Title</h1>
    </u-parallax>

    <div class="u-mx-xl u-my-md">
      <p v-for="n in 7" :key="`d-${n}`" class="par-text">
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
      <p v-for="n in 7" :key="`e-${n}`" class="par-text">
        {{ loremipsum }}
      </p>
    </div>
  </u-page>
</template>

<script>
export default {
  data () {
    return {
      loremipsum: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  }
}
</script>
