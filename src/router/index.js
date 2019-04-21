import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/page/index';
import My from '@/page/my';


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',redirect:'/index',
      name: 'index',
      component: Index
    },
    {
      path: '/my',
      name: 'my',
      component: My
    }
  ]
})