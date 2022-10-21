import Vue from "vue";
import VueRouter from "vue-router";
//import Home from '../views/Home.vue'
import NotFound from "../views/NotFound.vue";
import LogIn from "../views/LogIn.vue";
import store from './../store'
import { Toast } from "./../utils/helpers";

Vue.use(VueRouter);

const routes = [
  { //根目錄轉址
    path: '/',
    name: 'root',
    redirect:'/logIn'
  
  },
  {
    path: "/logIn",
    name: "logIn",
    component: LogIn,
  }, 
  {
    path: '/main',
    name: 'home',
    component: () => import('../views/Home')
  },
  {
    path: '/public-chat',
    name: 'public-chat',
    component: () => import('../views/PublicChat')
  },
  {
    path: '/user/:id',
    name: 'user-information',
    component: () => import('../views/UserInformation')
  },
  {
    path: '/user/:id/follower',
    name: 'user-follower',
    component: () => import('../views/UserFollower')
  },
  {
    path: '/user/:id/following',
    name: 'user-following',
    component: () => import('../views/UserFollowing')
  },
  {
    path: '/tweets/:id',
    name: 'replyList',
    component: () => import('../views/ReplyList')
  },
  {
    path: '/admin/users',
    name: 'admin-users',
    component: () => import('../views/AdminUserList')

  },
  {
    path: '/admin/tweets',
    name: 'admin-tweet',
    component: () => import('../views/AdminTweetPage')

  },
  {
    path: "/admin/signin",
    name: "adminSignin",
    component: () => import("../views/AdminSignin"),
  },
  {
    path: "/admin*",
    name: "admin",
    redirect:'admin/logIn',
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../views/SignUp.vue')
  },
  {
    path: '/user/:id/setting',
    name: 'setting',
    component: () => import('../views/Setting.vue')
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound

  },
];

const router = new VueRouter({
  routes,
});


router.beforeEach(async(to, from, next) => {
  const tokenInStorage = localStorage.getItem('token')
  const tokenInStore = store.state.token 
  let isAuthenticated = store.state.isAuthenticated
  if (tokenInStorage && tokenInStorage !== tokenInStore) {
    isAuthenticated = await store.dispatch('fetchCurrentUser')
  }

  const pathsWithoutAuthentication = ['signup', 'logIn',"adminSignin",'admin','admin-tweet','admin-users']
  
  if(isAuthenticated && pathsWithoutAuthentication.includes(to.name)){
    next('/main')
    return
  }
  if (!isAuthenticated && !pathsWithoutAuthentication.includes(to.name)) {
    next('/logIn')
    Toast.fire({
      icon: "warning",
      title: "尚未授權，請先登入",
    });
    return
  }


  next()
})
export default router;
