export default [
  {
    path: '/event_manage/list',
    name: 'EventManage',
    component: () => import(/* webpackChunkName: "EventManage" */ './index.vue'),
  },
]
