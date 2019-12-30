<template>
  <nav-bar class="home-nav">
    <div slot="center">购物街</div>
  </nav-bar>
</template>

<script>
  import NavBar from "../common/NavBar";
  export default {
    name: "HomeNavBar",
    components: {
      NavBar
    }
  }
</script>

<style scoped>
  .home-nav {
    background-color: #ff8198;
    color: #ffffff;
  }
</style>