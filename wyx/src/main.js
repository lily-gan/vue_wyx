// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './mock/mockServer'
import store from './store/index.js'
import VueLazyload from 'vue-lazyload'
Vue.config.productionTip = false;
import lazyloadimg from './common/img/lazyload.gif'
Vue.use(VueLazyload,{
  //内部定义了一个去全局指令:v-lazy
   lazyloadimg
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})
