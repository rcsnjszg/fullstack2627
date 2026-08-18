import { createRouter, createWebHistory } from 'vue-router'
import { setTitle } from '@/router/guards/SetTitleGuard'
import { routes } from 'vue-router/auto-routes'

export const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(setTitle)
