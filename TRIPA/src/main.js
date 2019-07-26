// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import mandMobile from 'mand-mobile'
import store from './store/index'
import 'mand-mobile/lib/mand-mobile.css'

// 请求拦截器
import requestPlugin from './request/http.js'


Vue.config.productionTip = false
Vue.use(mandMobile)
Vue.use(requestPlugin)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'

})
