import layout from '@/layout'
export default {
  path: '/audit',
  name: 'leave-query',
  component: layout,
  redirect: '/audit/leave',
  meta: {
    title: '审批管理'
  },
  children: [
    {
      path: '/audit/leave',
      component: () => import('@/views/audit/leave'),
      meta: {
        title: '休假申请'
      }
    }
  ]
}
