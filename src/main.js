import Vue from 'vue'
import App from './App.vue'
import store from './store/index.js'
import router from "./router"
import pageLoading from '@/components/pageLoading'

Vue.config.productionTip = false
Vue.component("pageLoading",pageLoading)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
