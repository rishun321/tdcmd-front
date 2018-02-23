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
import estate from '@/components/estate/estate'
import rent from '@/components/estate/rent/rent'
import lend from '@/components/estate/lend/lend'
import buy from '@/components/estate/buy/buy'
import sell from '@/components/estate/sell/sell'
import my from '@/components/my/my'
import favorite from '@/components/my/favorite/favorite'
import account from '@/components/my/account/account'
import publish from '@/components/my/publish/publish'
import preview from '@/components/preview/preview'

import manager from '@/store/manager.js'
import utils from '@/tool/utils.js'

Vue.use(Router)

const preloadSell = (to, from, next) => {
  if (!manager.checkAuth(to)) {
    return
  }
  utils.restGet('/api/initEstateSell', {}).then(
    response => {
      if (response) {
        manager.buyRequestService.init()
        manager.buyRequestService.count = response.count
        manager.buyRequestService.buyRequests = response.buyRequests
        next()
      }
    }
  )
}
const preloadChat = (to, from, next) => {
  if (!manager.checkAuth(to)) {
    return
  }
  manager.chatService.init()
  manager.chatService.rooms = [
    {_id: '1', name: 'ロマンチックアップルロマンチックアップルロマンチックアップルロマンチックアップル'},
    {_id: '2', name: 'リリナー'},
    {_id: '3', name: '田中竜'},
    {_id: '4', name: '中田龍'},
    {_id: '5', name: 'ナースカリスマ'},
    {_id: '6', name: 'おたくの神'},
    {_id: '7', name: '五十嵐東海林太郎'},
    {_id: '8', name: 'ハウスマン'},
    {_id: '10', name: '五十嵐東海林太郎'},
    {_id: '11', name: 'おたくの神'},
    {_id: '12', name: '中田龍'},
    {_id: '13', name: 'ハウスマン'},
    {_id: '14', name: 'ロマンチックアップルロマンチックアップルロマンチックアップルロマンチックアップル'},
    {_id: '15', name: '五十嵐東海林太郎'},
    {_id: '16', name: 'おたくの神'},
    {_id: '17', name: 'ナースカリスマ'},
    {_id: '18', name: 'ナースカリスマ'},
    {_id: '19', name: 'ハウスマン'},
    {_id: '20', name: '中田龍'}
  ]
  next()
}
const nonePreload = (to, from, next) => {
  if (!manager.checkAuth(to)) {
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
        {path: '/', name: 'home', component: home, beforeEnter: nonePreload},
        {path: '/chat', name: 'chat', component: chat, beforeEnter: preloadChat},
        {path: '/contact', name: 'contact', component: contact, beforeEnter: nonePreload},
        {
          path: '/estate',
          name: 'estate',
          component: estate,
          children: [
            {path: '/estate/sell', name: 'sell', component: sell, beforeEnter: preloadSell},
            {path: '/estate/buy', name: 'buy', component: buy, beforeEnter: nonePreload},
            {path: '/estate/rent', name: 'rent', component: rent, beforeEnter: nonePreload},
            {path: '/estate/lend', name: 'lend', component: lend, beforeEnter: nonePreload}
          ]
        },
        {
          path: '/my',
          component: my,
          children: [
            {path: '/my', name: 'my', component: account, beforeEnter: nonePreload},
            {path: '/my/favorite', name: 'favorite', component: favorite, beforeEnter: nonePreload},
            {path: '/my/publish', name: 'publish', component: publish, beforeEnter: nonePreload}
          ]
        },
        {path: '/preview/:id', name: 'preview', component: preview, beforeEnter: nonePreload}
      ]
    },
    {path: '*', redirect: '/'}
  ]
})
