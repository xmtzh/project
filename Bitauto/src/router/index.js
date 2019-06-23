import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import AllCars from '@/pages/allCars'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/allCars',
      name: 'AllCars',
      component: AllCars
    },
  ]
})
