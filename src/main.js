import Vue from 'vue'
import App from './App.vue'
import store from './store'
import { router } from './router'
import VueResource from 'vue-resource'

import animated from 'animate.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import './configs/ant.js'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(ElementUI)
Vue.use(animated)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
