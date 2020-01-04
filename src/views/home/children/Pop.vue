<template>
  <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
  >
    <good-list :goods="goods['pop'].list"/>
  </van-list>
</template>

<script>
  import {getHomeGoods} from "../../../network/home";
  import GoodList from "../../../components/content/GoodList";
  import Vue from 'vue';
  import {List} from 'vant';

  Vue.use(List);
  export default {
    name: "Pop",
    components: {
      GoodList
    },
    data() {
      return {
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}
        },
        loading: false,
        finished: false,
        error: false,
      }
    },
    created() {
      this.getHomeGoods('pop')
    },
    methods: {
      //商品请求
      getHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.data.list)
          this.goods[type].page += 1
          console.log(this.goods)
        }).catch(err => {
          console.log(err)
        })
      },
      onLoad() {
        setTimeout(() => {
          let that = this.goods['pop'].list.length
          this.getHomeGoods('pop')
          console.log('1')
          this.loading = false;
          if (this.goods['pop'].list.length > that) {
            this.finished = true;
          }
        }, 500)
      },
    }
  }
</script>

<style scoped>

</style>