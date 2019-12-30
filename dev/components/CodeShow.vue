<script>
  import highlight from 'highlight.js/lib/highlight.js'
  import highlightSTYLUS from 'highlight.js/lib/languages/stylus'
  import highlightXML from 'highlight.js/lib/languages/xml'
  import highlightJavascript from 'highlight.js/lib/languages/javascript'
  import highlightShell from 'highlight.js/lib/languages/shell'

  highlight.registerLanguage('stylus', highlightSTYLUS)
  highlight.registerLanguage('xml', highlightXML)
  highlight.registerLanguage('javascript', highlightJavascript)
  highlight.registerLanguage('shell', highlightShell)

  const getIndentedSource = source => {
    let lines = source.split('\n')
    let matches

    if (lines[0] === '') {
      lines.shift()
    }

    let indentation = (matches = (/^[\s\t]+/).exec(lines[0])) !== null ? matches[0] : null

    if (indentation) {
      lines = lines.map(line => {
        line = line.replace(indentation, '')

        return line.replace(/\t/g, '  ')
      })

      return lines.join('\n').trim()
    }

    return source
  }

  export default {
    name: 'CodeShow',
    props: {
      lang: String
    },
    data () {
      return {}
    },
    computed: {},
    mounted () {
      this.$nextTick().then(() => {
        this.reindentSource()
        highlight.highlightBlock(this.$refs.codeblock)
      })
    },
    destroyed () {
    },
    methods: {
      reindentSource () {
        const code = this.$refs.codeblock
        code.textContent = getIndentedSource(code.textContent)
      }
    },
    components: {}
  }
</script>

<template>
  <pre><code ref="codeblock" :class="lang"><slot v-pre /></code></pre>
</template>
