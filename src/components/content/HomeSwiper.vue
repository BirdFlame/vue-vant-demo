<template>
	<div class="swiper">
		<van-swipe :autoplay="3000" indicator-color="white">
		  <van-swipe-item v-for="(item,index) in banners" :key='index'>
				<a :href="item.link">
					<img :src="item.image" :alt="item.title">
				</a>
			</van-swipe-item>
		</van-swipe>
	</div>
</template>

<script>
	import Vue from 'vue';
	import { Lazyload, Swipe, SwipeItem} from 'vant';
	
	Vue.use(Lazyload).use(Swipe).use(SwipeItem);
	export default {
		name:'HomeSwiper',
		props:{
			banners:{
				type:Array,
				default() {
					return []
				}
			}
		}
	}
</script>

<style>
	.swiper {
		width: 100%;
	}
	.swiper img{
		width: 100%;
	}
</style>
