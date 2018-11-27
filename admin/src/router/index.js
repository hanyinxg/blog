import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
//引入登录组件
import Login from '@/components/Login'
//引入主页面组件
import List from '@/components/List'
import Tags from '@/components/Tags'
import Reading from '@/components/Reading'
import About from '@/components/About'

export default new Router({
  routes: [
    {
      path:'/',
      redirect: '/login'
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/list',
      component:List
    },
    {
      path:'/reading',
      component:Reading
    },
    {
      path:'/tags',
      component:Tags
    },
    {
      path:'/about',
      component:About
    },
    {path:'*',redirect:'/login'}
  ]
})
