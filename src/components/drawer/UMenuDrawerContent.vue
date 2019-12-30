<script>
  import UDrawerItem from './DrawerItem.vue'
  export default {
    name: 'UMenuDrawerContent',
    props: {
      folded: Boolean,
      menu: Array
    },
    computed: {},
    created () {
      this.$on('closeDrawer', () => {
        this.$parent.$emit('closeDrawer')
      })
    },
    destroyed () {
    },
    methods: {
      isSubmenu (v) {
        return !(typeof v === 'undefined')
      }
    },
    components: {UDrawerItem}
  }
</script>

<template>
  <div class="drawer-content">
    <slot name="drawer-content">
      <ul selectable="a" attr-for-selected="href">
        <u-drawer-item :folded="folded" v-for="item in menu" :key="item.name" :item="item"
                       :has-sub-menu="isSubmenu(item.submenu)"
        />
      </ul>
    </slot>
    <slot name="extra-content" />
  </div>
</template>
