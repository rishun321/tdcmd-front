<template>
<vue-headful title="サンダーコマンドス"/>
</template>

<script>
import manager from '@/store/manager.js'
import utils from '@/tool/utils.js'
export default {
  props: ['manager'],
  mounted () {
    const that = this
    const path = this.$route.query.path
    utils.restGet('/login').then(
      response => {
        if (response && response.user) {
          manager.login(response, () => {
            if (path) {
              that.$router.push({path: path})
            } else {
              that.$router.push({path: '/'})
            }
          })
        } else {
          manager.anonymousLogin()
          if (path) {
            that.$router.push({path: path})
          } else {
            that.$router.push({path: '/'})
          }
        }
      }
    )
  }
}
</script>

<style scoped>

</style>
