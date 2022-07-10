import layout from '@/layout'
export default {
  path: '/system',
  name: 'role-query',
  component: layout,
  meta: {
    title: '系统管理'
  },
  children: [
    {
      path: '/system/role',
      component: () => import('@/views/system/role'),
      meta: {
        title: '角色管理'
      }
    }
  ]
}
