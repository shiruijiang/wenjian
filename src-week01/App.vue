<template>
  <div id="app">
  <el-collapse accordion>
    <elCollapseItem></elCollapseItem>
  </el-collapse>
    <router-view/>
  </div>
</template>

<script>
import elCollapseItem from './components/elCollapseItem.vue'
export default {
  name: 'App',
  components:{
    elCollapseItem
  },
  methods:{
    
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    list-style: none;
  }
</style>
