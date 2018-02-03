import Vue from 'vue'
import Router from 'vue-router'
import loading from '@/components/loading'
import login from '@/components/login'
import register from '@/components/register'
import error from '@/components/error'
import home from '@/components/home/home'

import manager from '@/store/manager.js'
// import utils from '@/tool/utils.js'

Vue.use(Router)

let preloadHome = (to, from, next) => {
  if (!manager.controller.checkAuth(to)) {
    return
  }
  // utils.restGet('/api/getHomeData', {}).then(
  //   response => {
  //     if (response) {
  //       manager.initDepartmentDashboard(response)
  next()
  //     }
  //   }
  // )
}

export default new Router({
  mode: 'history',
  routes: [
    {path: '/loading', name: 'loading', component: loading},
    {path: '/login', name: 'login', component: login},
    {path: '/register', name: 'register', component: register},
    {path: '/error', name: 'error', component: error},
    {path: '/', name: 'home', component: home, beforeEnter: preloadHome},
    {path: '*', redirect: '/'}
  ]
})
