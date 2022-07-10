import layout from '@/layout'
export default {
  path: '/system',
  name: 'dept-query',
  component: layout,
  meta: {
    title: '系统管理'
  },
  children: [
    {
      path: '/system/dept',
      comments: () => import('@/views/system/dept'),
      meta: {
        title: '部门管理'
      }
    }
  ]
}
