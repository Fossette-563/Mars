import layout from '@/layout'
export default {
  path: '/audit',
  name: 'approve-query',
  component: layout,
  meta: {
    title: '审批管理'
  },
  children: [
    {
      path: '/audit/approve',
      component: () => import('@/views/audit/approve'),
      meta: {
        title: '待审批'
      }
    }
  ]
}
