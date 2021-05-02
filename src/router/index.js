import Vue from 'vue'
import VueRouter from 'vue-router'

import {auth} from '../firebaseConfig.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/search',
    // name: 'Home',
    // component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/search',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/comment/:id',
    name: 'Comment',
    component: () => import(/* webpackChunkName: "about" */ '../views/Comment.vue'),
    props:  route => ({ id: route.params.id, data:route.params.data }),
  },

  


  {
    path: '/404',
    name: '404Page',
    component: () => import(/* webpackChunkName: "about" */ '../views/404.vue'),
    meta: {
      goto_nearby: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
    meta: { // connects with the function later in this file.
      goto_nearby: true
    }
  },
  {
    path: '/logout',
    name: 'Logout',
    component: () => import(/* webpackChunkName: "about" */ '../views/Logout.vue'),
    meta: { // connects with the function later in this file.
      logout_to_nearby: true,
      requiresAuth: true
    }
  },
  {
    path: '/restaurant',
    name: 'Restaurant',
    redirect: '/restaurant/goods',
    component: () => import(/* webpackChunkName: "about" */ '../views/Restaurant.vue'),
    children: [
      {
        path: 'goods',
        name: 'Goods',
        component: () => import(/* webpackChunkName: "about" */ '../views/Goods.vue')
      },
      {
        path: 'ratings',
        name: 'Ratings',
        component: () => import(/* webpackChunkName: "about" */ '../views/Ratings.vue')
      }
    ]
  },
  {
    path: '/wishlist',
    name: 'WishList',
    component: () => import(/* webpackChunkName: "about" */ '../views/WishList.vue'),
    meta: { // connects with the function later in this file.
      requiresAuth: true,
    }
  },
  {
    path: '/mine',
    name: 'Mine',
    component: () => import(/* webpackChunkName: "about" */ '../views/Mine.vue'),
    meta: { // connects with the function later in this file.
      requiresAuth: true,
    }
  }


  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const goto_nearby = to.matched.some(x => x.meta.goto_nearby)
  const logout_to_nearby = to.matched.some(x => x.meta.logout_to_nearby)
  
  // const goto_signin = to.matched.some(x => x.meta.goto_signin)
  // // if (auth.currentUser) {
  // //   next('/todos')
  // // }
  // // else{
  //   if (goto_signin && auth.currentUser==null){
  //     next('/')
  //   }
  //   else{
  //     next()
  //   }

  if (logout_to_nearby && !auth.currentUser){
    next('/')
  }
  else{
    next()
  }

    if (goto_nearby && auth.currentUser){
      next('/')
    }
    else{
      next()
    }

    if (requiresAuth && !auth.currentUser) {
      next('/404')
    } else {
      //next('/todos')
      // next('/files')
      next()
    }
})
export default router
