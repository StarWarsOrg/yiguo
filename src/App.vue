<template>
  <div id="app">
    <div class="main_wrap">
      <router-view></router-view>
    </div>
    <div class="tabbar">
      <div class="main_navbar">
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
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  background-color: #f4f4f4;
  position: relative;
}
.main_wrap {
  width: 100%;
  position: absolute;
  top: 0;
  bottom: .5rem;
}
#app>.tabbar{
  width: 100%;
  height: .5rem;
  font-size: .12rem;
  color: #8d8a8a;
  box-sizing: content-box;
  border-top: 1px solid #eee;
  background-color: #fff;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 500;
}
.main_navbar {
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0 .11rem;
}
.main_navbar>a {
  display: block;
  width: 20%;
  line-height: 1;
  text-align: center;
  color: #8d8a8a;
  padding-top: .36rem;
  background: no-repeat center .075rem;
  background-size: .32rem .24rem;
}
.main_navbar>a:nth-child(1) {
  background-image: url(../static/img/index/nav_home.png);
}
.main_navbar>a:nth-child(2) {
  background-image: url(../static/img/index/nav_classify.png);
}
.main_navbar>a:nth-child(3) {
  background-image: url(../static/img/index/nav_eat.png);
}
.main_navbar>a:nth-child(4) {
  background-image: url(../static/img/index/nav_list.png);
}
.main_navbar>a:nth-child(5) {
  background-image: url(../static/img/index/nav_user.png);
}
.main_navbar>a.router-link-active{
  color: #11b57c;
}
.main_navbar>a:nth-child(1).router-link-active{
  background-image: url(../static/img/index/nav_home_active.png);
}
.main_navbar>a:nth-child(2).router-link-active {
  background-image: url(../static/img/index/nav_classify_active.png);
}
.main_navbar>a:nth-child(3).router-link-active {
  background-image: url(../static/img/index/nav_eat_active.png);
}
.main_navbar>a:nth-child(4).router-link-active {
  background-image: url(../static/img/index/nav_list_active.png);
}
.main_navbar>a:nth-child(5).router-link-active {
  background-image: url(../static/img/index/nav_user_active.png);
}
</style>
