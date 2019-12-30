import langPt from './i18n/pt-br.js'

export default {
  install (Vue, lang) {
    if (this.installed) { return }
    this.installed = true

    this.set = (lang = langPt) => {
      if (Vue.i18n) {
        Vue.i18n = lang
      }
      else {
        Vue.prototype.i18n = lang
        Vue.util.defineReactive(Vue, 'i18n', lang)
      }
      const el = document.documentElement
      el.setAttribute('lang', lang.lang)

      this.name = lang.lang
      this.lang = lang
    }

    this.set(lang)
  }
}
