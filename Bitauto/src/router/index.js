import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import AllCars from '@/pages/allCars'
import BrandCar from '@/pages/brandCar'
import Login from '@/pages/login'

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
    {
      path: '/brandCar',
      name: 'BrandCar',
      component: BrandCar
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
