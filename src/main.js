// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

//将路由引入到router变量中， 为了挂载到vue实例上
//如果引入的是文件夹内部的index.js文件，可以不写index
import router from './pages/router'

//引入axios解决网络请求问题
import axios from 'axios'
//添加到原型上，保证任何地方都可以访问到
Vue.prototype.axios = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})
