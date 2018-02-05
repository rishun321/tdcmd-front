<template>
<div class="wrapper">
  <vue-headful title="ブドウさん"/>
  <lockScreen :manager="manager"/>
  <messageModal :manager="manager"/>
</div>
</template>

<script>
import manager from '@/store/manager.js'
import utils from '@/tool/utils.js'

import lockScreen from '@/components/common/lockScreen'
import messageModal from '@/components/common/messageModal'
export default {
  props: ['manager'],
  components: {
    lockScreen,
    messageModal
  },
  mounted () {
    const self = this
    const path = this.$route.query.path
    utils.restGet('/login').then(
      response => {
        if (response) {
          if (response.user) {
            manager.login(response, () => {
              if (path) {
                self.$router.push({path: path})
              } else {
                self.$router.push({path: '/'})
              }
            })
          } else {
            self.$router.push({name: 'login', query: {path: path}})
          }
        }
      }
    )
  }
}
</script>

<style scoped>

</style>
