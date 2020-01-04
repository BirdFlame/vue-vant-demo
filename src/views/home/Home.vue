<template>
  <div id="home">
    <home-nav-bar/>
    <home-swiper :banners="banners"/>
    <home-recommend :recommends="recommends"/>
    <home-frature/>
    <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl"/>
    <keep-alive>
      <router-view/>
    </keep-alive>
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
  //数据请求
  import {getHomeMultidata} from "../../network/home";
  import Vue from 'vue';
  import {List} from 'vant';

  Vue.use(List);
  export default {
    name: "Home",
    components: {
      HomeSwiper,
      HomeNavBar,
      HomeRecommend,
      HomeFrature,
      TabControl,
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
      //选项卡点击监听
      tabClick(index) {
        switch (index) {
          case 0:
            // this.currentType = 'pop'
            this.$router.replace({name: 'pop'})
            break
          case 1:
            // this.currentType = 'new'
            this.$router.replace({name: 'new'})

            break
          case 2:
            // this.currentType = 'sell'
            this.$router.replace({name: 'sell'})
            break
        }
        // this.$refs.tabControl.currentIndex = index
      },
    }
  }
</script>

<style>
  #home {
    position: relative;
  }
</style>
