import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import label from '../views/label.vue'
import Taglabel from '@/views/Taglabel.vue'



Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect:'/label',
    name: 'label',
    component: label
  },
  {
    path: '/label',
    name: 'label',
    component: label
  },
  {
    path: '/label/tag/:id',
    name: 'label',
    component: Taglabel
  },
  {
    path: '/statistics',
    name: 'statistics',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/statistics.vue')
  },
  {
    path: '/money',
    name: 'money',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/money.vue')
  },{
    path:'*',
    name:'404',
    component: () => import(/* webpackChunkName: "about" */ '../views/404.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
