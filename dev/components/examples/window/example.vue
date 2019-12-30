<script>
  export default {
    name: 'UWindowExample',
    data () {
      return {}
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
  <div class="u-box_ u-ml-auto u-mr-auto m-b block"
       style="max-width: 80%; padding: 40px; height: 300px;"
  >
    <div class="u-window-resizable-area"
         style="z-index: 10201;"
    />
    <div class="u-window bg-white u-ml-auto u-mr-auto" style="z-index: 10202; width: 400px; height: 200px">
      <div class="u-window-header u-window-header-moved">
        <div class="u-window-header-title">
          <span><i
            class="material-icons u-window-header-title-ico text-info app-icon u-icon" color="info"
            aria-hidden="true"
          >verified_user</i>Meu Window</span>
        </div>
        <div class="u-window-header-buttons">
          <button class="u-window-btn u-window-btn-maximize">
            <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212.37 212.37">
              <rect x="7.5" y="7.5" width="197.37" height="197.37"
                    style="fill: transparent; stroke: rgb(33, 25, 21); stroke-miterlimit: 10; stroke-width: 15px;"
              />
            </svg>
          </button>
          <button class="u-window-btn u-window-btn-close">
            <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 287.83 287.83">
              <line x1="7.07" y1="7.07" x2="280.76" y2="280.76"
                    style="fill: none; stroke-miterlimit: 10; stroke-width: 20px;"
              />
              <line x1="280.76" y1="7.07" x2="7.07" y2="280.76"
                    style="fill: none; stroke-miterlimit: 10; stroke-width: 20px;"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="u-window-content row items-center justify-center" />
    </div>
  </div>
</template>
