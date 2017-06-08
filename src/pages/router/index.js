//引入vue-router，并安装
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueAwesome from 'vue-awesome-swiper'
//可以让VueRouter在任何组件中使用
Vue.use(VueRouter)
Vue.use(VueAwesome)
//引入组件
import Home from '../home/home'
import Category from '../category/category'
import Eat from '../eat/eat'
import Cart from '../cart/cart'
import Mine from '../mine/mine'
import Category_category from '../category/category_2'
import Detail from '../common/detail'
import Cart1 from '../cart/cart1'

//定义路由规则
const routes = [
	{path: '', component: Home},
	{path: '/home', component: Home},
	{path: '/category', component: Category},
	{path: '/eat', component: Eat},
	{path: '/cart', component: Cart},
	{path: '/mine', component: Mine},
	{path: '/category_2/:id', component: Category_category},
	{path: '/detail', component: Detail},
	{path: '/cart1',  component: Cart1}
]

export default new VueRouter({
	routes
})