<template>
	<div class="cart">
		<div class="cart_head">
			<p>全场满100元包邮，还差<span>100.00</span>元包邮</p>
		</div>
		<div class="cart_zhuru" v-for="item in getArr" >
			<img :src="item.SmallPic" class="cart_one" @click="push(item.CommodityCode)"/>
			<div class="cart_p">
				<p class="cart_p1">{{ item.CommodityName}}</p>
				<p class="cart_p3"></p>
				<p class="cart_p2">￥{{item.CommodityPrice}}</p>
			</div>	
			<div class="cart_jiajie">
				<ul>
					<li @click="jian(item)">-</li>
					<li>{{ item.count }}</li>
					<li @click="jia(item)">+</li>
				</ul>
			</div>
			<!--<img src="../../../static/img/cart/del.png" class="cart_tow"/>-->
		</div>
		
		<!--猜你喜欢-->
		<div class="cart_pushs">
			<div class="cartPush_haed">
				<p>——.猜你喜欢.——</p>
			</div>
			<div class="cartPush_lists">
				
				<div class="cartPush_list" v-for="datas in data" >
					<!--<router-link to="/cart1">-->
				<img :src="datas.SmallPic" class="cartPush_img1"@click="push(datas)" />
					<div class="cartPush_character">
						<p class="cartPush_p1" >{{ datas.CommodityName }}</p>
						<p class="cartPush_p2">{{ datas.CommodityPrice }}</p>
					</div>
					<!--</router-link>-->
					<img src="../../../static/img/cart/add.png" class="cartPush_img" @click="jia(datas)"/>
				</div>			
			</div>		
		</div>
	</div>
</template>

<script>
export default{
	name: 'cart',
	data(){
		return {
			data: [],

		
		}
	},
	
	created () {
		this.axios.get('../../../static/data/cartData.json').then(res => {			
			this.data = res.data.RspData.GuessYouLikeCommoditys;
		})
	},
	methods: {
		push(item){
			this.$store.commit("ADD_OBJ", item);
			this.$router.push({
				path:'/detail?'
//				query:{
//					id:code
//				}
//				jia(item);
//				name:'obj',
//				parmas:{
//					id:item.code
//				}
			})
		},
		jia(item){
			//第一个参数找到vuejs对应触发的事件名。第二个是传送的对象
			this.$store.commit("ADD_COUNT", item);
//			console.log(this.$store.state.arr);
//			this.count = item;
		},
		jian(item){
			this.$store.commit('REDUCE_COUNT',item)
		}
	},
	computed:{
			getArr(){
				return this.$store.state.arr
			}
	}
}
</script>
<style>
.cart{
	width: 100%;
	height: 100%;
	overflow-y: auto;
	background:#f4f4f4;
	font-size:.14rem;
	margin-top: .4rem;
}
.cart_head{
	display: flex;
	width:100%;
	height:.34rem;
	line-height:.34rem;
	background:#fff9eb;
	font-size:.14rem;
	padding-left:.096rem;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 400;
}
.cart_head p span{
	color:red;
}
.cart_zhuru{
	background: white;
	display: flex;
	height:.859rem;
	padding:.082rem 0 .082rem .314rem;
	position: relative;
	margin-bottom:.08rem;
	/*margin-top: .422rem;*/
}
.cart_one{
	widows:.695rem;
	height:.695rem;
}
.cart_p{
	width:1.62rem;
	height:.69rem;
	text-align: left;
	font-size:.12rem;		
}
.cart_p1{
	height:.2884rem;
	width:1.62rem;
}
.cart_p3{
	height:.22rem;
	width:1.62rem;
}
.cart_p2{
	color:red;
	font-weight:800;
}
.cart_jiajie{
	height:.185rem;
	position:absolute;
	bottom:.082rem;
	right:.12rem;
	font-size:.12rem;
	text-align: center;
	line-height:.185rem;
}
.cart_jiajie ul{
	display:flex;
}
.cart_jiajie li{
	width:.185rem;
	height:.185rem;
	border:.01rem solid #ddd;
}
.cart_tow{
	height:.1288rem;
	width:.1288rem;
	position: absolute;
	right:.12rem;
}
.cart_pushs{
	background:white;
	width:100%;
}
.cartPush_haed{
	height:.425rem;
	line-height:.425rem;
	text-align:center;
}
.cartPush_lists{
	display:flex;
	width:100%;
	justify-content: center;
	flex-wrap:wrap;
	padding-bottom:.39006rem;
}
.cartPush_list{
	position:relative;
	height:1.8545rem;
	width:1.55rem;
	padding:.04122rem .13655rem;
}
.cartPush_img{
	height:.2061rem;
	width:.2061rem;
	position:absolute;
	bottom:.04122rem;
	right:.13rem;
}
.cartPush_img1{
	height:1.2778rem;
	width:1.2778rem;
	display: block;
}
.cartPush_character{
	font-size:.12rem;
}
.cartPush_p1{
	font-size:.12rem;
	width:1.2783rem;
	height:.2884rem;
	line-height:.14rem;
	text-align:left;
	overflow:hidden;
}
.cartPush_p2{
	color:red;
	width:1.2783rem;
	height:.2061rem;
	text-align:left;
	line-height:.2061rem;
}		
</style>
