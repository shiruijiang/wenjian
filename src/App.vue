<template>
  <div id="app">
    <div class="content">
        <router-view/>
        
    </div>
    
    <div class="footer">
    <router-link to="/" tag="li">主页</router-link>
    <router-link to="/mine" tag="li">我的</router-link>
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
#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.content{
  width: 100%;
  flex: 1;
}
.footer{
  width: 100%;
  height: 44px;
  background: lightblue;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>
