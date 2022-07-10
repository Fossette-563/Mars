import layout from '@/layout'
export default {
  path: '/system',
  name: 'user-query',
  component: layout,
  redirect: '/ststem/user',
  meta: {
    title: '系统管理'
  },
  children: [
    {
      path: '/system/user',
      component: () => import('@/views/system/user'),
      meta: {
        title: '用户管理'
      }
    }
  ]
}
