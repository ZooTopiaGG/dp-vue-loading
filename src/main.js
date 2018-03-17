import Vue from 'vue'
import App from './App.vue'
import pageloading from './components/page'
Vue.use(pageloading)
Vue.config.productionTip = false

new Vue({
  el: '#dp-vue-loading',
  pageloading,
  render: h => h(App)
})