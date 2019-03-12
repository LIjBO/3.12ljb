<template>
	<div>
		<bigheader></bigheader>
		home
		<!-- 动态获取参数-->
		<div >获取的参数为:{{$route.params.id}}</div>
		<button @click="sendlive">点击</button>
		<div>
			<ul>
				<li><Router-link to="/home/live/1354321056">直播</Router-link></li>
				<!-- 动态路由    name   命名式路由 -->
				<li><Router-link :to="{path:'/home/egg',name:'egg'}">弹幕</Router-link></li>
			</ul>
		</div>
		<Router-view></Router-view>
	</div>
</template>

<script>
	import bigheader from "@/components/header"
	export default{
		data(){
			return{
				id:"351234"
			}
		},
		// 动态跳转路由
		methods:{
			sendlive(){
				// 编程式导航
				this.$router.push("/home/live/"+this.id)
			}
		},
		components:{
			bigheader
		},
		
		
	}
</script>

<style>
</style>
