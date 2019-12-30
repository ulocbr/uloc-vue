<script>
  export default {
    name: 'AlertExampleComponent',
    data () {
      return {
        visible: false,
        visible2: false
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
      Components
    </h5>
    <p>
      Você pode utilizar o u-alert como um component em seu projeto.
    </p>

    <div class="m-t-md">
      <u-alert color="primary">
        With label only
      </u-alert>
    </div>

    <div class="m-t-md">
      <u-alert icon="map" color="orange">
        With label and icon
      </u-alert>
    </div>

    <div class="m-t-md">
      <u-alert avatar="assets/boy-avatar.png" color="secondary">
        With label and icon
      </u-alert>
    </div>

    <div class="m-t-md">
      <u-alert
        icon="alarm"
        color="tertiary"
        :actions="[
          { label: 'Snooze', handler: () => { this.$uloc.notify('Snoozed') } }
        ]"
        class="q-mb-sm"
      >
        It's time to take a break
      </u-alert>
    </div>

    <div class="m-t-md">
      <u-alert
        icon="assignment"
        color="brown-5"
        :actions="[
          { label: 'Snooze', icon: 'alarm', handler: () => { this.$uloc.notify('Snoozed') } },
          { label: 'Dismiss', icon: 'done', handler: () => { this.$uloc.notify('Dismissed') } }
        ]"
        class="q-mb-sm"
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae ducimus voluptas recusandae numquam repellendus blanditiis aperiam unde. Mollitia sunt, ex distinctio eum debitis pariatur omnis ducimus molestiae optio quis eos.
      </u-alert>
    </div>

    <div class="m-t-md">
      <u-alert
        color="primary"
        :actions="[
          { label: 'OK', icon: 'watch_later', handler: () => { this.$uloc.notify('So please take that break') } }
        ]"
      >
        It's time to take a break
      </u-alert>
    </div>

    <div class="m-t-md">
      <u-alert
        v-if="visible"
        color="secondary"
        icon="cloud"
        appear
        :actions="[{ label: 'Dismiss', handler: () => { visible = false } }]"
        class="q-mb-sm"
      >
        Lorem ipsum dolor sit amet.
      </u-alert>
    </div>

    <div class="m-t-md">
      <u-alert
        v-if="visible2"
        type="negative"
        :actions="[{ label: 'Snooze', icon: 'alarm', handler: () => { visible2 = false } }]"
      >
        Lorem ipsum dolor sit amet.
      </u-alert>
    </div>

    <div class="m-t-md">
      <u-alert
        v-for="type in ['positive', 'info', 'negative', 'warning']"
        :key="type"
        :type="type"
        class="m-t-md"
      >
        Alert type: "{{ type }}"
      </u-alert>
    </div>
  </div>
</template>
