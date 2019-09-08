import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component:()=>import('../pages/work.vue')
    },
    {
      path:'/richeng',
      component:()=>import('../pages/richeng.vue')
    },
    {
      path:'/renwu',
      component:()=>import('../pages/renwu.vue')
    }
  ]
})
