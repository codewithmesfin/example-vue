import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import("../modules/layout/Layout"),
    children: [
      {
        path: "",
        name: "home",
        component: () => import("../modules/pages/Homepage")
      },
      {
        path: "about",
        name: "about",
        component: () => import("../modules/pages/About")
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
