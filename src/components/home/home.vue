<template>
<div>
  <vue-headful title="ブドウさん - ホーム"/>
  <button class="btn btn-primary" @click="test">test</button>
  <button class="btn btn-primary" @click="test2">test</button>
  <button class="btn btn-primary" @click="test3">test</button>
  <button class="btn btn-primary" @click="test4">test</button>
</div>
</template>

<script>
import utils from '@/tool/utils.js'
export default {
  props: ['manager'],
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
