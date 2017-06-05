<template>
	<div id="category">
		<div class="category_header">
			<form action="">	
				<input type="text" placeholder="请输入商品名称">
			</form>
		</div>
	</div>
</template>

<script>
export default{
	name: 'category'
}
</script>
<style>
#category {
	font-size: .16rem;
}
.category_header{
	height: 46px;
	border-bottom: 1px solid #ccc;
	padding: 5px 0px 5px 15px;
	/*margin-left: 15px; */
}
.category_header form{
	width: 75.31%;
}
.category_header form input {
	height: 35px;
	width: 75.31%;
	background: #f8f8f8;
	font-size: 14px;
	color: #333;
	border: none;
	outline: none;
	padding: 0 20px 0 50px;
}

</style>