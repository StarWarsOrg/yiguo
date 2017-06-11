<template>
	<div class="warp">
		<div id="userCenter" class="userCenter clearfix">
			<a href="##" class="icon-setup"></a>
			<div id="userInfo" class="user-info">
				<div class="u-pic">
					<img src="../../../static/img/mine/no-pic.jpg" alt="用户头像">
					<div class="mask"></div>
				</div>
				<div class="u-name">
					<p class="name">18835223151</p>
					<p class="vip">普通用户</p>
				</div>
				<div class="u-account">
					<span class="yb">悠币：<strong>1000</strong></span>
					<span class="balance">余额：<strong>￥1500</strong></span>
				</div>
			</div>
			<div id="userList" class="user-list clearfix">
				<a class="user-list-icon01"><span>我的订单</span>我的订单</a>
				<a class="user-list-icon02" @click="minegwq()"><span>优惠券</span>优惠券<font class="badge">2</font></a>
				<a class="user-list-icon03"><span>收货地址</span>收货地址</a>
				<a class="user-list-icon06"><span>客服电话</span>客服电话</a>
				<a class="user-list-icon05"><span>提货券</span>提货券</a>  
				<a class="user-list-icon07"id="btnGwpt"><span>团来团趣</span>团来团趣</a>
			</div>
		</div>
	</div>
</template>

<script>
export default{
	name: 'mine',
    data () {
        return {
            data:[]
        }
    },
    methods: {
        minegwq (id) {
            this.$router.push('minegwq/');
        }
    }
}
</script>

<style>
.warp{
	height: 100%;
	background-color: white;
    overflow: auto;
}
#userCenter{
	height: 3.76rem;
	position: relative;
}
.icon-setup{
	position: absolute;
	top: .2rem;
	right: .2rem;
	width: .21rem;
	height: .23rem;
	background: url(../../../static/img/mine/icon-setup.png) no-repeat;
}
.user-info{
	text-align: center;
}
.u-pic{
	position: relative;
    width: 1.3rem;
    height: 1.3rem;
    padding: .2rem;
    margin: 0 auto;
    z-index: 2;
    overflow: hidden;
    text-align: center;
}
.u-pic img {
    width: 90px;
}
img{
	vertical-align: middle;
}
.u-pic .mask {
    background: url(../../../static/img/mine/myyg-bg.png) no-repeat 0 0;
    background-size: 1.3rem;
    width: 1.3rem;
    height: 1.3rem;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
}
.u-name .name {
    color: #299d1a;
    font-size: 14px;
    font-weight: bold;
}
.u-name .vip {
    margin-top: .05rem;
    font-size: 12px;
}
.u-account {
    display: table;
    margin: .15rem auto 0;
    width: 2.5rem;
}
.u-account span {
    display: table-cell;
    width: 50%;
    color: #008842;
    font-size: 12px;
}
.user-list {
    width: 2.85rem;
    height: 1.74rem;
    margin: .4rem auto 0 auto;
}
.user-list a {
    display: block;
    float: left;
    width: .65rem;
    margin: 0 .15rem .1rem;
    color: #666;
    text-align: center;
    font-size: 12px;
    position: relative;
}
.user-list a span {
    display: block;
    width: .48rem;
    height: .48rem;
    margin: .07rem .07rem .05rem;
    text-indent: -9.99rem;
    overflow: hidden;
}
.user-list a:nth-of-type(1) span{
    background: url(../../../static/img/mine/icon-usercenter.png) no-repeat;
    background-size: 3.36rem .48rem;
}
.user-list a:nth-of-type(2) span{
    background: url(../../../static/img/mine/icon-usercenter.png) no-repeat -.48rem;
    background-size: 3.36rem .48rem;
}
.user-list a:nth-of-type(3) span{
    background: url(../../../static/img/mine/icon-usercenter.png) no-repeat -.96rem;
    background-size: 3.36rem .48rem;
}
.user-list a:nth-of-type(4) span{
    background: url(../../../static/img/mine/icon-usercenter.png) no-repeat -1.44rem;
    background-size: 3.36rem .48rem;
}
.user-list a:nth-of-type(5) span{
    background: url(../../../static/img/mine/icon-usercenter.png) no-repeat -1.92rem;
    background-size: 3.36rem .48rem;
}
.user-list a:nth-of-type(6) span{
    background: url(../../../static/img/mine/icon-usercenter.png) no-repeat -2.4rem;
    background-size: 3.36rem .48rem;
}
.user-list .badge {
    background-color: #ff0000;
    left: auto;
    right: 3px;
    top: 2px;
}
.badge {
    position: absolute;
    padding: .02rem .04rem;
    text-align: center;
    text-indent: 0;
    font-family: Arial;
    background: #fb3d3d;
}
.badge {
    display: inline-block;
    min-width: .1rem;
    font-size: .12rem;
    font-weight: bold;
    line-height: 1;
    color: #fff;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: .1rem;
}
</style>