<template>
	<div>
		<bigheader></bigheader>
		about
		<router-view></router-view>
		<router-view name='a'></router-view>
	</div>
</template>

<script>
	import bigheader from "@/components/header"
	export default{
		components:{
			bigheader
		}
	}
</script>

<style>
</style>