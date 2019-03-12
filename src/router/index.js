import Vue from "vue"
import VueRouter from "vue-router"
import First from "../components/first"
import Two from "../components/two"
import Home from "@/components/home"
import About from "@/components/about"
import Contact from "@/components/contact"
import Result from "@/components/result"
import New from "@/components/new"
import Live from '@/components/live';
import Eggs from '@/components/egg';
import AboutOne from '@/components/about/aboutone'
import AboutTwo from '@/components/about/abouttwo'
Vue.use(VueRouter)
//  路由的两种方式  hash  history    默认为hash
export default new VueRouter({
	// mode:"history",
	//mode  路由的模式
	// base   根
	// base:_dirname,
	
	routes:[
		{
			path:"/",
			component:First
		},
		{
			path:"/two",
			component:Two
		},
		{
			path:"/home",
			component:Home,
			children:[
			{
				path:"/home/live/:id",
				component:Live
			},
			{
				path:"/home/egg",
				component:Eggs,
				name:"egg"
			}
			]
		},
		{
			path:"/about",
			component:About,
			children:[
				{
					path:"/about/aboutone",
					components:{
						default:AboutOne,
						a:AboutTwo,
					
					}
				}
			]
			
		},
		{
			path:"/new",
			component:New
		},
		{
			path:"/contact",
			component:Contact
		},
		{
			path:"/result",
			component:Result
		},
		
	]
})