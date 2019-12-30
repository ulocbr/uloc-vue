<script>
  export default {
    name: 'UPaginationExample',
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
  <div class="u-pagination column m-t-lg m-b-lg" style="justify-content: center; flex-direction: row;">
    <button tabindex="0" type="button" class="u-btn inline relative-position u-btn-item no-select u-btn-rectangle u-btn-flat u-focusable u-hoverable text-teal">
      <div class="u-focus-helper" /><div class="u-btn-inner row col items-center justify-center">
        <i class="material-icons app-icon u-icon" aria-hidden="true">keyboard_arrow_left</i>
      </div>
    </button><button tabindex="0" type="button" class="u-btn inline relative-position u-btn-item no-select u-btn-rectangle u-btn-flat u-focusable u-hoverable text-teal" style="min-width: 2em;">
      <div class="u-focus-helper" /><div class="u-btn-inner row col items-center justify-center">
        <div>1</div>
      </div>
    </button><button tabindex="0" type="button" class="u-btn inline relative-position u-btn-item no-select u-btn-rectangle u-btn-flat u-focusable u-hoverable text-teal" style="min-width: 2em;">
      <div class="u-focus-helper" /><div class="u-btn-inner row col items-center justify-center">
        <div>…</div>
      </div>
    </button><div class="row justify-center">
      <button tabindex="0" type="button" class="u-btn inline relative-position u-btn-item no-select u-btn-rectangle u-btn-flat u-focusable u-hoverable text-teal" style="min-width: 2em;">
        <div class="u-focus-helper" /><div class="u-btn-inner row col items-center justify-center">
          <div>5</div>
        </div>
      </button><button tabindex="0" type="button" class="u-btn inline relative-position u-btn-item no-select u-btn-rectangle u-focusable u-hoverable bg-teal text-white" style="min-width: 2em;">
        <div class="u-focus-helper" /><div class="u-btn-inner row col items-center justify-center">
          <div>6</div>
        </div>
      </button><button tabindex="0" type="button" class="u-btn inline relative-position u-btn-item no-select u-btn-rectangle u-btn-flat u-focusable u-hoverable text-teal" style="min-width: 2em;">
        <div class="u-focus-helper" /><div class="u-btn-inner row col items-center justify-center">
          <div>7</div>
        </div>
      </button>
    </div><button tabindex="0" type="button" class="u-btn inline relative-position u-btn-item no-select u-btn-rectangle u-btn-flat u-focusable u-hoverable text-teal" style="min-width: 2em;">
      <div class="u-focus-helper" /><div class="u-btn-inner row col items-center justify-center">
        <div>…</div>
      </div>
    </button><button tabindex="0" type="button" class="u-btn inline relative-position u-btn-item no-select u-btn-rectangle u-btn-flat u-focusable u-hoverable text-teal" style="min-width: 2em;">
      <div class="u-focus-helper" /><div class="u-btn-inner row col items-center justify-center">
        <div>15</div>
      </div>
    </button><button tabindex="0" type="button" class="u-btn inline relative-position u-btn-item no-select u-btn-rectangle u-btn-flat u-focusable u-hoverable text-teal">
      <div class="u-focus-helper" /><div class="u-btn-inner row col items-center justify-center">
        <i class="material-icons app-icon u-icon" aria-hidden="true">keyboard_arrow_right</i>
      </div>
    </button>
  </div>
</template>
