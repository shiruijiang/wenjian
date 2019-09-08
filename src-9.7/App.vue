<template>
  <div id="app">
    <el-container>
  <el-aside width="200px" height='500px'>

      <el-col :span="24">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1"  @click="fn">
          <i class="el-icon-location"></i>
          <span slot="title">工作台</span>
      </el-menu-item>
      <el-menu-item index="2" @click="fns">
        <i class="el-icon-menu"></i>
        <span slot="title" >日程</span>
      </el-menu-item>
      <el-menu-item index="3" @click="fnss">
        <i class="el-icon-document"></i>
        <span slot="title" @click="fnss">任务</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">公告</span>
      </el-menu-item>
      <el-menu-item index="5">
        <i class="el-icon-setting"></i>
        <span slot="title">日志</span>
      </el-menu-item>
      <el-menu-item index="6">
        <i class="el-icon-setting"></i>
        <span slot="title">审批</span>
      </el-menu-item>
      <el-menu-item index="7">
        <i class="el-icon-setting"></i>
        <span slot="title">通讯录</span>
      </el-menu-item>
    </el-menu>
  </el-col>


  </el-aside>
  <el-main> <router-view/></el-main>
</el-container>
   
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      fn(){
        this.$router.push('/')
      },
      fns(){
         this.$router.push('/richeng')
      },
      fnss(){
        this.$router.push('/renwu')
      }
    }
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
}
.el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 500px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  .el-col-24l{
    height: 100%;
  }
</style>
