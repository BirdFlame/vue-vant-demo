<template>
  <div class="recommends">
    <div v-for="item in recommends" class="recommends-item">
      <a :href="item.link">
        <img :src="item.image" alt="item.title">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommend",
    props:{
      recommends:{
        type:Array,
        default() {
          return[]
        }
      }
    }
  }
</script>

<style scoped>
  .recommends {
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 12px;
    padding: 10px 0 30px;
    border-bottom: 10px solid #eee;
  }

  .recommends-item {
    flex: 1;
  }

  .recommends-item img {
    width: 70px;
    height: 70px;
  }
</style>