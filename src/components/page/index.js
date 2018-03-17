import page from './page.vue'

// page.install = function(Vue){
//     Vue.component('pageloading', page);
// }
const pageloading = {
  install: function (Vue) {
    if (typeof window !== 'undefined' && window.Vue) {
      Vue = window.Vue
    }
    Vue.component('pageloading', page)
  }
}

export default pageloading