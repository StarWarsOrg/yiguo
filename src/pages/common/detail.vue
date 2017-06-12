<template>
	<div class="cart_details">
		<!--轮播图-->
		<div class="slideshow">
			<swiper :options="swiperOption" ref="mySwiper" class="swipers">
				<swiper-slide v-for="(item,index) in data.Pictures" :key="item.id">
					<img :src="data.Pictures[index]">
				</swiper-slide>
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
		</div>
		<!--介绍-->
		<div class="cart_introduce">
			<p class="cart_introduceP1">{{ data.CommodityName }}</p>
			<p class="cart_introduceP2" >{{ total }}</p>
			<div class="cart_jiajie2">
				<!--<ul>
					<li @click="jian()">-</li>
					<li>{{ data.count }}</li>
					<li @click="jia(getArr)">+</li>
				</ul>-->
			</div>
		</div>
		<!--规格-->
		<div class="standard">
			<p>规格</p><span>2个/份</span>
		</div>
		<!--产地-->
		<div class=" origin">
			<p><span>产地</span>{{ data.PlaceOfOrigin }}</p>
			<p>{{ data.DeliveryTips }}</p>
		</div>
		<!--用户评价-->
		<div class="evaluate">
			<p>用户评价<span>{{ "(" + data.VoteCount + ")"}}</span></p>
			<p><span>{{ data.VotePositiveRate + "%"}}</span>好评</p>
		</div>
		<div class="Image_details">
			<p>商品图文详情（建议在WIFI下查看）</p>
		</div>
		<div class="bottoms">
			
			<p>首页
				<router-link to="/home">
				<img src="../../../static/img/cart/download.png"/>
				</router-link>
			</p>
			
			<p>购物车
				<router-link to="/cart">
				<img src="http://img05.yiguoimg.com/e/web/161227/00585/180433/shopping-cart.png"/>
				</router-link>
			</p>
			<p>加入购物车</p>
		</div>
	</div>
		
</template>

<script>
	export default{
		name:'cart1',
		data(){
			return{
				id: this.$route.query,
				data:[],
//				params
				swiperOption: {
					observer: false,
					loop: true,
					// 分页器
					pagination: '.swiper-pagination'
				}
			}
		},
		
		methods: {
		
		jia(item){
			//第一个参数找到vuejs对应触发的事件名。第二个是传送的对象
			console.log(item)
//			this.$store.commit("ADD_COUNT", item);
//			console.log(this.$store.state.arr);
//			this.count = item;
		},
		jian(item){
			if (this.$store.state.arr[0].count <= 1) {
				
			}else {
				this.$store.commit('REDUCE_COUNT',item)
			}
		}
	},
		//创建完成后
		created(){
//			console.log(this.id)
			this.axios.get('../../../static/data/xiangqing.json').then(res => {
				res.data.RspData.data.count = 1;
				this.data = res.data.RspData.data;
//				console.log(this.data)
	//			let date = res;
			})
		},
		computed:{
			total(){
				let res = this.data.CommodityPrice || 0;
				return res.toFixed(2);
			},
			getArr(){
				return this.$store.state.arr;
			}	
		}
	}
</script>

<style>
	.cart_details{
		height:100%;
		width:100%;
		background:white;
		overflow-y: auto;
	}
	.slideshow{
		height:2rem;
		width: 100%;
	}
	.swipers{
		width: 100%;
		height: 2rem;
	}
	.slideshow img{
		width: 100%;
		height: 100%;
	}
	.cart_introduce{
		font-size:.14rem;
		height:.71rem;
		padding:10px 15px;
		position:relative;
		border-bottom:1px solid #ddd;
	}
	.cart_introduceP1{
		width:2.9rem;
		height:.20rem;
		line-height:.20rem;
		margin-bottom:.08rem;
	}
	.cart_introduceP2{
		width:2.9rem;
		color:red;
		font-size:.16rem;
	}
	.cart_jiajie2{
		display:flex;
		width:.9rem;
		height:.30rem;
		position:absolute;
		right:.15rem;
		bottom:.1rem;
	}
	.cart_jiajie2 ul{
		display:flex;
	}
	.cart_jiajie2  li{
		width:.30rem;
		height:.30rem;
		line-height:.30rem;
		text-align:center;
		border:1px solid #ddd;
	}
	.standard{
		display:flex;
		height:.49rem;
		border-bottom:1px solid #ddd;
		padding:.1rem .15rem .05rem .15rem;
	}
	.standard span{
		font-size:.12rem;
		display:inline-block;
		width:.53rem;
		height:.28rem;
		line-height:.28rem;
		background:#008842;
		border-radius:.05rem;
		color:white;
		text-align: center;
	}
	.standard p{
		font-size:.12rem;
		margin-right:.25rem;
		height:.28rem;
		line-height:.28rem;
	}
	.origin{
		height:.69rem;
		padding: .1rem .15rem;
		border-bottom:1px solid #ddd;
		font-size:.12rem;
	}
	.origin p{
		height:.24rem;
		line-height:.24rem;
	}
	.origin span{
		margin-right:.05rem;
	}
	.evaluate{
		height:.51rem;
		display:flex;
		justify-content:space-between;
		padding: .1rem .15rem;
		font-size:.12rem;
		border-bottom:1px solid #ddd;
	}
	.evaluate p{
		line-height:.30rem;
	}
	.evaluate p span{
		color:red;
	}
	.Image_details{
		height:.51rem;
		padding: .1rem .15rem;
		border-bottom:1px solid #ddd;
		font-size:.12rem;
		line-height:.30rem;
		/*margin-bottom:.30rem;*/
	}
	.bottoms{
		background:white;
		display:flex;
		height:.5rem;
		position:fixed;
		bottom:0;
		left:0;
		right:0;
		z-index:999;
		font-size:.14rem;
	}
	.bottoms p:first-child{
		width:.7039rem;
		height:.50rem;
		text-align:center;
		position:relative;
		padding-top:.30rem;
		line-height:.20rem;
	}
	.bottoms p img:first-child{
		width:.23rem;
		height:.20rem;
		position:absolute;
		top:.09rem;
		left:.25rem;
	}
	.bottoms p:nth-child(2){
		width:.7039rem;
		text-align:center;
		padding-top:.30rem;
		position: relative;
	}
	.bottoms p img:nth-child(2){
		width:.22rem;
		height:.19rem;
		position:absolute;
		top:0;
		left:0;
	}
	.bottoms p:last-child{
		width:1.7919rem;
		background:#fb3d3d;
		text-align:center;
		color:white;
		line-height:.50rem;
	}
</style>