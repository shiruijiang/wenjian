<template>
    <div>
        <!-- {{this.$route.params.id}} -->
        <div class="conter" v-for="item in lists" :key='item.id'>
            <dl>
                <dt><img src="../assets/logo.png" alt=""></dt>
                <dd>
                    <p class="name">{{item.name}}</p>
                    <p class="actor"><span>作者:</span>{{item.actor}}</p>
                    <p class="gengxin"><span>更新至:</span>{{item.gengxin}}</p>
                    <p class="detail"><span>简介:</span>{{item.detail}}</p>
                </dd>
            </dl>
        </div>
        <button>立即阅读</button><button>客户端看免费</button>
    </div>
</template>
<script>
import Axios from 'axios'
export default {
    data(){
        return{
            lists:{}
        }
    },
    created(){
        Axios.get('/api/data').then(res=>{
            this.lists=res.data.filter(item=>item.id==this.$route.params.id)
        })
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
    button{
        
    }
</style>


