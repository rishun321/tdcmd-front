// import 'jquery-ui/themes/base/core.css'
// import 'jquery-ui/themes/base/theme.css'
// import 'jquery-ui/themes/base/selectable.css'
// import 'jquery-ui/themes/base/draggable.css'
// import 'jquery-ui/themes/base/resizable.css'
// import 'jquery-ui/themes/base/sortable.css'
import 'vue-material/dist/vue-material.min.css'

import 'es6-promise/auto'
import 'aframe'
// import 'jquery/dist/jquery.min.js'
// import 'jquery-ui/ui/core.js'
// import 'jquery-ui/ui/widgets/selectable.js'
// import 'jquery-ui/ui/widgets/draggable.js'
// import 'jquery-ui/ui/widgets/droppable.js'
// import 'jquery-ui/ui/widgets/resizable.js'
// import 'jquery-ui/ui/widgets/sortable.js'

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
