import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/page/index';
import My from '@/page/my';
import Login from '@/page/loginRight';


Vue.use(Router)

export default new Router({
  routes: [
    //首页
    {
      path: '/',
      name: 'index',
      component: Index
    },
    //我的页面
    {
      path: '/my',
      name: 'my',
      component: My
    },
    //登录
    {
      path:'/login',
      name:'login',
      component:Login
    }
  ]
})