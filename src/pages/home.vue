<template>
    <div class="box">
        <header class="header">
            头部
        </header>
        <div class="content">
            <ul>
            <router-link to="/home/diancai" tag="li">点菜</router-link>
            <router-link to="/home/pingjia" tag="li">评价</router-link>
            <router-link to="/home/shangjia" tag="li">商家</router-link></ul>
           <div class="list"><router-view /></div> 
        </div>
        <footer class="footer">
            <span>数量</span>
            <span>总价</span>
        </footer>
    </div>
</template>
<style scoped>
    .box{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .header{
        width: 100%;
        height: 44px;
        background: lightblue;
    }
    ul{
        width: 100%;
        height: 44px;
        display: flex;
    }
    ul li{
        flex: 1;
        text-align: center;
        line-height: 44px;
    }
    .list{
        width: 100%;
        height: 92%;
    }
    .router-link-active{
        color: red;
    }
    .footer{
        width: 100%;
        height: 44px;
        background: lightblue;
    }
    .content{
        flex: 1;
        width: 100%;
        overflow: hidden;
    }
</style>

