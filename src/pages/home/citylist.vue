<template>
    <h1></h1>
</template>
<script>
export default{
	name: 'citylist',
	data(){
		return {
			data: []
		}
	},
	created () {
		this.axios.get('../../../static/data/citylistData.json').then(res => {
			this.data = res.data.RspData.data;
			console.log(res.data);
			
		})
	},
    methods: {
		
	}
}
</script>
<style>
    
</style>