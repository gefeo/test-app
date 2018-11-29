import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource);

import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

$cookies.config('time + 1000*36000','/');

import App from './App.vue'
import Navbar from './Navbar.vue'


new Vue({
  el: '#app',
  render: h => h(App)
})
