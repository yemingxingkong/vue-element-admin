import Vue from 'vue'

import Cookies from 'js-cookie'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import Element from 'element-ui'
import './styles/element-variables.scss'// theme 自定义主题

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'// Swiper 需要样式

import '@/styles/index.scss' // global css 全局css

import App from './App'
import store from './store'
import router from './router'

import i18n from './lang' // internationalization
import './icons' // icon
import './permission' // permission control
import './utils/error-log' // error log

import * as filters from './filters' // global filters

/**
 * If you don't want to use mock-server 如果您不想使用模拟服务器
 * you want to use MockJs for mock api 您想将MockJs用于模拟api
 * you can execute: mockXHR() 您可以执行：mockXHR（）
 *
 * Currently MockJs will be used in the production environment, 目前，MockJs将用于生产环境，
 * please remove it before going online! ! !  请先删除它，然后再上网！ ！ ！
 */
import { mockXHR } from '../mock'
if (process.env.NODE_ENV === 'production') {
  mockXHR()
}

Vue.use(Element, {
  size: Cookies.get('size') || 'medium', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
})

Vue.use(VueAwesomeSwiper)// Swiper default global options 默认全局选项

// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
