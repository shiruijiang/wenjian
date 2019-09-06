<template>
    <div class="box">
        <div class="header">
            <router-link to="/fenlei/remen" tag="li">热门</router-link>
            <router-link to="/fenlei/xinshu" tag="li">新书</router-link>
            <router-link to="/fenlei/mianfei" tag="li">免费</router-link>
            <router-link to="/fenlei/wanben" tag="li">完本</router-link>
        </div>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import Axios from 'axios'
export default {
    data(){
        return{
            data:[]
        }
    },
    created(){
        
    }
}
</script>
<style scoped>
    .box{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .header{
        width: 100%;
        height: 50px;
        margin-top: 10px;
        background: white;
    }
    .header li{
        background: #f2f2f2;
        margin: 10px;
    }
    .content{
        flex:1;
        width: 100%;
    }
    .router-link-exact-active.router-link-active{
        background: #ed554d;
        color: white;
    }
</style>


