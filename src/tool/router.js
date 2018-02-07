import Vue from 'vue'
import Router from 'vue-router'
import loading from '@/components/loading'
import login from '@/components/login'
import register from '@/components/register'
import error from '@/components/error'
import main from '@/components/main'
import home from '@/components/home/home'
import chat from '@/components/chat/chat'
import contact from '@/components/contact/contact'
import favorite from '@/components/favorite/favorite'
import rent from '@/components/rent/rent'
import lend from '@/components/lend/lend'
import buy from '@/components/buy/buy'
import sell from '@/components/sell/sell'
import manage from '@/components/manage/manage'
import publish from '@/components/publish/publish'

import manager from '@/store/manager.js'
// import utils from '@/tool/utils.js'

Vue.use(Router)

const preloadHome = (to, from, next) => {
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
const nonePreload = (to, from, next) => {
  if (!manager.controller.checkAuth(to)) {
    return
  }
  next()
}

export default new Router({
  mode: 'history',
  routes: [
    {path: '/loading', name: 'loading', component: loading},
    {path: '/login', name: 'login', component: login},
    {path: '/register', name: 'register', component: register},
    {path: '/error', name: 'error', component: error},
    {
      path: '/',
      component: main,
      children: [
        {path: '/', name: 'home', component: home, beforeEnter: preloadHome},
        {path: '/chat', name: 'chat', component: chat, beforeEnter: nonePreload},
        {path: '/contact', name: 'contact', component: contact, beforeEnter: nonePreload},
        {path: '/favorite', name: 'favorite', component: favorite, beforeEnter: nonePreload},
        {path: '/rent', name: 'rent', component: rent, beforeEnter: nonePreload},
        {path: '/lend', name: 'lend', component: lend, beforeEnter: nonePreload},
        {path: '/buy', name: 'buy', component: buy, beforeEnter: nonePreload},
        {path: '/sell', name: 'sell', component: sell, beforeEnter: nonePreload},
        {path: '/manage', name: 'manage', component: manage, beforeEnter: nonePreload},
        {path: '/publish', name: 'publish', component: publish, beforeEnter: nonePreload}
      ]
    },
    {path: '*', redirect: '/'}
  ]
})
