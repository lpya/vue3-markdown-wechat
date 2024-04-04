import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from 'vue-router'
export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    component: () => import('@/views/index/Index.vue'),
    meta: {
      title: ''
    }
  }
]
// createWebHistory(import.meta.env.BASE_URL)
// createWebHashHistory(import.meta.env.BASE_URL)
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: constantRoutes
})
export default router
