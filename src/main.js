// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './vuex/vuex'
//将路由引入到router变量中， 为了挂载到vue实例上
//如果引入的是文件夹内部的index.js文件，可以不写index
import router from './pages/router'

//引入axios解决网络请求问题
import axios from 'axios'
//添加到原型上，保证任何地方都可以访问到
Vue.prototype.axios = axios

// axios.get('static/data/categoryData.json')
// .then(function (res) {
// 	Vue.prototype.alldata =res;
// })
// .catch(function (error) {
// console.log(error);
// });

Vue.config.productionTip = false
// const bus = new Vue()
 // eslint-disable no-new 
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
  store
})

