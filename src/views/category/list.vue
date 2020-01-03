<template>
</template>

<script>
  import { getHomeGoods} from "../../network/home";
  export default {
    name: "list",
    data(){
      return {
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}
        },
        count: 0
      }
    },
    methods: {
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
      load () {
        this.count += 2
      }
    }
  }
</script>

<style scoped>

</style>