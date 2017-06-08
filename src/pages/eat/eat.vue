<template>
	<div id="eat">
		<div class="lbt">
			<swiper :options="swiperOption" ref="mySwiper">
				<swiper-slide v-for="(item,key) in data">
					<img :src="item.PictureUrl">
				</swiper-slide>
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
		</div>
		<div class="title  title-icon" id="divOtherCategoryBanner">
            <div class="title-in title-pad" style="">
                <ul class="icon-list clear" style="">
                    <li v-for="item in dataEatMain">
                        <a target="_blank" href="http://article.m.yiguo.com/Article/Category/food?isopenhwa=1" title="">
                            <img class="lazy icon1" :src="item.PictureUrl" alt="做美食" style="display: block;">
							<i class="new"></i>
                            {{item.BannerName}}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <ul class="title open-article clearFloat" id="rptIndexArt_baaaefd5-e84c-4712-967c-a77030fe4e22" rownum="1" pageindex="1">
            <li class="title-in clearFloat">
                <div class="img-box">
                    <span class="txt food">做美食</span>
                    <span class="num"><i class="icon icon5"></i>1914</span>
                    <img class="lazy" src="http://img14.yiguoimg.com/e/albums/2017/170608/153403896860517064_800x468.jpg" alt="爱吃牛肉的你，一定不容错过这几款牛肉面(粉)！" style="display: block;">
                </div>
                <p class="tit1">
                    爱吃牛肉的你，一定不容错过这几款牛肉面(粉)！
                </p>
                <p class="tit2">进来嗦面（粉）！</p>
                <div class="time">
                    <img class="lazy  img-circle img-responsive" src="http://img14.yiguoimg.com/e/albums/2017/170608/153403896860549832_210.jpg" alt="易果君" style="display: block;">
                    <span class="name">易果君&nbsp;</span>
                    <span class="time-new">5小时前</span>
                </div>                   
            </li>
        </ul>
	</div>
</template>

<script>
export default{
	name: 'eat',
	data () {
		return {
			data: [],
			dataEatMain: [],
			swiperOption: {
				autoplay: 1500,
				observer: true,
				nextButton: '.swiper-button-next',
				prevButton: '.swiper-button-prev',
				// 如果需要分页器
				pagination: '.swiper-pagination'
			}
		}
	},
	created(){
		this.axios.get('../../../static/data/eatBannerData.json').then(res =>{
			this.data = res.data.RspData.data.AdSwiperImage35.Banners;
			this.dataEatMain = res.data.RspData.data.AdCategory37.Banners;
		})
        this.axios.get('../../../static/data/eatMainData.json').then(res =>{
			console.log(res.data);
			this.dataEatFoot = res.data
		})
	}
}
</script>
<style>
#eat{
    overflow: auto;
    height: 100%;
}
.lbt{
	width: 100%;
	height: 1.288rem;
}
.lbt img{
		width: 100%;
		height: 1.288rem;
	}
.title {
    z-index: 9;
    position: relative;
    box-sizing: border-box;
    margin-bottom: .05rem;
    width: 100%;
    background: #fff;    
}
.title-icon {
    z-index: 9;
    position: relative;
    box-sizing: border-box;
    margin-bottom: .05rem;
    width: 100%;
	height: .91rem;
}
.title .title-in .img-box {
    position: relative;
}
.title .title-pad {
    padding: 0 3.6% 0 3.6%;
    box-sizing: border-box;
	height: 100%;
}
.open-article{
    padding: 2.6% 2.6% 0 2.6%;
}
.title .title-in {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    background: #fff;
}
.title .title-in .icon-list li {
    width: 20%;
    float: left;
    padding: .14rem 0 .14rem;
}
.title .title-in .icon-list li a {
    display: inline-block;
    position: relative;
    padding-top: .44rem;
    width: 100%;
    height: 100%;
    font-size: 14px;
    color: #808080;
    text-align: center;
}
.title .title-in .icon-list li a .icon1 {
    position: absolute;
    top: .06rem;
    left: 50%;
    margin-left: -.2rem;
    width: .4rem;
    height: .32rem;
}
.title .title-in .icon-list li:nth-child(5) .new {
    position: absolute;
    right: .1rem;
    top: -.12rem;
    width: .3rem;
    height: .23rem;
    background: url(http://img05.yiguoimg.com/e/web/170113/00581/160217/new.png) no-repeat;
    background-size: 100% 100%;
}
.title .title-in .img-box .txt {
    position: absolute;
    top: .1rem;
    left: 0;
    padding: .02rem .09rem 0 .04rem;
    box-sizing: border-box;
    height: .23rem;
    line-height: .2rem;
    background: #cccccc;
    text-align: left;
    color: #fff;
    border-radius: 0 .15rem .15rem 0;
    font-size: 13px;
    opacity: 0.90;
    filter: alpha(opacity=90);
    -moz-opacity: 0.90;
}
.title .title-in .img-box .food {
    background: #fb3d61;
}
.title .title-in .img-box .num {
    position: absolute;
    top: .1rem;
    right: .1rem;
    padding: .02rem .08rem 0px .2rem;
    height: .17rem;
    line-height: .16rem;
    box-sizing: border-box;
    background: rgba(255,255,255,.85);
    border-radius: 20px;
    text-align: center;
    color: #656565;
    font-size: 12px;
}
.title .title-in .img-box .num .icon5 {
    position: absolute;
    left: .06rem;
    top: .04rem;
    background-position: 0 0;
    width: .12rem;
    height: .09rem;
}
.icon {
    background: url(http://img07.yiguoimg.com/e/web/161012/00584/105027/icon.png) no-repeat;
    background-size: 1rem;
}
.title .title-in .img-box img {
    display: block;
    width: 100%;
}
.title .title-in .tit1 {
    padding: .14rem 0 0;
    font-size: 18px;
    color: #000;
    line-height: .22rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.title .title-in .tit2 {
    padding: 10px 0 0px;
    font-size: 13px;
    color: #6d6d6d;
    line-height: 17px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.title .title-in .time {
    position: relative;
    padding: 0 .8rem 0 .45rem;
    box-sizing: border-box;
    margin-top: .1rem;
}
.title .title-in .time img {
    position: absolute;
    left: 0px;
    top: 50%;
    margin-top: -.17rem;
    width: .34rem;
    height: .34rem;
    border-radius: 50%;
}
.title .title-in .time .name {
    display: inline-block;
    line-height: .57rem;
    color: #8d8a8a;
    font-size: 13px;
}
.title .title-in .time .time-new {
    position: absolute;
    top: 50%;
    margin-top: -.28rem;
    right: 0;
    line-height: .57rem;
    color: #8d8a8a;
    font-size: 13px;
}
</style>