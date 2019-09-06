<template>
    <el-collapse accordion  @change='handleChange()'>
  <el-collapse-item>
    <template slot="title" >
      Diseno Web<i class="el-icon-arrow-down el-icon-arrow-up"></i>
    </template>
        <div class="box" @mousemove="fn" @mouseout="fns">Photoshop</div>
        <div class="box" @mousemove="fn" @mouseout="fns">HTML</div>
        <div class="box" @mousemove="fn" @mouseout="fns">CSS</div>
  </el-collapse-item>
  <el-collapse-item title="Desarrollo front-end" name='1'>
    <div class="box" @mousemove="fn" @mouseout="fns">Javascript</div>
    <div class="box" @mousemove="fn" @mouseout="fns">jQuery</div>
  </el-collapse-item>
  <el-collapse-item title="Diseno responsive" name='2'>
    <div class="box" @mousemove="fn" @mouseout="fns">tables</div>
    <div class="box" @mousemove="fn" @mouseout="fns">Dispositives mobiles</div>
    <div class="box" @mousemove="fn" @mouseout="fns">Otros dispositivos</div>
  </el-collapse-item>
  <el-collapse-item title="Posicionamientp web" name='3'>
    <div class="box" @mousemove="fn" @mouseout="fns">Google</div>
    <div class="box" @mousemove="fn" @mouseout="fns">Bing</div>
    <div class="box" @mousemove="fn" @mouseout="fns">Yahoo</div>
    <div class="box" @mousemove="fn" @mouseout="fns">Otros buscadores</div>
  </el-collapse-item>
</el-collapse> 
</template>
<script>
export default {
    methods:{
        fn(e){
        e.target.style.background='red' 
        },
        fns(e){
             e.target.style.background='#ccc' 
        },
       handleChange(){
      console.log(this)
    }
    }
}
</script>

<style scoped>
    .box{
        width: 100%;
        background: #ccc;
        height: 50px;
        line-height: 50px;
        padding-left: 30px;
    }
</style>

