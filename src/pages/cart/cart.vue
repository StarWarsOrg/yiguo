<template>
	<div class="cart">
		<div class="cart_head">
			<p>全场满100元包邮，还差<span>100.00</span>元包邮</p>
		</div>
		<div class="cart_zhuru">
			
		</div>
	</div>
</template>

<script>
export default{
	name: 'cart'
}
</script>
<style>
		.cart{
			background:#f4f4f4;
			height:500px;
		}
		.cart_head{
			display: flex;
			width:100%;
			height:34px;
			line-height:34px;
			background:#fff9eb;
			font-size:.14rem;
			padding-left:9.6px;
			margin-bottom:9.6px;
		}
		.cart_head p span{
				color:red;
		}
</style>