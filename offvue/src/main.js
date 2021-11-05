import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
// import './api/mock.api'; // 接口API

import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
Vue.use(ElementUI);

import axios from 'axios'
Vue.prototype.axios = axios;    //全局注册，
//全局css
import './assets/bootstrap-3.4.1-dist/css/bootstrap.min.css'
import 'lib-flexible'
// fade/zoom 等
import 'element-ui/lib/theme-chalk/base.css';
// collapse 展开折叠
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
Vue.component(CollapseTransition.name, CollapseTransition)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
