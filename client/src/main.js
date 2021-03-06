import Vue from 'vue'
import App from './App'
import router from './router'
import VueSweetalert2 from 'vue-sweetalert2'
import VueRouter from 'vue-router';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import '@/assets/custom-less/index.less';
import locale from 'iview/dist/locale/vi-VN';
import { Button, Table , Icon , Switch, Menu, MenuItem, Layout, Header } from 'iview';

import VueCookies from 'vue-cookies';
import VueLocalStorage from 'vue-localstorage'
 
Vue.use(VueLocalStorage)
Vue.use(VueCookies);
Vue.component('Header', Header);
Vue.component('Layout', Layout);
Vue.component('MenuItem', MenuItem);
Vue.component('Menu', Menu);
Vue.component('Button', Button);
Vue.component('Table', Table);
Vue.component('Icon', Icon);
Vue.use(VueRouter);
Vue.use(iView,{locale});
Vue.use(VueSweetalert2);
Vue.config.productionTip = false;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
