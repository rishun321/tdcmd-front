import 'vue-material/dist/vue-material.min.css'

import 'es6-promise/auto'
import 'jquery/dist/jquery.min.js'

import manager from '@/store/manager.js'
import utils from '@/tool/utils.js'

import Vue from 'vue'
import app from './app'
import router from './tool/router'
import {VueMasonryPlugin} from 'vue-masonry'
import vueHeadful from 'vue-headful'
import VueMaterial from 'vue-material'

Vue.config.productionTip = false
Vue.use(VueMasonryPlugin)
Vue.component('vue-headful', vueHeadful)
Vue.use(VueMaterial)
utils.setRouter(router)

/* eslint-disable no-new */
new Vue({
  el: '#app-route',
  data: () => {
    return {
      manager: manager
    }
  },
  router,
  components: {app},
  template: '<app :manager="manager"/>'
})
