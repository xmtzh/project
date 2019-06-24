// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'iview/dist/styles/iview.css';    // 使用 CSS
import 'swiper/dist/css/swiper.css';
import 'mint-ui/lib/style.css'
import VueAwesomeSwiper from 'vue-awesome-swiper';
import iView from 'iview';
import Mint from 'mint-ui';
import VueLazyLoad from 'vue-lazyload'



Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueAwesomeSwiper);
Vue.use(iView);
Vue.use(Mint);
Vue.use(VueLazyLoad);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
