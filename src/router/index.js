import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/components/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/components/Home.vue'),
      children: [
        {
          path: '/broker',
          name: 'broker',
          component: () => import('@/views/Broker.vue'),
        },
        {
          path: '/mystrategies',
          name: 'mystrategies',
          component: () => import('../views/MyStrategies.vue'),
        },
        {
          path: '/dashboard',
          name: 'dashboard',
          component: () => import('@/views/Dashboard.vue'),
        },
        {
          path: '/strategies',
          name: 'strategies',
          component: () => import('../views/Strategies.vue'),
        },
        {
          path: '/videos',
          name: 'videos',
          component: () => import('../views/Videos.vue'),
        },
        {
          path: '/order',
          name: 'order',
          component: () => import('../views/Order.vue'),
        },
        {
          path: '/position',
          name: 'position',
          component: () => import('../views/Position.vue'),
        },
      ]
    },

  ],
})

export default router
