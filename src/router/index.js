import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Orden from '../views/Orden.vue'
import Admin from '../views/Administrador.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/reserva',
    name: 'reserva',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ReservaView.vue')
  }
,
  {
    path: '/orden',
    name: 'orden',
    component: () => import( '../views/Orden.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import( '../views/Administrador.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
