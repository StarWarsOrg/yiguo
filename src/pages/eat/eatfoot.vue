<template>
  <h1>成功跳转</h1>
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
				this.data = res.data.RspData.data;
				console.log(res.data)	
			})
		}
	}
</script>
<style>
	
</style>