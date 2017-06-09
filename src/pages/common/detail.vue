<template>
	<div class="cart_details">
		<!--轮播图-->
		<div class="slideshow">
			
		</div>
		<!--介绍-->
		<div class="cart_introduce">
			<p class="cart_introduceP1">{{ data.CommodityName }}</p>
			<p class="cart_introduceP2" >{{ total }}</p>
			<div class="cart_jiajie2">
			<ul>
				<li>-</li>
				<li>1</li>
				<li>+</li>
			</ul>
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
			}
		},
		//创建完成后
		created(){
			console.log(this.id)
			this.axios.get('../../../static/data/xiangqing.json').then(res => {			
				this.data = res.data.RspData.data;
	//			let date = res;
				
				console.log(res.data.RspData.data);
			})
		},
		computed:{
			total(){
				let res = this.data.CommodityPrice || 0;
				return res.toFixed(2);
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
		background:yellow;
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
		margin-bottom:.30rem;
	}
</style>