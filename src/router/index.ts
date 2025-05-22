import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/index.vue'), // 懒加载
  },
  {
    path: '/sales-dashboard',
    name: 'salesDashboard', // name 可以在以下场景使用:
    // 1. router.push({ name: 'salesDashboard' }) 
    // 2. <router-link :to="{ name: 'salesDashboard' }">
    // 3. useRoute().name === 'salesDashboard'
    component: () => import('@/views/SalesDashboard/index.vue'), // 懒加载
  },
  // 其他路由
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
