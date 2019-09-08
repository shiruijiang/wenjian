import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home/diancai',
      component:()=>import('../pages/home.vue'),
     
      children:[
            {
              path: '/home/diancai',
              component:()=>import('../pages/diancai.vue'),
            },
            {
              path: '/home/pingjia',
              component:()=>import('../pages/pingjia.vue')
            },
            {
              path: '/home/shangjia',
              component:()=>import('../pages/shangjia.vue')
            }
      ]
    }
  ]
})
