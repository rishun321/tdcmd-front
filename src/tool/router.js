import Vue from 'vue'
import Router from 'vue-router'
import loading from '@/components/loading'
import login from '@/components/login'
import register from '@/components/register'
import error from '@/components/error'
import main from '@/components/main'
import home from '@/components/home/home'
import company from '@/components/company/company'
import access from '@/components/access/access'
import calendar from '@/components/calendar/calendar'
import event from '@/components/event/event'
import field from '@/components/field/field'
import photo from '@/components/photo/photo'
import rental from '@/components/rental/rental'
import reserve from '@/components/reserve/reserve'
import monopoly from '@/components/monopoly/monopoly'
import admin from '@/components/admin/admin'
import article from '@/components/admin/article'
import contact from '@/components/admin/contact'

// import pagelist from '@/components/admin/pagelist'
// import pageedit from '@/components/admin/pageedit'
// import Page from '@/store/models/page.js'

import manager from '@/store/manager.js'
// import utils from '@/tool/utils.js'

Vue.use(Router)

const nonePreload = (to, from, next) => {
  if (!manager.checkAuth(to)) {
    return
  }
  next()
}

// const preloadPagesByType = (to, from, next) => {
//   if (!manager.checkAuth(to)) {
//     return
//   }
//   utils.restGet('/private/initPageList', {type: to.params.pagetype}).then(
//     response => {
//       if (response) {
//         manager.pageService.init()
//         manager.pageService.pages = response.pages
//         manager.pageService.count = response.count
//         next()
//       }
//     }
//   )
// }

// const preloadPageByID = (to, from, next) => {
//   if (!manager.checkAuth(to)) {
//     return
//   }
//   if (!to.params.id) {
//     // 新規
//     manager.pageService.editpage = new Page({})
//     next()
//   } else {
//     // 編集
//     utils.restGet('/private/findPages', {'_id': to.params.id}).then(
//       response => {
//         if (response) {
//           manager.pageService.editpage = response.pages[0]
//           next()
//         }
//       }
//     )
//   }
// }

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
        {path: '/', name: 'home', component: home, beforeEnter: nonePreload},
        {path: '/company', name: 'company', component: company, beforeEnter: nonePreload},
        {path: '/access', name: 'access', component: access, beforeEnter: nonePreload},
        {path: '/calendar', name: 'calendar', component: calendar, beforeEnter: nonePreload},
        {path: '/event', name: 'event', component: event, beforeEnter: nonePreload},
        {path: '/field', name: 'field', component: field, beforeEnter: nonePreload},
        {path: '/photo', name: 'photo', component: photo, beforeEnter: nonePreload},
        {path: '/rental', name: 'rental', component: rental, beforeEnter: nonePreload},
        {path: '/reserve', name: 'reserve', component: reserve, beforeEnter: nonePreload},
        {path: '/monopoly', name: 'monopoly', component: monopoly, beforeEnter: nonePreload}
        // {path: '/admin/pagelist/:pagetype', name: 'pagelist', component: pagelist, beforeEnter: preloadPagesByType},
        // {path: '/admin/pageedit/:id', name: 'pageedit', component: pageedit, beforeEnter: preloadPageByID},
        // {path: '/admin/pageedit', name: 'pageedit1', component: pageedit, beforeEnter: preloadPageByID}
      ]
    },
    {
      path: '/admin',
      component: admin,
      children: [
        {path: '/admin', name: 'article', component: article, beforeEnter: nonePreload},
        {path: '/admin/contact', name: 'contact', component: contact, beforeEnter: nonePreload}
      ]
    },
    {path: '*', redirect: '/'}
  ]
})
