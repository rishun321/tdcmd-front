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

import pagelist from '@/components/admin/pagelist'
import pageedit from '@/components/admin/pageedit'
import Page from '@/store/models/page.js'

import manager from '@/store/manager.js'
import utils from '@/tool/utils.js'

// import manager from '@/store/manager.js'
// import utils from '@/tool/utils.js'

Vue.use(Router)

const nonePreload = (to, from, next) => {
  // if (!manager.checkAuth(to)) {
  //   return
  // }
  next()
}

const preloadPagesByType = (to, from, next) => {
  utils.restGet('/api/initPageList', {type: to.params.pagetype}).then(
    response => {
      console.log(response)
      if (response) {
        manager.pageService.init()
        manager.pageService.pages = response.pages
        manager.pageService.count = response.count
        next()
      }
    }
  )
}

const preloadPageByID = (to, from, next) => {
  if (!to.params.id) {
    // 新規
    manager.pageService.editpage = new Page({})
    next()
  } else {
    // 編集
    utils.restGet('/api/findPages', {'_id': to.params.id}).then(
      response => {
        console.log(response)
        if (response) {
          manager.pageService.editpage = response.pages[0]
          next()
        }
      }
    )
  }
}

export default new Router({
  mode: 'history',
  routes: [
    // {path: '/login', name: 'login', component: login},
    // {path: '/register', name: 'register', component: register},

    {
      path: '/',
      component: main,
      children: [
        {path: '/', name: 'home', component: home, beforeEnter: nonePreload},
        {path: '/company', name: 'company', component: company, beforeEnter: nonePreload},
        {path: '/access', name: 'access', component: access, beforeEnter: nonePreload},
        {path: '/admin/pagelist/:pagetype', name: 'pagelist', component: pagelist, beforeEnter: preloadPagesByType},
        {path: '/admin/pageedit/:id', name: 'pageedit', component: pageedit, beforeEnter: preloadPageByID},
        {path: '/admin/pageedit', name: 'pageedit', component: pageedit, beforeEnter: preloadPageByID}
      ]
    },
    {path: '*', redirect: '/'}
  ]
})
