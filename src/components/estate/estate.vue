<template>
<div>
  estate
  <p>e</p>
  <p>e</p>
  <p>e</p>
  <p>e</p>
  <button @click="rep">test</button>
  <router-view :manager="manager"/>
</div>
</template>

<script>
export default {
  props: ['manager'],
  methods: {
    rep () {
      this.$router.push({name: 'sell'})
    }
  }
}
</script>

<style scoped>

</style>
