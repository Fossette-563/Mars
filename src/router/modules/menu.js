import layout from '@/layout'
export default {
  path: '/system',
  name: 'menu-query',
  component: layout,
  meta: {
    title: '系统管理'
  },
  children: [
    {
      path: '/system/menu',
      component: () => import('@/views/system/menu'),
      meta: {
        title: '菜单管理'
      }
    }
  ]
}
