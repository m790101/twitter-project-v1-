import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/main',
    name:'home',
    component:() => import('../views/Home')
  },
  {
  path: '/user/self',
  name:'user-self',
  component:() => import('../views/UserInformation')
  },
  {
  path: '/user/other/:id',
  name:'user-other',
  component:() => import('../views/UserOther')
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  },
]

const router = new VueRouter({
  routes
})

export default router
