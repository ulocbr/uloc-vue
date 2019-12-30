import '../src/ie-compat/ie'
import Vue from 'vue'
import App from './Root.vue'

import { createRouter } from './router'

// this imports everything from Uloc
import Uloc, * as UlocAll from 'uloc-vue'
import store from './store'
import { menu } from './components/routes'
import { createIcons } from './icons'
import i18n from './i18n.js'

import ViewSource from './components/ViewSource'
import code from './components/CodeShow'
import codeLoader from './components/CodeLoader'
import ComponentTitle from './components/ComponentTitle'

Vue.use(Uloc, {
  components: UlocAll,
  directives: UlocAll,
  plugins: UlocAll,
  config: {}
})

Vue.use(i18n)
Vue.component(ViewSource.name, ViewSource)
Vue.component(code.name, code)
Vue.component(codeLoader.name, codeLoader)
Vue.component(ComponentTitle.name, ComponentTitle)

createIcons()

Vue.prototype.$uloc.menu.set(menu)

export function createApp () {
  const router = createRouter()

  const app = {
    router,
    store,
    render: h => h(App)
  }

  return {
    app: new Vue(app),
    router
  }
}
