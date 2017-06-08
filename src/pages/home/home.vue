<template>
	<div id="home">
		<div class="home_topbar">
			<router-link to="/citylist"a class="home_city">北京</router-link>
			<router-link to="/category" class="home_search"></router-link>
		</div>
		<div class="home_item first" v-for="item in data.slice(0,1)">
			<div class="home_swiperWrap">
				<img src="http://img09.yiguoimg.com/e/items/2017/170608/9288708782006984_1125x652.jpg" />
			</div>
			<a class="home_banner" v-for="banner in item.adPictures" :href="banner.hrefValue">
				<img :src="banner.pictureUrl">
			</a>
			<div class="home_menu">
				<a v-for="menu in item.componentNavs" :href="menu.hrefValue">
					<img :src="menu.pictureUrl">
					<p v-text="menu.navName"></p>
				</a>
			</div>
			<div class="home_news">
				<span></span>
				<div>
					<p>【6折】中润长江优选冷鲜猪蹄400g</p>
				</div>
			</div>
		</div>
		<div class="home_item secitem">
			<a href="">
				<img src="http://img11.yiguoimg.com/e/items/2017/170608/9288708796162760_1125x652.jpg">
			</a>
			<div class="home_productlist">
				<ul>
					<li>
						<div class="propic">
							<img class="tag" src="http://img02.yiguo.com/e/web/130101/app/proms/2.png">
							<img src="http://img12.yiguoimg.com/e/items/2017/170510/9288707619037866_300.jpg">
						</div>
						<div class="prodes">
							<p>佳沛新西兰绿奇异果</p>
							<span></span>
							<div>
								<b>￥138</b>/3.3kg
							</div>
						</div>
					</li>
					<li>
						<div class="propic">
							<img class="tag" src="http://img02.yiguo.com/e/web/130101/app/proms/2.png">
							<img src="http://img12.yiguoimg.com/e/items/2017/170510/9288707619037866_300.jpg">
						</div>
						<div class="prodes">
							<p>佳沛新西兰绿奇异果</p>
							<span></span>
							<div>
								<b>￥138</b>/3.3kg
							</div>
						</div>
					</li>
					<li>
						<div class="propic">
							<img class="tag" src="http://img02.yiguo.com/e/web/130101/app/proms/2.png">
							<img src="http://img12.yiguoimg.com/e/items/2017/170510/9288707619037866_300.jpg">
						</div>
						<div class="prodes">
							<p>佳沛新西兰绿奇异果</p>
							<span></span>
							<div>
								<b>￥138</b>/3.3kg
							</div>
						</div>
					</li>
					<li>
						<div class="propic">
							<img class="tag" src="http://img02.yiguo.com/e/web/130101/app/proms/2.png">
							<img src="http://img12.yiguoimg.com/e/items/2017/170510/9288707619037866_300.jpg">
						</div>
						<div class="prodes">
							<p>佳沛新西兰绿奇异果</p>
							<span></span>
							<div>
								<b>￥138</b>/3.3kg
							</div>
						</div>
					</li>
					<li>
						<div class="propic">
							<img class="tag" src="http://img02.yiguo.com/e/web/130101/app/proms/2.png">
							<img src="http://img12.yiguoimg.com/e/items/2017/170510/9288707619037866_300.jpg">
						</div>
						<div class="prodes">
							<p>佳沛新西兰绿奇异果</p>
							<span></span>
							<div>
								<b>￥138</b>/3.3kg
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default{
	name: 'home',
	data(){
		return {
			data: []
		}
	},
	created () {
		this.axios.get('../../../static/data/homeData.json').then(res => {
			this.data = res.data.data.template.componentList;
			console.log(res.data.data.template);
			
		})
	},
}

