// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import echarts from 'echarts'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import './style/variables.scss'
import "./style/common/index.css";
import Axios from 'axios'
import qs from 'qs';
import api  from "./api";
// Vue.prototype.$api = api;
Vue.prototype.$qs = qs;


Vue.prototype.$axios = Axios

// Axios.defaults.baseURL = '/api'
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

Vue.prototype.$echarts = echarts
Vue.prototype.$axios = Axios
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(api)

// Axios.defaults.baseURL = '/api'
Axios.defaults.headers.post['Content-Type'] = 'application/json';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
