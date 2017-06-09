<template>
    <div id="citylist_wrap">
		<div class="hotcity">
			<h3>自配城市</h3>
			<ul>
				<li v-for="hotcity in data.HotCityList">
					<a @click="gotohome(hotcity.Name)" v-text="hotcity.Name"></a>
				</li>
			</ul>
			<p>全部城市&nbsp;(各城市所能选购的商品不同，请正确选择送达城市)</p>
		</div>
		<div class="citylist">
			<div class="citys" v-for="(citys,index) in citylist">
				<h5 v-text="index"></h5>
				<ul>
					<li v-for="cityName in citys">
						<a @click="gotohome(cityName)" v-text="cityName"></a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
export default{
	name: 'citylist',
	data(){
		return {
			data: [],
			citylist: []
		}
	},
	created () {
		this.axios.get('../../../static/data/citylistData.json').then(res => {
			this.data = res.data.RspData.data;
			
			let itemdata = {};
			for (let item of res.data.RspData.data.CityList) {
				itemdata[item.PY] = [];
			}
			for (let item of res.data.RspData.data.CityList) {
				itemdata[item.PY].push(item.Name);
			}
			this.citylist = itemdata;
		})
	},
    methods: {
		gotohome(city) {
			this.$router.push('/home?city='+ city);
		}
	}
}
</script>
<style>
#citylist_wrap {
	width: 100%;
	font-size: .12rem;
	overflow-y: auto;
	background-color: #eef5e9;
	position: fixed;
	top: 0;
	bottom: 0;
	z-index: 501;
}
.hotcity>h3 {
	line-height: 1.1;
	font-size: .1rem;
	font-weight: normal;
	color: #888;
	padding: .05rem .1rem;
}
.hotcity>ul {
	display: flex;
	flex-wrap: wrap;
	padding: .05rem .1rem;
}
.hotcity>ul>li {
	width: 33.33%;
	margin: .05rem 0;
}
.hotcity>ul>li:nth-child(3n+2) {
	display: flex;
	justify-content: center;
}
.hotcity>ul>li:nth-child(3n) {
	display: flex;
	justify-content: flex-end;
}
.hotcity>ul>li>a {
	display: block;
	width: .68rem;
	line-height: 1.428571429;
	box-sizing: content-box;
	color: #000;
	text-align: center;
	background-color: #fff;
	border: solid 1px #ccc;
	border-radius: .03rem;
	padding: .05rem 0;
}
.hotcity>p {
	line-height: 1.1;
	color: #888;
	padding: .05rem .1rem;
}
.citylist {
	padding-bottom: .1rem;
}
.citys>h5 {
	line-height: 1.1;
	color: #8dad77;
	font-weight: normal;
	margin: .1rem 0 .05rem .1rem;
}
.citys>ul {
	display: flex;
	flex-wrap: wrap;
	background-color: #fff;
	border-top: 1px solid #ccc;
	border-bottom: 1px solid #ccc;
}
.citys>ul>li {
	width: 33.3%;
	margin: .05rem 0;
}
.citys>ul>li:nth-child(3n+2) {
	display: flex;
	justify-content: center;
}
.citys>ul>li:nth-child(3n) {
	display: flex;
	justify-content: flex-end;	
}
.citys>ul>li>a {
	display: block;
	width: .7rem;
	line-height: 1.45;
	text-align: center;
	border: 1px solid #fff;
	padding: .05rem 0;
}
</style>