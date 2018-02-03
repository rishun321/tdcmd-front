<template>
<!-- <div class="wrapper"> -->
  <!-- <lockScreen :manager="manager"/>
  <messageModal :manager="manager"/> -->
  <div>
    <button class="btn btn-primary" @click="test">test</button>
    <button class="btn btn-primary" @click="test2">test</button>
    <button class="btn btn-primary" @click="test3">test</button>
    <button class="btn btn-primary" @click="test4">test</button>
  </div>
<!-- </div> -->
</template>

<script>
// import manager from '@/store/manager.js'
import utils from '@/tool/utils.js'

// import lockScreen from '@/components/common/lockScreen'
// import messageModal from '@/components/common/messageModal'
export default {
  props: ['manager'],
  // components: {
  //   lockScreen: lockScreen,
  //   messageModal: messageModal
  // },
  // methods: {
  //   test () {
  //     utils.restGet('/api/getData', {something: 'testdata'})
  //   }
  // }
  methods: {
    test () {
      utils.restGet('/api/getData', {something: 'testdata'}).then(
        response => {
          console.log(JSON.stringify(response))
        }
      )
    },
    test2 () {
      utils.restPost('/api/postData', {something: 'test2data'}).then(
        response => {
          console.log(JSON.stringify(response))
        }
      )
    },
    test3 () {
      utils.restPut('/api/putData', {something: 'test3data'}).then(
        response => {
          console.log(JSON.stringify(response))
        }
      )
    },
    test4 () {
      utils.restDelete('/api/deleteData', {something: 'test4data'}).then(
        response => {
          console.log(JSON.stringify(response))
        }
      )
    }
  }
}
</script>

<style scoped>

</style>
