<template>
	<home-swiper :banners="banners"/>
</template>
<script>
	//轮播图
	import HomeSwiper from '../../components/content/HomeSwiper.vue'
	//数据请求
	import {getHomeMultidata,getHomeGoods} from "../../network/home";
	export default {
		name: "Home",
		components: {
			HomeSwiper
		},
		data() {
			return {
				banners: [],
			}
		},
		created() {
			this.getHomeMultidata()
		},
		methods: {
			/* 网络请求相关方法*/
			getHomeMultidata() {
				getHomeMultidata().then(res => {
					//轮播图数据
					this.banners=res.data.data.banner.list
					console.log(this.banners)
					
				}).catch(err => {
					console.log(err)
				})
			}
		},
	}
</script>

<style>
</style>
