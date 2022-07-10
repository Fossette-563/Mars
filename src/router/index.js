import { createRouter, createWebHashHistory } from 'vue-router'
import layout from '@/layout'
import user from './modules/user'
import role from './modules/role'
import menu from './modules/menu'
import leave from './modules/leave'
import dept from './modules/dept'
import approve from './modules/approve'
export const publicRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')
  },
  {
    path: '/',
    component: layout,
    redirect: '/welcome',
    children: [
      {
        path: '/welcome',
        name: 'welcome',
        component: () => import('@/views/welcome'),
        meta: {
          title: 'welcome'
        }
      }
    ]
  }
]

export const privateRoutes = [user, role, menu, leave, dept, approve]
const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})

export default router
