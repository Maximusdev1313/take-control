import { createRouter, createWebHistory } from 'vue-router'
import UserView from '../views/UserView.vue'
import ClientView from '../views/ClientView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'user',
      component: UserView
    },
    {
      path: '/client/:id',
      name: 'client',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ClientView.vue')
    }
  ]
})

export default router
