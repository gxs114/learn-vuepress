import ElementUI from 'element-ui'
import 'normalize.css/normalize.css'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'

export default async ({ Vue }) => {
  // if (typeof process === 'undefined') {

  // }
  Vue.use(ElementUI)
  Vue.prototype.axios = axios
}
