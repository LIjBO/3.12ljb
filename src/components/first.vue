<template>
	<div>
		first
	{{conunt}}
	</div>
</template>

<script>
	export default {
		data(){
			return{
				conunt:""
			}
		},
// 		methods(){
// 			getone(){
// 				return this.$http.get("../static/1.txt")
// 			}
// 			gettwo(){
// 				return this.$http.get("../static/2.txt")
// 			}
// 		},
		mounted(){
// 			console.log(this.$http)
// 			this.$http.get('/api/veri').then((result)=>{
// 				console.log(result)
// 				this.conunt=result.data
// 			})
// 			this.$http.post("/api/dopost").then((result)=>{
// 				console.log(result)
// 			})
// 			this.$http({
// 				url:"/api/dopost",
// 				method:"get",
// 				parmas:{}
// 			})
// 			this.$http({
// 				url:"/api/dopost",
// 				method:"post",
// 				data:{}
// 			}).then((result)=>{
// 				console.log(result)
// 			})
			//并发请求
// 			this.$http.all([this.getone(),this.gettwo()])
// 			.then(this.$http.spread((arg1,arg2)=>{
// 				console.log(arg1)
// 				console.log(arg2)
// 			}))
			//spread  等待请求执行完成
			
			
			//this.$http.defaults.baseUrl="http://www.baidu.com"
			//this.$http.defaults.timeout=2000
			//this.$http.defaults.header=
			
			
			// axios自定义创建实例
			// this.$http.create({})
			//拦截器=》1.请求拦截器
			// this.$http.interceptors.request.use((config)=>{
				
			// })
			// 2.响应拦截器
			// this.$http.interceptors.response.use((res)=>{
				//setTimeout()
			// })
			//取消拦截器
			// this.$http.interceptors.eject(()=>{})
		},
	}//访问静态资源文件 
</script>

<style>
</style>
