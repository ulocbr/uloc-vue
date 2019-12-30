<script>
  export default {
    name: 'PaginationExampleComponent',
    data () {
      return {
        page: 7
      }
    },
    computed: {},
    mounted () {
    },
    destroyed () {
    },
    methods: {},
    components: {}
  }
</script>

<template>
  <div>
    <view-source src="#" />
    <h5 id="plugin">
      Component
    </h5>
    <p>
      Você pode utilizar o u-pagination como um component em seu projeto.
    </p>
    <div class="m-t-md">
      <strong class="u-body-2">With buttons</strong>
      <u-pagination
        v-model="page"
        :min="1"
        :max="8"
      />
    </div>

    <div class="m-t-md">
      <strong class="u-body-2">With inputbox</strong>
      <u-pagination
        input
        v-model="page"
        :min="3"
        :max="8"
      />
    </div>

    <div class="m-t-md">
      <strong class="m-t-md u-body-2">With maximum number of links & custom color</strong>
      <u-pagination
        v-model="page"
        color="secondary"
        :min="1"
        :max="15"
        :max-pages="6"
      />
    </div>

    <div class="m-t-md">
      <strong class="m-t-md u-body-2">With no ellipses</strong>
      <u-pagination
        v-model="page"
        color="amber"
        text-color="black"
        :min="1"
        :max="15"
        :max-pages="6"
        :ellipses="false"
      />
    </div>

    <div class="m-t-md">
      <strong class="m-t-md u-body-2">With boundary links</strong>
      <u-pagination
        v-model="page"
        color="purple"
        :min="1"
        :max="15"
        :max-pages="6"
        boundary-links
      />
    </div>

    <div class="m-t-md">
      <strong class="u-body-2">With direction links</strong>
      <u-pagination
        v-model="page"
        color="teal"
        :min="1"
        :max="15"
        :max-pages="6"
        direction-links
      />
    </div>

    <div class="m-t-md">
      <strong class="u-body-2">With custom interval</strong>
      <u-pagination
        v-model="page"
        :min="5"
        :max="10"
      />
    </div>

    <div class="m-t-md">
      <strong class="u-body-2">With direction links</strong>
      <u-pagination
        v-model="page"
        color="tertiary"
        :min="7"
        :max="18"
        :max-pages="8"
        boundary-links
        direction-links
      />
    </div>
  </div>
</template>
