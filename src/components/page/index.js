import page from './page.vue'
const pageloading = {
  install: function (Vue) {
    if (typeof window !== 'undefined' && window.Vue) {
      Vue = window.Vue
    }
    Vue.component('pageloading', page)
  }
}

// 官方写法

// pageloading.install = function (Vue, options) {
//   // 1. add global method or property
//   Vue.myGlobalMethod = function () {
//     // something logic ...
//   }

//   // 2. add a global asset
//   Vue.directive('my-directive', {
//     bind (el, binding, vnode, oldVnode) {
//       // something logic ...
//     }
//     ...
//   })

//   // 3. inject some component options
//   Vue.mixin({
//     created: function () {
//       // something logic ...
//     }
//     ...
//   })
//   // 4. add an instance method
//   Vue.prototype.$myMethod = function (methodOptions) {
//     // something logic ...
//   }
// }

export default pageloading