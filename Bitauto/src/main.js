// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import Axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css';
import 'iview/dist/styles/iview.css';    // 使用 CSS
import 'swiper/dist/css/swiper.css';
import 'mint-ui/lib/style.css'
import VueAwesomeSwiper from 'vue-awesome-swiper';
import iView from 'iview';
import Mint from 'mint-ui';
import VueLazyLoad from 'vue-lazyload';
import store from './store/index';



Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueAwesomeSwiper);
Vue.use(iView);
Vue.use(Mint);
Vue.use(VueLazyLoad);
Vue.prototype.$http = Axios  //将axios挂载在vue 的原型链上
// 设置message的显示时间
Vue.prototype.$messageS = function (msg) {
  this.$message.success({ message: msg, duration: 1000 })
}
Vue.prototype.$messageE = function (msg) {
  this.$message.error({ message: msg, duration: 1000 })
}
Vue.use(VueLazyLoad, {
  preLoad: 1,
  error: require('./images/error.png'),
  loading: require('./images/loading.gif'),
  attempt: 2,
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
