// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import First from "./components/first.vue"
import axios from 'axios'
import router from './router'
import "../static/common.css"
// Vue.prototy(property) Vue.config.productionTip:boolean
Vue.config.productionTip = false
Vue.prototype.$http=axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router
  
})
