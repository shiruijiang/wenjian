<template>
    <div>
        <Swiper/>
        <div class="btn">
            <button class="btn1">免费专区</button>
            <button class="btn2">女频精选</button>
        </div>
        <hr class="line">
        <div class="conter" v-for="(item,i) in list" :key='i'>
            <h3>{{item.name}}</h3>
            <dl>
                <dt><img src="../assets/logo.png" alt=""></dt>
                <dd>
                    <p class="title">{{item.title}}</p>
                    <p class="connn">{{item.detail}}</p>
                    <p class="connn">{{item.actor}}</p>
                </dd>
            </dl>
        </div>
    </div>
</template>
<script>
import Swiper from '../components/swiper.vue'
export default {
    data(){
        return{
            list:[
                {
                    id:1,
                    name:'编辑力荐',
                    title:'田园娘子:夫君你别装了',
                    detail:'出生在中医世家的宋玥没别的爱好,就爱养生,结果就穿成了个天煞孤星,谁比较命硬啊',
                    actor:'陶小袄'
                }
            ]
        }
    },
    components:{
        Swiper
    }
}
</script>
<style scoped>
    .btn{
        width: 100%;
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    .btn1{
        width: 45%;
        height: 60px;
        background: #86a6d7;
        border: none;
        outline: none;
        border-radius: 5px;
        color: #fefeff;
        font-size: 16px;
    }
    .btn2{
        width: 45%;
        height: 60px;
        background: #c0a3c8;
        border: none;
        outline: none;
        border-radius: 5px;
        color: #fefeff;
        font-size: 16px;
    }
    .line{
        margin-top: 8px;
        width: 90%;
        margin-left: 15px;
    }
    dl{
        display: flex;
    }
    .title{
        font-size: 16px;
        color: black;
    }
    p{
        margin-top:15px;
    }
    .connn{
        font-size: 14px;
        color: #ccc;
    }
</style>


