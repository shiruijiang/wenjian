import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router=new Router({
  routes: [
    {
      path: '/',
      meta:{
        required:true
      },
      component: ()=>import('../pages/home.vue')
    },
    {
      path:'/login',
      component:()=>import('../pages/login.vue')
    },
    {
      path:'/register',
      component:()=>import('../pages/register.vue')
    }
  ]
})
  router.beforeEach((to,from,next)=>{
    if(to.matched.some(item=>item.meta.required)){
      let token =window.localStorage.token 
      if(token){
        next()
      }else{
        next({
          path:'/login',
          query:{
            redirect:to.fullPath
          }
        })
      }
    }else{
      next()
    }
  })
export default router
