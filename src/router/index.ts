import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {
      path: '/',
      component:()=> import('../views/Landing.vue')
      },
    {
      path: '/borckville',
      component:()=> import('../views/B.vue')
    },
    {
      path: '/kingston',
      component:()=> import('../views/K.vue')
    },
    {
      path: '/x',
      component:()=> import('../views/X.vue')
    },
    {
      path: '/southFrontenac',
      component:()=> import('../views/SouthFrontenac.vue')
    },
    {
      path: '/places',
      component:()=> import('../views/Places.vue')
    }
  ]
})

export default router
