<template>
	<div class="cart_head">
			<p>全场满100元包邮，还差<span>100.00</span>元包邮</p>
		
	</div>
</template>

<script>
	export default{
		name:'cart1',
		data(){
			return{
				id: this.$route.query
			}
		},
//		created(){
//			console.log(this.id)
//		}
	}
</script>

<style>
</style>