import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home.vue'
import Fenlei from '../pages/fenlei.vue'
import Paihang from '../pages/paihang.vue'
import Shujia from '../pages/shujia.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name:'home',
      component:Home
    },
    {
      path:'/fenlei',
      component:Fenlei,
      children:[
        {
          path:'/fenlei/remen',
          component:()=>import('../pages/remen.vue')
        },
        {
          path:'/fenlei/xinshu',
          component:()=>import('../pages/xinshu.vue')
        },
        {
          path:'/fenlei/mianfei',
          component:()=>import('../pages/mianfei.vue')
        },
        {
          path:'/fenlei/wanben',
          component:()=>import('../pages/wanben.vue')
        }
      ]
    },
    {
      path:'/paihang',
      component:Paihang
    },
    {
      path:'/shujia',
      component:Shujia,
      children:[
        {
          path:'/shujia/mine',
          component:()=>import('../pages/mine.vue')
        },
        {
          path:'/shujia/read',
          component:()=>import('../pages/read.vue')
        }
      ]
    },
    {
      path:'/detail/:id',
      component:()=>import('../pages/detail.vue')
    },
    {
      path:'/login',
      component:()=>import('../pages/login.vue')
    }
  ]                 
})
  router.beforeEach((to,from,next)=>{
    if(to.name=='home'){
      let token=window.localStorage.getItem("name")
      if(token) {
        next()
      }else{
        next({
          path:'/login',
          // query:{topath:to.path}
        })
      }
    }else{
      next()
    }
    
   
  })
export default router