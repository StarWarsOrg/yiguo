<template>
  <div id="app">
    <div class="tabbar">
      <router-link to="/home">
        首页
      </router-link>
      <router-link to="/category">
        分类
      </router-link>
      <router-link to="/eat">
        吃饭吧
      </router-link>
      <router-link to="/cart">
        购物车
      </router-link>
      <router-link to="/mine">
        我的易果
      </router-link>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#app .tabbar{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 60px;
  line-height: 60px;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-item: center;
  font-size: .16rem;
  justify-content: space-around;
}
</style>
