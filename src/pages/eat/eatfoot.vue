<template>

	<div id="eatfoot">
		<router-link to="/eat" id="eatFh"><img src="../../../static/img/eat/return.png"></router-link>
		<!--主要页面内容-->
		<ul class="title open-article clearFloat" id="rptIndexArt_baaaefd5-e84c-4712-967c-a77030fe4e22" rownum="1" pageindex="1">
			<li class="title-in clearFloat" v-for="(item,key) in data">
				<div class="img-box">
					<span class="txt food">{{item.OtherCategoryName}}</span>
					<span class="num"><i class="icon icon5"></i>{{item.InitReadNum}}</span>
					<img class="lazy" :src="item.PictureUrl" alt="{EfruitArticleTitle}" style="display: block;">
				</div>
				<p class="tit1">
					{{item.EfruitArticleTitle}}
				</p>
				<p class="tit2">{{item.EfruitArticleSummary}}</p>
				<div class="time">
					<img class="lazy  img-circle img-responsive" :src="item.AuthorPicture" alt="{item.Author}" style="display: block;">
					<span class="name">{{item.Author}}&nbsp;</span>
					<span class="time-new">{{item.PublishedTimed}}</span>
				</div>                   
			</li>
		</ul>
	</div>

</template>
<script>
	export default{
		name: 'eatfoot',
		data(){
			return {
				data: [],
				id:this.$route.params.id,
			}
		},
		created () {
			this.axios.get('../../../static/data/eat/' + this.id + '.json').then(res => {
				
                this.data = res.data.RspData.ArticleList.List;
				// console.log(res.data)
				
                this.data = res.data.RspData.data;
				console.log(res.data)	

                			})
		}
	}
</script>

<style scoped>
#eatfoot{
	width: 100%;
	height: 100%;
	overflow: auto;
}
#eatFh img{
	position: fixed;
	right: .06rem;
	bottom:.55rem;
	z-index: 50;
	width: .3rem;
	height: .3rem;
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