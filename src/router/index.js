import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/page/index';
import My from '@/page/my';
import Tag from '@/page/tagArr';


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/my',
      name: 'my',
      component: My
    },
    {
      path:"/tag",
      name:"tag",
      component:Tag
    }
  ]
})