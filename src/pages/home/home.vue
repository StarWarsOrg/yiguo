<template>
	<div id="home">
		<div class="home_topbar">
			<router-link to="/citylist"a class="home_city" v-text="cityName"></router-link>
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
		<div class="home_item secitem"  v-for="secitem in data.slice(1,8)">
			<a v-for="ad in secitem.adPictures" :href="ad.hrefValue">
				<img :src="ad.pictureUrl">
			</a>
			<div class="home_productlist">
				<ul>
					<li v-for="proinfo in secitem.componentCommoditys">
						<a href="">
							<div class="propic">
								<img class="tag" :src="proinfo.cornerPictureUrl" v-show="proinfo.cornerPictureUrl != ''">
								<img :src="proinfo.pictureUrl">
							</div>
							<div class="prodes">
								<p v-text="proinfo.commodityName"></p>
								<span></span>
								<div>
									<b v-text="'￥'+proinfo.commodityPrice"></b><span v-text="proinfo.commoditySpec"></span>
								</div>
							</div>
						</a>
					</li>
					<a class="home_more" :href="secitem.componentBase.hrefValue">
						<p>查看更多</p>
					</a>
				</ul>
			</div>
		</div>
		<div class="home_item thritem" v-for="thritem in data.slice(8,9)">
			<a v-for="ad in thritem.adPictures" :href="ad.hrefValue">
				<img :src="ad.pictureUrl">
			</a>
		</div>
		<ul class="home_item fouitem" v-for="fouitem in data.slice(9,11)">
			<li v-for="proinfo in fouitem.componentCommoditys">
				<a href="">
					<div class="propic">
						<img class="tag" :src="proinfo.cornerPictureUrl" v-show="proinfo.cornerPictureUrl != ''">
						<img :src="proinfo.pictureUrl">
					</div>
					<div class="prodes">
						<p v-text="proinfo.commodityName"></p>
						<p v-text="proinfo.subTitle"></p>
						<span></span>
						<div>
							<b v-text="'￥'+proinfo.commodityPrice"></b><span v-text="proinfo.commoditySpec"></span>
						</div>
					</div>
				</a>
			</li>
		</ul>
		<div class="home_item fivitem" v-for="fivitem in data.slice(11,16)">
			<div>
				<h3 v-text="fivitem.componentBase.customComponentName">新鲜水果</h3>
			</div>
			<ul>
				<li v-for="proinfo in fivitem.componentCommoditys">
					<a href="">
						<div class="propic">
							<img class="tag" :src="proinfo.cornerPictureUrl" v-show="proinfo.cornerPictureUrl != ''">
							<img :src="proinfo.pictureUrl">
						</div>
						<div class="prodes">
							<p v-text="proinfo.commodityName"></p>
							<span></span>
							<div>
								<b v-text="'￥'+proinfo.commodityPrice"></b><span v-text="proinfo.commoditySpec"></span>
							</div>
						</div>
					</a>
				</li>
			</ul>
		</div>
		<div class="home_footer">
			<div>
				<a href="http://img02.yiguo.com/mobapp/appdownload.html">客户端</a>
				<a class="active" href="">触屏版</a>
				<a href="http://www.yiguo.com">电脑版</a>								
			</div>
			<p>沪IPC备09008015号</p>
			<p>上海易果电子商务有限公司</p>
		</div>
	</div>
</template>

