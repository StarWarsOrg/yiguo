<template>
	<div id="category_2">
		<div class="categroy_2_header">
			<ul class="sort">
				<li class="selling" :class="{default:index == indexx}" @click="addClass(index)" v-for="(item, index) in data2">{{item.name}}</li>
				<!-- <li class="price ">价格</li>
				<li class="selling ">热销</li> -->
			</ul>
		</div>
		<div class="list_of_goods">
			<ul>
				<li class="commodity" @click="" v-for = "item in data">
					<div class="picture">
						<img :src="item.SmallPic" alt="">
					</div>
					<div class="commodity_information" @click = "rotates(item.CommodityCode)">
						<p class="commodity_name">{{ item.CommodityName}}</p>
						<p class="money">￥{{item.CommodityPrice}}<span>({{item.Spec}})</span></p>
					</div>
					<span class="add_cart"></span>
				</li>
				<li class="commodity_alone"></li>
			</ul>
		</div>
	</div>
</template>

<script>
export default{
	name: 'cartgory_2',
	data(){
		return {
			data: [],
			id:this.$route.params.id,
			data2: [
				{name: '默认'},
				{name: '价格'},
				{name: '热销'}
			],
			indexx: false
		}
	},
	created () {
		this.axios.get('../../../static/data/categorypro/' + this.id + '.json').then(res => {
			this.data = res.data.RspData.data;
		})
	},
	methods: {
		addClass (index) {
			// console.log(index);
			this.indexx = index;
		},
		rotates(item){
			console.log(item);
			// this.$router.push('/detail?'+item);
			this.$router.push({
				path:'/detail?' + item,
				// query:{
				// 	id:code
				// }
			})
		}
	}
}
</script>
<style>
#category_2{
	height: 100%;
	overflow: auto;
	background: #fff;
}
.categroy_2_header{
	position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    width: 100%;
    height: .53rem;
    min-height: .44rem;
    border-bottom: 1px solid #e1e5e5;
    background: #fcfdfb;
    font-family: Verdana, Arial, Helvetica, microsoft yahei, '\534E\6587\7EC6\9ED1';
}
.sort {
	width: 2.90rem;
	margin: .05rem auto;
    border: 1px solid #008842;
    border-radius: .05rem .05rem .05rem .05rem;
    overflow: hidden;
}    
.sort li{
	float: left;
    list-style: none;
    width: 33.333%;
    height: .35rem;
    line-height: .35rem;
    text-align: center;    
}
.sort li:nth-child(2){
    border: 1px solid #008842;
    border-top: none;
    border-bottom: none;
}
.selling{
	font-size: .14rem;
	color: #299d1a;
}
.default{
	display: block;
    width: 100%;
    height: 100%;
    color: #fff;
    font-size: .15rem;
    background: #008842;
}
.default:after{
	content: "";
    display: inline-block;
    width: .14rem;
    height: .08rem;
    margin-left: .04rem;
    background: url(http://img02.yiguo.com/e/web/150623/00781/173832/filter_arrow.png) no-repeat;
    background-size: .30rem .15rem;
}
.list_of_goods{
	margin-top: .55rem;
}
.commodity {
	height: 1.1rem;
	padding: .1rem .15rem;
	border-bottom: 1px solid #ccc;
    position: relative;
}
.picture{
    margin-right: .07rem;
}
.commodity img{
	display: block;
    float: left;
    width: .85rem;
    height: .85rem;
    line-height: 0;
}
.commodity_information{
	/*float: left;*/
	margin-left: 95px;
	text-align: left;
}
.commodity_name{
	font-size: .14rem;
    color: #252525;
    line-height: .20rem;
    height: .40rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-bottom: .05rem;
    padding-right: .10rem;
}
.money{
	color: #fb3d3d;
    font-size: 16px;
    margin-top: .25rem;
}
.money>span{
	font-size: .11rem;
	color: #8d8a8a;
}
.add_cart{
	display: block;
	width: .42rem;
	height: .42rem;
	background: url(../../../static/img/category/add_cart.png) no-repeat center;
	background-size: 24px 24px;
	position: absolute;
  	bottom: .38rem;
  	right: .05rem;
    line-height: .42rem;
}
.commodity_alone{
	height: .20rem;
}
</style>