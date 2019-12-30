<template>
  <van-tabbar route
              active-color="#ff5777"
              inactive-color="#0f0f0f">
    <van-tabbar-item
            replace
            to="/home"
            icon="home-o"
    >
      首页
    </van-tabbar-item>
    <van-tabbar-item
            replace
            to="/category"
            icon="column"
    >
      分类
    </van-tabbar-item>
    <van-tabbar-item
            replace
            to="/cart"
            icon="shopping-cart"
    >
      购物车
    </van-tabbar-item>
    <van-tabbar-item
            replace
            to="/profile"
            icon="manager"
    >
      我的
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
  import Vue from 'vue';
  import {Tabbar, TabbarItem, Icon} from 'vant';

  Vue.use(Tabbar).use(TabbarItem).use(Icon);
  export default {
    name: 'TabBar',
  }
</script>

<style>
  .van-tabbar-item {
    font-size: 14px;
  }
</style>