</script>
<style>
#home {
	width: 100%;
	height: 100%;
	font: .12rem "华文细黑";
	overflow: auto;
}
.home_topbar {
	display: flex;
	width: 100%;
	height: .32rem;
	background: linear-gradient(to right, rgb(54, 219, 132), rgb(14, 178, 123));
	padding: .0438rem .08245rem .0438rem 0;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 100;
}
.home_city {
	width: .5667rem;
	line-height: 2;
	font-size: .12rem;
	color: #fff;
	text-align: center;
}
.home_city:after {
	display: inline-block;
	vertical-align: middle;
	content: '';
	width: .06172rem;
	height: .031rem;
	background: url(../../../static/img/home/arrow.png) no-repeat;
	background-size: 100% 100%;
	margin-left: .04rem;
}
.home_search {
	width: 2.6rem;
	height: .232rem;
	border-radius: .2rem;
	background: url(../../../static/img/home/search.png) no-repeat;
	background-size: .20609rem;
	background-position: .055rem .02rem;
	background-color: rgba(255,255,255,.2);
}
.home_item {
	padding: .03092rem 0;
}
.home_item.first {
	margin-top: .31948rem;
	padding-top: 0;
}
.home_swiperWrap {
	width: 100%;
	height: 1.855rem;
}
.home_swiperWrap>img {
	width: 100%;
	height: 100%;
}
.home_banner {
	display: block;
	width: 100%;
	height: .9791rem;
	background-color: #D6D6D7;
}
.home_banner>img {
	width: 100%;
	height: 100%;
}
.home_menu {
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	height: 1.4297rem;
	background-color: #fff;
	padding: .0876rem .05411rem 0;
}
.home_menu>a {
	display: block;
	width: 25%;
	height: .6686rem;
}
.home_menu>a>img {
	display: block;
	width: .41219rem;
	height: .41219rem;
	margin: 0 auto;
}
.home_menu>a>p {
	color: rgb(51, 51, 51);
	text-align: center;
}
.home_news {
	display: flex;
	width: 100%;
	height: .2834rem;
	background-color: #fff;
	position: relative;
}
.home_news:after {
	content: '';
	width: 100%;
	height: 1px;
	background-color: #e2e2e2;
	transform: scaleY(0.5);
	position: absolute;
	top: 0;
	left: 0;
}
.home_news>span {
	display: block;
	height: 100%;
	width: .76rem;
	background: url(../../../static/img/home/news.png) no-repeat;
	background-size: .49rem .11rem;
	background-position: .12882rem .09rem;
	position: relative;

}
.home_news>span:after {
	content: '';
	display: block;
	width: 1px;
	height: .17rem;
	background-color: #e2e2e2;
	transform: scaleX(0.5);
	position: absolute;
	top: .06rem;
	right: 0;
}
.home_news>div {
	width: 2.44rem;
	height: 100%;
	color: rgb(51, 51, 51);
	padding: .05688rem .08245rem .05688rem .1rem;
}
.secitem>a {
	display: block;
	width: 100%;
	height: 1.855rem;
}
.secitem>a>img {
	width: 100%;
	height: 100%;
}
.secitem>.home_productlist {
	width: 100%;
	height: 1.5716rem;
	background-color: #fff;
	overflow: hidden;
}
.secitem>.home_productlist>ul {
	display: flex;
	width: 100%;
	height: 1.8034rem;
	white-space: nowrap;
    overflow-x: scroll;
    overflow-y: hidden;
	padding: .08245rem 0 .14944rem .08245rem;
}
.secitem>.home_productlist>ul>li>.propic {
	width: .9017rem;
	height: .9017rem;
	position: relative;
}
.secitem>.home_productlist>ul>li>.propic>img {
	width: 100%;
	height: 100%;
}
.secitem>.home_productlist>ul>li>.propic>.tag {
	width: .2575rem;
	height: .26rem;
	position: absolute;
	top: .04638rem;
	left: .04638rem;
}
.secitem>.home_productlist>ul>li>.prodes {
	width: .9017rem;
	padding: .05153rem .05153rem 0;
}
.secitem>.home_productlist>ul>li>.prodes>p {
	line-height: 1;
	color: #333;
	overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.secitem>.home_productlist>ul>li>.prodes>span {
	display: block;
	height: .1853rem;
	padding-top: .05668rem;
}
.secitem>.home_productlist>ul>li>.prodes>div {
	color: #8d8a8a;
	padding-top: .05668rem;
}
.secitem>.home_productlist>ul>li>.prodes>div>b {
	font-weight: bold;
    color: #fb3d3d;
    margin-right: .02576rem;
}
</style>