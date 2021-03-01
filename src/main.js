import Vue from 'vue'
import App from './App.vue'
import store from './store'
import { router } from './router'
import VueResource from 'vue-resource'

import './configs/ant.js'

Vue.config.productionTip = false
Vue.use(VueResource)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
