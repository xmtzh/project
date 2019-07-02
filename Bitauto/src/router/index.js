import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import AllCars from '@/pages/allCars'
import BrandCar from '@/pages/brandCar'
import Login from '@/pages/login'
import UserInfo from '@/pages/UserInfo'
import UserLogin from '@/components/loginCP/userLogin'
import UserRegister from '@/components/loginCP/userRegister'
import store from '@/store/index'

Vue.use(Router)

const router =  new Router({
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
      path: '/userInfo',
      name: 'UserInfo',
      // meta:{
      //   auth: true
      // },
      component: UserInfo
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      children:[
        {
          path: '/',
          name: 'UserLogin',
          component: UserLogin
        },
        {
          path: 'register',
          name: 'UserRegister',
          component: UserRegister
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  //获取store里面的token
  let token = store.state.token
  if (to.meta.auth) { //权限判断
    if (token) { //读取token值
      //  成功
      next()
    } else {
      next({ path: '/login' })
    }
  } else {
    // 没有meta.auth 不用管
    next()
  }
});

export default router;