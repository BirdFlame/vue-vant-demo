<template>
  <div id="home">
    <home-nav-bar/>
    <home-swiper :banners="banners"/>
    <home-recommend :recommends="recommends"/>
    <home-frature/>
    <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl"/>
    <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
    >
      <good-list :goods="goods[currentType].list"/>
    </van-list>
  </div>
</template>
<script>
  //导航栏
  import HomeNavBar from "../../components/content/HomeNavBar";
  //轮播图
  import HomeSwiper from '../../components/content/HomeSwiper.vue'
  //推荐板块
  import HomeRecommend from "../../components/content/HomeRecommend";
  //每周推荐板块
  import HomeFrature from "../../components/content/HomeFrature";
  //选项卡
  import TabControl from "../../components/content/TabControl";
  //商品
  import GoodList from "../../components/content/GoodList";
  //数据请求
  import {getHomeMultidata, getHomeGoods} from "../../network/home";
  import Vue from 'vue';
  import { List } from 'vant';

  Vue.use(List);
  export default {
		name: "Home",
		components: {
			HomeSwiper,
			HomeNavBar,
			HomeRecommend,
			HomeFrature,
			TabControl,
			GoodList,
		},
		data() {
			return {
				banners: [],
				recommends: [],
				goods: {
					'pop': {page: 0, list: []},
					'new': {page: 0, list: []},
					'sell': {page: 0, list: []}
				},
				currentType: 'pop',
        loading: false,
        finished: false,
        error: false,
			}
		},
		created() {
			this.getHomeMultidata()
			this.getHomeGoods('pop')
			this.getHomeGoods('new')
			this.getHomeGoods('sell')
		},
		methods: {
			/* 网络请求相关方法*/
			getHomeMultidata() {
				getHomeMultidata().then(res => {
					//轮播图数据
					this.banners = res.data.data.banner.list
					this.recommends = res.data.data.recommend.list
				}).catch(err => {
					console.log(err)
				})
			},
			//商品请求
			getHomeGoods(type) {
				const page = this.goods[type].page + 1
				getHomeGoods(type, page).then(res => {
					this.goods[type].list.push(...res.data.data.list)
					this.goods[type].page += 1
				}).catch(err => {
					console.log(err)
				})
			},
			//选项卡点击监听
			tabClick(index) {
				switch (index) {
					case 0:
						this.currentType = 'pop'
						break
					case 1:
						this.currentType = 'new'
						break
					case 2:
						this.currentType = 'sell'
						break
				}
				this.$refs.tabControl.currentIndex = index
			},
      onLoad() {
        setTimeout(()=>{
          let that = this.goods[this.currentType].list.length
          this.getHomeGoods(this.currentType)
          console.log('1', this.currentType)
          this.loading = false;
          if (this.goods[this.currentType].list.length > that) {
            this.finished = true;
          }
        },500)
      }
		}
  }
</script>

<style>
  #home {
    position: relative;
  }
</style>
