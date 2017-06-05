<template>
	<div id="category">
		<div class="category_header">
			<form action="">
				<span></span>	
				<input type="text" placeholder="请输入商品名称">
			</form>
		</div>
		<span class="sousuo">搜索</span>
		<ul>
			<li class="category_item">
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
					<a href="">全部</a><a href="">奇异果</a><a href="">车厘子</a>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default{
	name: 'category'
}
</script>
<style>
#category {
	font-size: .16rem;
}
.category_header{
	height: 46px;
	border-bottom: 1px solid #ccc;
	padding: 5px 0px 5px 15px;
	/*margin-left: 15px; */
}
.category_header form{
	width: 2.41rem;
}

.category_header form span{
	display: block;
	overflow: hidden;
    position: absolute;
    top: 12px;
    left: 30px;
    width: 21px;
    height: 21px;
    text-indent: -999px;
	background: url(../../../static/img/category/icon_search.png) no-repeat;
	background-size: 100% 100%;
}

.category_header form input {
	height: 35px;
	width: 100%;
	background: #f8f8f8;
	font-size: 14px;
	color: #333;
	border: none;
	border-radius: 25px;
	outline: none;
	padding: 0 20px 0 50px;
}
.sousuo{
	display: block;
    width: 43px;
    height: 45px;
    line-height: 45px;
    padding-right: 15px;
    color: #008842;
    font-size: 14px;
    position: absolute;
    top: 0;
    right: 0;
}
.category_item_title{
	width: 100%;
	height: 74px;
	padding: 15px;
}
.category_item_icon{
	display: inline-block;
	width: 48px;
	height: 48px;
	background: url(../../../static/img/category/icon-catalog.png) no-repeat;
	background-position: 288px 96px;
}
</style>