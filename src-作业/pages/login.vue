<template>
    <div>
        账号:<input type="text" v-model="name"><br/>
        密码:<input type="text" v-model="pwd">
        <button @click="login">登陆</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            name:'',
            pwd:''
        }
    },
    methods:{
        
        login(){
            let name=this.name+this.pwd
            window.localStorage.setItem('name',name)
            console.log(this.$route)
            let topath=this.$route.query.topath
            this.$router.replace({
                path:topath
            })
        }
    }
}
</script>

