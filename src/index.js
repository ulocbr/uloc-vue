import install from './install'
import menu from './app/menu'
import IconLibrary from './components/icon/IconLibrary'
import { version } from '../package.json'

export * from './components'
export * from './directives'
export * from './plugins'
export * from './globals'
export * from './utils'
import i18n from './i18n'

export default {
  version,
  install,
  i18n,
  menu,
  IconLibrary
}
