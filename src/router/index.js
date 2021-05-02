import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
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
    component: () => import(/* webpackChunkName: "about" */ '../views/WishList.vue')
  },
  {
    path: '/mine',
    name: 'Mine',
    component: () => import(/* webpackChunkName: "about" */ '../views/Mine.vue')
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

export default router
