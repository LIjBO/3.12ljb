<template>
	<div class="header">
		<ul>
			<li><Router-link to="/home">首页</Router-link></li>
			<li><Router-link to="/about">关于</Router-link></li>
			<li><Router-link to="/new">新闻</Router-link></li>
			<li><Router-link to="contact">联系</Router-link></li>
			<li><Router-link to="result">咨询</Router-link></li>
		</ul>
	</div>
</template>

<script>
</script>

<style>
	.header{
		width: 100%;
		height: 50px;
		line-height: 50px;
		background: #abcdef;
		color: #000;
	}
	ul li{
		float: left;
		width: 10%;
		margin-left: 80px;
	}
</style>
