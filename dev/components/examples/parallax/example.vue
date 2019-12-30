<script>
  export default {
    name: 'UParallaxExample'
  }
</script>

<template>
  <!--div class="u-parallax" style="height: 200px;">
    <div class="u-parallax-image absolute-full">
      <img src="../../../assets/parallax1.jpg" class="ready" style="transform: translate3d(-50%, 419px, 0px);">
    </div>
    <div class="u-parallax-text absolute-full column flex-center">
      <h1>Parallax  Title</h1>
    </div>
  </div-->
  <u-parallax class="m-b" src="assets/parallax1.jpg" :height="200">
    <div slot="loading">
      Loading...
    </div>
    <h1>Título</h1>
  </u-parallax>
</template>
