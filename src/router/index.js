import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
      name: 'layout',
      path: '/',
      component: () => import('@/views/Home.vue'),
      redirect: '/home1',
      children: [
          { name: 'home1', path: 'home1', component: () => import('@/views/Home1') },
          { name: 'home2', path: 'home2', component: () => import('@/views/Home2') },
          { name: 'home3', path: 'home3', component: () => import('@/views/Home3') }
    ]}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
