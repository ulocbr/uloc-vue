import { hasWebStorage } from './platform.js'
import { getStorage } from '../utils/web-storage.js'

export default {
  install ({ $uloc }) {
    if (hasWebStorage()) {
      const storage = getStorage('local')
      $uloc.localStorage = storage
      Object.assign(this, storage)
    }
  }
}
