<<<<<<< HEAD
<template>
    <div>
        <div class="conter" v-for="(item,i) in list" :key='i' @click="fn(item.id)">
            <dl>
                <dt><img src="../assets/logo.png" alt=""></dt>
                <dd>
                    <p class="name">{{item.name}}</p>
                    <p class="actor"><span>作者:</span>{{item.actor}}</p>
                    <p class="gengxin"><span>更新至:</span>{{item.gengxin}}</p>
                    <p class="detail"><span>简介:</span>{{item.detail}}</p>
                </dd>
            </dl>
            <hr>
        </div>
    </div>
</template>
<script>
import Axios from 'axios'
export default {
    data(){
        return{
            list:[]
        }
    },
    created(){
        Axios.get('/api/data').then(res=>{
            this.list=res.data
        })
    },
    methods:{
        fn(id){
            this.$router.push(`/detail/${id}`)
        }
    }
    
}
</script>
<style scoped>
    dl{
        width: 100%;
        height: 154px;
    }
    dl dt{
        width: 90px;
        height: 90px;
        float: left;
        margin-top: 16px;
    }
    dl dd{
        height: 140px;
        margin-left: 6px;
        margin-top: 6px;
        float: left;
    }
    dl dt img{
        width: 90px;
        height: 90px;
    }
    dl dd p{
        margin-top: 8px;
    }
    dl dd p span{
        color: #a0a0a0
    }
    .name{
        font-size: 18px;
    }
</style>

=======
<template>
    <div>
        <div class="conter" v-for="(item,i) in list" :key='i' @click="fn(item.id)">
            <dl>
                <dt><img src="../assets/logo.png" alt=""></dt>
                <dd>
                    <p class="name">{{item.name}}</p>
                    <p class="actor"><span>作者:</span>{{item.actor}}</p>
                    <p class="gengxin"><span>更新至:</span>{{item.gengxin}}</p>
                    <p class="detail"><span>简介:</span>{{item.detail}}</p>
                </dd>
            </dl>
            <hr>
        </div>
    </div>
</template>
<script>
import Axios from 'axios'
export default {
    data(){
        return{
            list:[]
        }
    },
    created(){
        Axios.get('/api/data').then(res=>{
            this.list=res.data
        })
    },
    methods:{
        fn(id){
            this.$router.push(`/detail/${id}`)
        }
    }
    
}
</script>
<style scoped>
    dl{
        width: 100%;
        height: 154px;
    }
    dl dt{
        width: 90px;
        height: 90px;
        float: left;
        margin-top: 16px;
    }
    dl dd{
        height: 140px;
        margin-left: 6px;
        margin-top: 6px;
        float: left;
    }
    dl dt img{
        width: 90px;
        height: 90px;
    }
    dl dd p{
        margin-top: 8px;
    }
    dl dd p span{
        color: #a0a0a0
    }
    .name{
        font-size: 18px;
    }
</style>

>>>>>>> 82507f707bc442c2de31c8ca15074ff133c0c06e
