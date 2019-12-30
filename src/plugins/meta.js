import extend from '../utils/extend.js'

let updateId
const __meta = {
  title: '',
  name: '',
  titleTemplate: null,
  meta: {},
  link: {},
  script: {},
  htmlAttr: {},
  bodyAttr: {}
}

function normalize (meta) {
  if (meta.title) {
    meta.title = meta.titleTemplate
      ? meta.titleTemplate(meta.title || '')
      : meta.title
    delete meta.titleTemplate
  }

  ;[['meta', 'content'], ['link', 'href']].forEach(type => {
    const
      metaType = meta[type[0]],
      metaProp = type[1]

    for (let name in metaType) {
      const metaLink = metaType[name]
      if (metaLink.template) {
        if (Object.keys(metaLink).length === 1) {
          delete metaType[name]
        }
        else {
          metaLink[metaProp] = metaLink.template(metaLink[metaProp] || '')
          delete metaLink.template
        }
      }
    }
  })
}

function changed (old, def) {
  if (Object.keys(old).length !== Object.keys(def).length) {
    return true
  }
  for (let key in old) {
    if (old[key] !== def[key]) {
      return true
    }
  }
}

function bodyFilter (name) {
  return !['class', 'style'].includes(name)
}

function htmlFilter (name) {
  return !['lang', 'dir'].includes(name)
}

function diff (meta, other) {
  let add = {}, remove = {}

  if (!meta) {
    return {add: other, remove}
  }

  if (meta.title !== other.title) {
    add.title = other.title
  }

  ;['meta', 'link', 'script', 'htmlAttr', 'bodyAttr'].forEach(type => {
    const old = meta[type], cur = other[type]
    remove[type] = []

    if (!old) {
      add[type] = cur
      return
    }

    add[type] = {}

    for (let key in old) {
      if (!cur.hasOwnProperty(key)) {
        remove[type].push(key)
      }
    }
    for (let key in cur) {
      if (!old.hasOwnProperty(key)) {
        add[type][key] = cur[key]
      }
      else if (changed(old[key], cur[key])) {
        remove[type].push(key)
        add[type][key] = cur[key]
      }
    }
  })

  return {add, remove}
}

function apply ({add, remove}) {
  if (add.title) {
    document.title = add.title
  }

  if (Object.keys(remove).length > 0) {
    ['meta', 'link', 'script'].forEach(type => {
      remove[type].forEach(name => {
        document.head.querySelector(`${type}[data-qmeta="${name}"]`).remove()
      })
    })
    remove.htmlAttr.filter(htmlFilter).forEach(name => {
      document.documentElement.removeAttribute(name)
    })
    remove.bodyAttr.filter(bodyFilter).forEach(name => {
      document.body.removeAttribute(name)
    })
  }

  ;['meta', 'link', 'script'].forEach(type => {
    const metaType = add[type]

    for (let name in metaType) {
      const tag = document.createElement(type)
      for (let att in metaType[name]) {
        if (att !== 'innerHTML') {
          tag.setAttribute(att, metaType[name][att])
        }
      }
      tag.setAttribute('data-qmeta', name)
      if (type === 'script') {
        tag.innerHTML = metaType[name].innerHTML || ''
      }
      document.head.appendChild(tag)
    }
  })
  Object.keys(add.htmlAttr).filter(htmlFilter).forEach(name => {
    document.documentElement.setAttribute(name, add.htmlAttr[name] || '')
  })
  Object.keys(add.bodyAttr).filter(bodyFilter).forEach(name => {
    document.body.setAttribute(name, add.bodyAttr[name] || '')
  })
}

function parseMeta (component, meta) {
  if (component._inactive) {
    return
  }

  const hasMeta = component.$options.meta
  if (hasMeta) {
    extend(true, meta, component.__uMeta)
    if (hasMeta.stopPropagation) {
      return
    }
  }

  component.$children && component.$children.forEach(child => {
    parseMeta(child, meta)
  })
}

function updateClient () {
  const meta = JSON.parse(JSON.stringify(__meta))
  parseMeta(this.$root, meta)
  normalize(meta)

  apply(diff(this.$root.__currentMeta, meta))
  this.$root.__currentMeta = meta
}

function beforeCreate () {
  if (this.$options.meta) {
    if (typeof this.$options.meta === 'function') {
      if (!this.$options.computed) {
        this.$options.computed = {}
      }
      this.$options.computed.__uMeta = this.$options.meta
    }
    else {
      this.__uMeta = this.$options.meta
    }
  }
}

function triggerMeta () {
  this.$options.meta && this.__uMetaUpdate()
}

export default {
  install ({queues, Vue}) {
    Vue.mixin({
      beforeCreate,
      created () {
        if (this.$options.meta) {
          this.__uMetaUnwatch = this.$watch('__uMeta', this.__uMetaUpdate)
        }
      },
      activated: triggerMeta,
      deactivated: triggerMeta,
      beforeMount: triggerMeta,
      destroyed () {
        if (this.$options.meta) {
          this.__uMetaUnwatch()
          this.__uMetaUpdate()
        }
      },
      methods: {
        __uMetaUpdate () {
          clearTimeout(updateId)
          updateId = setTimeout(updateClient.bind(this), 50)
        }
      }
    })
  }
}
