//引入vue-router，并安装
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueAwesome from 'vue-awesome-swiper'
//可以让VueRouter在任何组件中使用
Vue.use(VueRouter)
Vue.use(VueAwesome)
//引入组件
import Home from '../home/home'
import CityList from '../home/citylist'
import Category from '../category/category'
import Eat from '../eat/eat'
import Cart from '../cart/cart'
import Mine from '../mine/mine'
import Category_category from '../category/category_2'
import Detail from '../common/detail'
import EatFoot from '../eat/eatfoot'
import Minegwq from '../mine/minegwq'

//定义路由规则
const routes = [
	{path: '', component: Home},
	{path: '/home', component: Home},
	{path: '/citylist', component: CityList},
	{path: '/category', component: Category},
	{path: '/eat', component: Eat},
	{path: '/cart', component: Cart},
	{path: '/mine', component: Mine},
	{path: '/category_2/:id', component: Category_category},
	{path: '/detail', component: Detail},
	{path: '/minegwq', component: Minegwq},
	{path: '/eatfoot/:id', component: EatFoot}
]

export default new VueRouter({
	routes
})