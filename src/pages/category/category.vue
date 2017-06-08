<template>
	<div id="category">
		<div>
			<div class="category_header">
				<form action="">
					<span></span>	
					<input type="text" placeholder="请输入商品名称">
				</form>
			</div>
			<span class="search">搜索</span>
		</div>
		<ul>
			<li class="category_item" v-for="item in data" @click="switchs()">
				<div class="category_item_title">
					<p class="category_item_icon"></p>
					<div class="category_item_des">
						<p>{{item.CategoryName}}</p>
						<p>{{item.Description}}</p>
					</div>
					<span class="category_item_more"></span>
				</div>
				<div class="category_item_wrap" v-show="true">
					<router-link to="">全部</router-link><div @click = "rotate(items)" v-for="items in item.Childs">{{items.CategoryName}}</div>
				</div>
			</li>
		<!-- 	<li class="category_item">
				<div class="category_item_title">
					<span class="category_item_icon"></span>
					<div class="category_item_des">
						<p>进口水果</p>
						<p>奇异果/车厘子/牛油果/柑桔橙柚</p>
					</div>
					<span class="category_item_more"></span>
				</div>
				<div class="category_item_wrap">
					<a href="">全部</a><a href="">奇异果</a><a href="">车厘子</a>
					<a href="">李</a><a href="">梅</a><a href="">牛油果</a>
				</div>
			</li> -->
			<li class="category_item_last"></li>
			<!-- <button @click="revice()">recive</button> -->
		</ul>
	</div>
</template>

<script>
// export default{
// 	name: 'category',
// 	data() {
// 		categoryData: this.alldata;
// 		return {
// 			categoryDatea
// 		}
// 	},
// 	methods: {
// 		revice() {
// 			console.log(this.alldata);
// 		}
// 	}
// }

export default{
	name: 'cartgory',
	data(){
		return {
			data: []
		}
	},
	
	created () {
		this.axios.get('../../../static/data/categoryData.json').then(res => {
			this.data = res.data.RspData.data;
			console.log(res.data);
			
		})
	},
	methods: {
		switchs() {

		},
		rotate(item){
			console.log(item);
			this.$router.push('/category_2/'+item.CategoryCode);
		}
	}
}
</script>


<style>
#category {
	font-size: .16rem;
	width: 100%;
	height: 100%;
	overflow-y: auto;
	background: #fff;
}
#category>div{
	position: relative;
}
.category_header{
	height: .46rem;
	border-bottom: 1px solid #ccc;
	padding: .05rem 0 .05rem .15rem;
	/*margin-left: 15px; */
}
.category_header form{
	width: 2.41rem;
}

.category_header form span{
	display: block;
	overflow: hidden;
    position: absolute;
    top: .12rem;
    left: .30rem;
    width: .21rem;
    height: .21rem;
    text-indent: -999px;
	background: url(../../../static/img/category/icon_search.png) no-repeat;
	background-size: 100% 100%;
}

.category_header form input {
	height: .35rem;
	width: 100%;
	background: #f8f8f8;
	font-size: .14rem;
	color: #333;
	border: none;
	border-radius: .25rem;
	outline: none;
	padding: 0 .20rem 0 .50rem;
}
.search
{
	display: block;
    width: .43rem;
    height: .45rem;
    line-height: .45rem;
    padding-right: .15rem;
    color: #008842;
    font-size: .14rem;
    position: absolute;
    top: 0;
    right: 0;
}
.category_item_last{
	height: .21rem;
}
.category_item_title{
	width: 100%;
	min-height: .74rem;
	padding: .15rem;
	border-bottom: 1px solid #e1e5e5;
	position: relative;
}
.category_item_icon{
	display: block;
	float: left;
	width: .48rem;
	height: .48rem;
	background: url(../../../static/img/category/icon-catalog.png) no-repeat;
	background-size: 2.88rem .96rem;
}
.category_item_title>p:nth-of-type(1){
	background-position: -1.92rem 0;
}
.category_item_des{
	width: 2.3rem;
	height: .43rem;
	padding-top: .04rem;
	display: block;
	float: left;
	margin-left: .10rem;
}
.category_item_more{
	display: block;
	background: url(../../../static/img/category/sprites.png) no-repeat;
	overflow: hidden;
    position: absolute;
    right: .15rem;
    top: 50%;
    width: .11rem;
    height: .18rem;
    margin-top: -.09rem;
    text-indent: -999px;
    background-size: 2.22rem;
    background-position: -.47rem 0;

}
.category_item_des p:nth-of-type(1){
	height: .21rem;
	line-height: .23rem;
	font-size: .14rem;
	text-align: left;
	color: #000;
}
.category_item_des p:nth-of-type(2){
	height: .18rem;
	line-height: .18rem;
	font-size: .12rem;
	text-align: left;
	color: #8d8a8a;
}
.category_item_wrap{
	width: 100%;
}
.category_item_wrap a{
	display: inline-block;
    width: 33.3%;
    padding: .07rem .15rem .07rem .14rem;
    color: #000;
    font-size: .13rem;
    line-height: .26rem;
    text-align: left;
    border-bottom: 1px solid #e1e5e5;
}
</style>