import { resolve } from "path";
import { readdir } from "fs"
import ElementUI from 'element-ui'
import 'normalize.css/normalize.css'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'

export default async ({ Vue }) => {
  Vue.use(ElementUI)
  Vue.prototype.axios = axios


  const matchs = require.context("./projects", true, /index.vue/)
  matchs.keys().forEach(key => {
    let res = /^\.\/(\w+)\/index\.vue/.exec(key)
    if(Array.isArray(res) && res[1]) {
      Vue.component(res[1], matchs(key).default)
    }
  })
}
