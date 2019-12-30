<script>
  const getTag = function (tag, content) {
    let regexp = new RegExp(`<${tag}[\\s\\S]*?>([\\s\\S]*?)<\/${tag}>`, 'gim')
    let result = regexp.exec(content)
    if (!result || typeof result[1] === 'undefined') {
      return null
    }
    return result[1]
  }
  /* eslint-disable */
  export default {
    name: 'code-loader',
    props: {
      component: String,
      example: String,
      lang: {
        type: String,
        default: 'javascript'
      }
    },
    data () {
      return {
        raw: '',
        html: null,
        js: null,
        style: null
      }
    },
    computed: {},
    created () {
      this.raw = require(`!raw-loader!./examples/${this.component}/samples/${this.example}.vue`)
      this.html = getTag('template', this.raw)
      this.js = getTag('script', this.raw)
      this.style = getTag('style', this.raw)
    },
    destroyed () {
    },
    methods: {},
    components: {}
  }
</script>

<template>
  <div>
    <code-show class="m-t" lang="html" v-if="html">
      <slot>{{html}}</slot>
    </code-show>
    <code-show class="m-t" lang="stylus" v-if="style">
      <slot>{{style}}</slot>
    </code-show>
    <code-show class="m-t" lang="javascript" v-if="js">
      <slot>{{js}}</slot>
    </code-show>
  </div>
</template>
