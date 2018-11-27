import Vue from 'vue'
import Router from 'vue-router'
import Article from '@/components/Article'
import Detail from '@/components/detail'
import about from '@/components/about'
import pigeonhole from '@/components/pigeonhole'
import tag from '@/components/tag'
import read from '@/components/read'
import index from '@/components/index'
Vue.use(Router)

export default new Router({
  // mode:'history',
  routes: [
    {
      path:'/article',
      component:Article
    },
    {
      path: '/',
      component: index
    },
    {
      path:`/detail/:id`,
      component: Detail
    },
    {
      path:'/about',
      component:about
    },
    {
      path:'/pigeonhole',
      component:pigeonhole
    },
    {
      path:'/tag',
      component:tag
    },
    {
      path:'/read',
      component:read
    }
  ]
})
