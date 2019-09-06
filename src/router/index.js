import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home.vue'
import Mine from '../pages/mine.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component:Home
    },
    {
      path:'/mine',
      component:Mine
    }
  ]
})
