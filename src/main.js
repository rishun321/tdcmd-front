import 'jquery-ui/themes/base/core.css'
import 'jquery-ui/themes/base/theme.css'
import 'jquery-ui/themes/base/selectable.css'
import 'jquery-ui/themes/base/draggable.css'
import 'jquery-ui/themes/base/resizable.css'
import 'jquery-ui/themes/base/sortable.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.css'
import 'admin-lte/dist/css/AdminLTE.min.css'
import 'admin-lte/dist/css/skins/_all-skins.min.css'
import 'bootstrap-fileinput/css/fileinput.min.css'

import 'es6-promise/auto'
import 'jquery/dist/jquery.min.js'
import 'jquery-ui/ui/core.js'
import 'jquery-ui/ui/widgets/selectable.js'
import 'jquery-ui/ui/widgets/draggable.js'
import 'jquery-ui/ui/widgets/droppable.js'
import 'jquery-ui/ui/widgets/resizable.js'
import 'jquery-ui/ui/widgets/sortable.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'admin-lte/dist/js/adminlte.min.js'
import 'bootstrap-fileinput/js/fileinput.min.js'

import manager from '@/store/manager.js'
import utils from '@/tool/utils.js'

import Vue from 'vue'
import app from './app'
import router from './tool/router'
import {VueMasonryPlugin} from 'vue-masonry'
import vueHeadful from 'vue-headful'

Vue.config.productionTip = false
Vue.use(VueMasonryPlugin)
Vue.component('vue-headful', vueHeadful)

utils.setRouter(router)

router.beforeEach((to, from, next) => {
  manager.controller.setApp(to)
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app-route',
  data: () => {
    return {
      manager: manager
    }
  },
  router,
  components: { app },
  template: '<app :manager="manager"/>'
})
