import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import RulesList from '../views/riskRules/index.vue'
import RiskFactors from '../views/riskFactors/index.vue'

const routes: Array<RouteRecordRaw> = [
  ...(route => {
    const routesData: any = [];
    route.keys().forEach(value => {
      if (route(value).default instanceof Array) {
        route(value).default.forEach((val: Object) => {
          routesData.push(val)
        })
      } else {
        routesData.push(route(value).default)
      }
    });
    
    return routesData
  })(require.context('../views/', true, /\/route\.ts$/))
]



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
