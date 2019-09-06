<template>
    <div>
        <input type="text" placeholder="请输入用户名" v-model='username'><br/>
        <input type="text" placeholder="请输入密码" v-model='password'><br/>
        <button @click="goTo">登陆</button>
    </div>
</template>
<script>
import Axios from 'axios'
export default {
    data(){
        return{
            username:'',
            password:''
        }
    },
    methods:{
        goTo(){
            Axios.post('/api/login',{
                userName:this.username,
                password:this.password
            }).then(res=>{
                console.log(res)
            })
        }
    }
}
</script>

