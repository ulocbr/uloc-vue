<script>
  export default {
    methods: {
      showNotification () {
        this.$uloc.notify('Option selected & closed dropdown')
      }
    }
  }
</script>

<template>
  <u-btn-dropdown color="primary" label="Standard">
    <u-list link>
      <u-item v-for="n in 2" :key="`1.${n}`" v-close-overlay @click.native="showNotification">
        <u-item-side icon="folder" inverted color="primary" />
        <u-item-main>
          <u-item-tile label>
            Photos
          </u-item-tile>
          <u-item-tile sublabel>
            February 22, 2016
          </u-item-tile>
        </u-item-main>
        <u-item-side right icon="info" color="amber" />
      </u-item>
      <u-item-separator inset />
      <u-list-header inset>
        Files
      </u-list-header>
      <u-item v-close-overlay @click.native="showNotification">
        <u-item-side icon="assignment" inverted color="secondary" />
        <u-item-main>
          <u-item-tile label>
            Vacation
          </u-item-tile>
          <u-item-tile sublabel>
            February 22, 2016
          </u-item-tile>
        </u-item-main>
        <u-item-side right icon="info" color="amber" />
      </u-item>
    </u-list>
  </u-btn-dropdown>
</template>
