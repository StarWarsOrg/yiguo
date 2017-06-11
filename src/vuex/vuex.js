import Vue from 'vue'

//引入vuex文件
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		//公共数据
		arr:[],
		obj:{}
	},
	
	mutations: {
		//修改数据的唯一途径
		ADD_COUNT(state, newItem){
			var flag = false;
			state.arr.map(function (item) {
				//title判断push里面有没有相同的数据
				if(newItem.CommodityCode == item.CommodityCode) {
					item.count++;
					flag = true;
				}
			});
				//判断第一次进来item是不是有值
				if(flag == false) {
//					newItem.count = 1;
					Vue.set(newItem,'count',1)
					state.arr.push(newItem);
//					console.log(state)
			}
		},
		ADD_OBJ(state,item){
			console.log(123);
			state.obj = item;
			console.log(state.obj);
		},
		
		REDUCE_COUNT(state, item){
			//a是对象。i是下标
			state.arr.map(function(a, i){
				if(item.CommodityCode == a.CommodityCode) {
					a !== item && item.count--,a.count--;
					
					if(a.count < 1) {
						state.arr.splice(i, 1)
						
					}
				}
			})
		}
		
	}
})
