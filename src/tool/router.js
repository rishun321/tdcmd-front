import Vue from 'vue'
import Router from 'vue-router'
import loading from '@/components/loading'
import signin from '@/components/signin'
import register from '@/components/register'
import error from '@/components/error'
import main from '@/components/main'
import home from '@/components/home/home'
import company from '@/components/company/company'
import access from '@/components/access/access'
import notification from '@/components/notification/notification'
import notificationDetail from '@/components/notification/notificationDetail'
import event from '@/components/event/event'
import field from '@/components/field/field'
import photo from '@/components/photo/photo'
import photoDetail from '@/components/photo/photoDetail'
import rental from '@/components/rental/rental'
import reserve from '@/components/reserve/reserve'
import monopoly from '@/components/monopoly/monopoly'
import admin from '@/components/admin/admin'
import adminNotification from '@/components/admin/notification'
import editNotification from '@/components/admin/editNotification'
import adminPhoto from '@/components/admin/photo'
import editPhoto from '@/components/admin/editPhoto'

import manager from '@/store/manager.js'
import utils from '@/tool/utils.js'

Vue.use(Router)

let initApplication = (to, from, next) => {
  manager.notificationService.loadNotifications(null, null, () => {
    manager.photoService.loadPhotos(to, from, next)
  })
}

let router = new Router({
  mode: 'history',
  routes: [
    {path: '/loading', name: 'loading', component: loading},
    {path: '/signin', name: 'signin', component: signin},
    {path: '/register', name: 'register', component: register},
    {path: '/error', name: 'error', component: error},
    {
      path: '/',
      component: main,
      children: [
        {path: '/', name: 'home', component: home, beforeEnter: initApplication, meta: {requireAuth: true}},
        {path: '/company', name: 'company', component: company, meta: {requireAuth: true}},
        {path: '/access', name: 'access', component: access, meta: {requireAuth: true}},
        {path: '/notification', name: 'notification', component: notification, beforeEnter: manager.notificationService.loadNotifications, meta: {requireAuth: true}},
        {path: '/notification/:id', name: 'notificationDetail', component: notificationDetail, beforeEnter: manager.notificationService.loadNotificationForDetail, meta: {requireAuth: true}},
        {path: '/event', name: 'event', component: event, meta: {requireAuth: true}},
        {path: '/field', name: 'field', component: field, meta: {requireAuth: true}},
        {path: '/photo', name: 'photo', component: photo, beforeEnter: manager.photoService.loadPhotos, meta: {requireAuth: true}},
        {path: '/photo/:id', name: 'photoDetail', component: photoDetail, beforeEnter: manager.photoService.loadPhotoForDetail, meta: {requireAuth: true}},
        {path: '/rental', name: 'rental', component: rental, meta: {requireAuth: true}},
        {path: '/reserve', name: 'reserve', component: reserve, meta: {requireAuth: true}},
        {path: '/monopoly', name: 'monopoly', component: monopoly, meta: {requireAuth: true}},
        {
          path: '/admin',
          component: admin,
          name: 'admin',
          children: [
            {path: '/admin/notification', name: 'adminNotification', component: adminNotification, beforeEnter: manager.notificationService.loadNotifications, meta: {requireAuth: true}},
            {path: '/admin/notification/:id', name: 'editNotification', component: editNotification, beforeEnter: manager.notificationService.loadNotificationForEdit, meta: {requireAuth: true}},
            {path: '/admin/photo', name: 'adminPhoto', component: adminPhoto, beforeEnter: manager.photoService.loadPhotos, meta: {requireAuth: true}},
            {path: '/admin/photo/:id', name: 'editPhoto', component: editPhoto, beforeEnter: manager.photoService.loadPhotoForEdit, meta: {requireAuth: true}}
          ],
          meta: {requireAuth: true}
        }
      ]
    },
    {path: '*', redirect: '/'}
  ]
})

router.beforeEach((to, from, next) => {
  const requireAuth = to.matched.some(record => record.meta.requireAuth)
  if (requireAuth) {
    if (!manager.checkAuth(to)) {
      return
    }
  }
  utils.event.$emit('SCROLL_TO_TOP')
  next()
})

export default router
