// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import http from 'axios'
import App from './App'
import router from './router'
import md5 from 'js-md5'

Vue.prototype.$md5 = md5
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

http.interceptors.response.use(
  undefined,
  err => {
    if (err.response.status === 401) {
      localStorage.clear()
    }
    Promise.reject(err)
  }
)
