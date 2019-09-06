<template>
  <div id="app">
    <div class="header">
    <router-link to="/" tag="li">首页</router-link>
    <router-link to="/fenlei" tag="li">分类</router-link>
    <router-link to="/paihang" tag="li">排行</router-link>
    <router-link to="/shujia" tag="li">书架</router-link>
    </div>
    <div class="content">
        <router-view/>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
html,body{
  width: 100%;
  height: 100%;
}
  #app{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .header{
    width: 100%;
    height: 50px;
    background: #333333;
  }
  .header{
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .header li{
    color: #a1a1a1;
    font-size: 16px;
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: 50px;
  }
  .router-link-exact-active{
    background: #454545;
    color: #f2f2f2;
  }
  .content{
    flex: 1;
    overflow: auto;
  }
</style>
