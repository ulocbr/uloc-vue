<script>
  export default {
    name: 'UProps',
    props: {
      columns: Array,
      items: Array
    },
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
  <div class="present-config">
    <table>
      <thead>
        <tr>
          <th v-for="(col, key) in columns" :key="key">
            {{ col }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, itemkey) in items" :key="itemkey">
          <td v-for="(value, valuekey) in item" :key="valuekey">
            <span class="p-item" v-if="valuekey==='name'" v-html="value" />
            <span v-else v-html="value" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
