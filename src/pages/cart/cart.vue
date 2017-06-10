<template>
	<div class="cart">
		<div class="cart_head">
			<p>全场满100元包邮，还差<span>100.00</span>元包邮</p>
		</div>
		<div class="cart_zhuru">
			<span class="selected unchecked">
				
			</span>
			<img src="http://img13.yiguoimg.com/e/items/2017/170525/9288708311655097_300.jpg" class="cart_one"/>
			<div class="cart_p">
				<p class="cart_p1">北京大兴庞各庄袖珍西瓜2个1.4kg以上/个(北京)</p>
				<p class="cart_p3"></p>
				<p class="cart_p2">￥49</p>
			</div>	
			<div class="cart_jiajie">
				<ul>
					<li>-</li>
					<li>1</li>
					<li>+</li>
				</ul>
			</div>
			<img src="../../../static/img/cart/del.png" class="cart_tow"/>
		</div>
		
		<!--猜你喜欢-->
		<div class="cart_pushs">
			<div class="cartPush_haed">
				<p>——.猜你喜欢.——</p>
			</div>
			<div class="cartPush_lists"  >
				
				<div class="cartPush_list" v-for="datas in data" @click="push(datas.CommodityCode)">
					<!--<router-link to="/cart1">-->
				<img :src="datas.SmallPic" class="cartPush_img1"/>
					<div class="cartPush_character">
						<p class="cartPush_p1" >{{ datas.CommodityName }}</p>
						<p class="cartPush_p2">{{ datas.CommodityPrice }}</p>
					</div>
					<!--</router-link>-->
					<img src="../../../static/img/cart/add.png" class="cartPush_img"/>
				</div>
			</div>
		</div>
		<div class="calculation">
			<div class="contain_selet">
				<span class="selet selet2"></span><span class="quan">全选</span>
			</div>
			<div class="cart_money">
				<p>合计(不含运费)：<b class="red">￥ 176.00</b></p>
				<span>以优惠：￥0.00</span>
			</div>
			<div class="settlement">去结算</div>
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
			console.log(this.data);
		})
	},
	methods: {
		push(code){
			this.$router.push({
				path:'/detail?' + code,
//				query:{
//					id:code
//				}
			})
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
	.selected{
		display: inline-block;
		width: .1391rem;
		height: .1391rem;
		background-image: url(http://weixin.m.yiguo.com/Images/catimg/check2.png);
		background-size: 100%;
		margin-top: 10%;
	}
	.unchecked{
		background-image: url(http://weixin.m.yiguo.com/Images/catimg/check1.png);
	}
	.cart_zhuru{
		background: white;
		display: flex;
		height:.859rem;
		padding:.082rem 0 .082rem .314rem;
		position: relative;
		margin-bottom:.08rem;
		margin-top: .422rem;
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
		padding-bottom:.19006rem;
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
	.calculation{
		background-color: #fff;
		/*float: left;*/
		overflow: hidden;
	}
	.contain_selet{
		width: .6336rem;
		height: .4119rem;
		padding: .1365rem 0 .1365rem .09275rem;
		font-size: .12rem;
		float: left;
		
	}
	.selet2{
		display: block;
		width: .139rem;
		height: .139rem;
		line-height: .119rem;
		background-image: url(http://weixin.m.yiguo.com/Images/catimg/check2.png);
		background-size: 100%;
		float: left;
	}
	.selet{
		background-image: url(http://weixin.m.yiguo.com/Images/catimg/check1.png);
	}
	.quan{
		display: block;
		float: left;
	}
	.cart_money{
		float: left;
		text-align: right;
		font-size: .11rem;
	}
	.cart_money p b{
		color: #ff6353;
	}
		
</style>