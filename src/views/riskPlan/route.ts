export default [
  {
    path: '/risk_plan/list',
    name: 'RiskPlan',
    component: () => import(/* webpackChunkName: "EventManage" */ './list/index.vue'),
  },
]