<script>
export default{
	name: 'home',
	data(){
		return {
			data: [],
			cityName: []
		}
	},
	created () {
		this.axios.get('../../../static/data/homeData.json').then(res => {
			
			this.data = res.data.data.template.componentList;
		})
		this.cityName = this.$route.query.city || '北京';
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
	position: absolute;
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
.secitem>.home_productlist>ul>li>a>.propic {
	width: .9017rem;
	height: .9017rem;
	position: relative;
}
.secitem>.home_productlist>ul>li>a>.propic>img {
	width: 100%;
	height: 100%;
}
.secitem>.home_productlist>ul>li>a>.propic>.tag {
	width: .2575rem;
	height: .26rem;
	position: absolute;
	top: .04638rem;
	left: .04638rem;
}
.secitem>.home_productlist>ul>li>a>.prodes {
	width: .9017rem;
	padding: .05153rem .05153rem 0;
}
.secitem>.home_productlist>ul>li>a>.prodes>p {
	line-height: 1;
	color: #333;
	font-size: .11rem;
	overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.secitem>.home_productlist>ul>li>a>.prodes>span {
	display: block;
	height: .1853rem;
	padding-top: .05668rem;
}
.secitem>.home_productlist>ul>li>a>.prodes>div {
	font-size: .1rem;
	color: #8d8a8a;
	padding-top: .05668rem;
}
.secitem>.home_productlist>ul>li>a>.prodes>div>b {
	font-weight: bold;
    color: #fb3d3d;
    margin-right: .02576rem;
}
.secitem>.home_productlist>ul>.home_more {
	height: 1.2572rem;
	color: #8d8a8a;
	padding: .4rem .12rem 0;
}
.secitem>.home_productlist>ul>.home_more>p {
	width: .103rem;
	height: .64rem;
	line-height: 1.1;
	white-space: normal;
}
.secitem>.home_productlist>ul>.home_more>p:after {
	content: '';
	display: inline-block;
	width: .1108rem;
	height: .1108rem;
	background: url(../../../static/img/home/right.png) no-repeat;
	background-size: 100% 100%;
	margin-top: .031rem;
}
.thritem>a {
	display: block;
	width: 100%;
	height: 1.1594rem;
}
.thritem>a>img {
	width: 100%;
	height: 100%;
}
.fouitem>li {
	background-color: #fff;
	padding: .0825rem;
}
.fouitem {
	padding-bottom: 0;
}
.fouitem:last-of-type {
	padding-bottom: .03092rem;
}
.fouitem>li>a {
	display: flex;
}
.fouitem>li>a>.propic {
	width: 1.2832rem;
	height: 1.1594rem;
	margin-right: .1238rem;
	position: relative;
}
.fouitem>li>a>.propic>img {
	width: 100%;
	height: 100%;
}
.fouitem>li>a>.propic>.tag {
	width: .2575rem;
	height: .26rem;
	position: absolute;
	top: 0;
	left: 0;
}
.fouitem>li>a>.prodes {
	width: 1.9rem;
	margin: .1546rem 0;
}
.fouitem>li>a>.prodes>p {
	margin-bottom: .06184rem;
}
.fouitem>li>a>.prodes>p:first-child {
	font-size: .14rem;
	color: #000;
}
.fouitem>li>a>.prodes>p:nth-child(2) {
	color: #8d8a8a;
}
.fouitem>li>a>.prodes>div {
	 color: #8d8a8a;
	 font: .11rem Arial;
 }
 .fouitem>li>a>.prodes>span {
	 display: block;
	 height: .1545rem;
	 /*margin-bottom: .195rem;*/
 }
 .fouitem>li>a>.prodes>div>b {
	 font-size: .15rem;
	 color: #fb3d3d;
	 margin-right: .02576rem;
 }
.fivitem>div {
	height: .438rem;
	line-height: .438rem;
	text-align: center;
	background-color: #fff;
}
.fivitem>div>h3 {
	display: inline-block;
    font-size: .125rem;
	font-weight: bold;
	padding: 0 .04638rem;
    position: relative;
}
.fivitem>div>h3:before,
.fivitem>div>h3:after {
	content: '';
	display: block;
	width: .1803rem;
	height: .0231rem;
	background: url(../../../static/img/home/ttimg.png) no-repeat;
	background-position: top left;
	background-size: auto 100%;
	position: absolute;
	top: 50%;
}
.fivitem>div>h3:before {
	left: -.18035rem;
}
.fivitem>div>h3:after {
	right: -.18035rem;
	transform: rotate(180deg);
}
.fivitem>ul {
	display: flex;
	flex-wrap: wrap;
	background-color: #fff;
	padding: 0 .06184rem .05153rem;
 }
.fivitem>ul>li {
	width: 50%;
	padding-top: .08245rem;
}
.fivitem>ul>li>a {
	display: block;
	width: 1.2778rem;
	margin: 0 auto;
}
.fivitem>ul>li>a>.propic {
	height: 1.28rem;
	position: relative;
}
.fivitem>ul>li>a>.propic>img {
	width: 100%;
	height: 100%;
}
.fivitem>ul>li>a>.propic>.tag {
	width: .2575rem;
	height: .26rem;
	position: absolute;
	top: 0;
	left: 0;
}
.fivitem>ul>li>a>.prodes {
	text-align: center;
}
.fivitem>ul>li>a>.prodes>p {
	line-height: 1;
	overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
	margin-top: .05153rem;
}
.fivitem>ul>li>a>.prodes>span {
	display: block;
	height: .1288rem;
	margin-top: .04638rem;
}
.fivitem>ul>li>a>.prodes>div {
	margin-top: .05668rem;
	color: #8d8a8a;
}
.fivitem>ul>li>a>.prodes>div>b {
    color: #fb3d3d;
	margin-right: .02576rem;
}
.home_footer {
    line-height: 1.5;
	color: #8d8a8a;
    text-align: center;
	padding-top: .03092rem;
}
.home_footer>div {
	margin-bottom: .07729rem;
}
.home_footer>div>a {
	 color: #8d8a8a;
	 padding: 0 .12882rem;
	 border-right: 1px solid #8d8a8a;
 }
 .home_footer>div>a:last-child {
	 border: none;
 }
.home_footer>div>.active {
	color: #000;
}
</style>