<template>
    <div class="bigbox">
        <div class="left" ref='lefts'>
            <ul v-for="(item,index) in leftName" :key="index">
                <li class="leftItem" @click="fn(index)" :class="{'active':index===ind}">{{item.name}}</li>
            </ul>
        </div>
        <div class="right" ref='right'>
            <div class="con">
                <div class="conss"  v-for="(item,index) in leftName" :key="index" ref='list'>
                    <h3>{{item.name}}</h3>    
                        <dl  v-for="(ite,inde) in rightName" :key="inde">
                            <dd>{{ite[0].name}}</dd>
                            <dt><img :src="ite[0].image" alt="">  </dt> 
                        </dl>
              </div>
            </div>
        </div>
    </div>
</template>
<script>
import Axios from 'axios'
import BScroll from 'better-scroll'
export default {
    data(){
        return{
            leftName:[],
            ind:0,
            rightName:[],
            scroll:null,
            scrolls:null,
            lists:[]
        }
    },
    created(){
        Axios.get('/api/data').then(res=>{
            this.leftName=res.data.goods
                res.data.goods.map(item=>{
                return this.rightName.push(item.foods)

            })
            console.log(this.rightName[0])
            this.lists=this.rightName[0]
            let num=this.lists.reduce((prev,cur)=>
                 prev+cur.price*cur.rating,0)
                 console.log(num)
        })
    },
    methods:{
        fn(index){
            this.ind=index
            console.log(this.$refs.list)
             this.scroll.scrollToElement(this.$refs.list[this.ind],300)
        }
    },
    mounted(){
        this.$nextTick(()=>{
            this.scroll=new BScroll(this.$refs.right,{
                probeType:3
            })
            this.scrolls=new BScroll(this.$refs.lefts)
            
        })
    }   
}
</script>
<style scoped>
    .bigbox{
        width: 100%;
        height: 100%;   
        display: flex;
    }
    .left{
        width: 130px;
        height: 100%;
        overflow: hidden;
    }
    .leftItem{
        width: 130px;
        height: 45px;
        line-height: 45px;
    }    
    .right{
        flex: 1;
        overflow: hidden;
    }
    .active{
        background: red;
    }
    dl{
        width: 100%;
        height: 200px;
        display: flex;
    }
    dl dt{
        width: 70%;
        height: 180px;
    }
    dl dd img{
        width: 100%;
        height: 100%;
    }
    dl dd{
        width: 30%;
        height: 180px;
        margin-left: 5px;
    }
</style>


