import Vue from 'vue'
import Router from 'vue-router'
// import loading from '@/components/loading'
// import login from '@/components/login'
// import register from '@/components/register'
// import error from '@/components/error'
import main from '@/components/main'
import home from '@/components/home/home'
import company from '@/components/company/company'
import access from '@/components/access/access'

// import manager from '@/store/manager.js'
// import utils from '@/tool/utils.js'

Vue.use(Router)

const nonePreload = (to, from, next) => {
  // if (!manager.checkAuth(to)) {
  //   return
  // }
  next()
}

export default new Router({
  mode: 'history',
  routes: [
    // {path: '/login', name: 'login', component: login},
    // {path: '/register', name: 'register', component: register},
    // {path: '/error', name: 'error', component: error},
    {
      path: '/',
      component: main,
      children: [
        {path: '/', name: 'home', component: home, beforeEnter: nonePreload},
        {path: '/company', name: 'company', component: company, beforeEnter: nonePreload},
        {path: '/access', name: 'access', component: access, beforeEnter: nonePreload}
      ]
    },
    {path: '*', redirect: '/'}
  ]
})
