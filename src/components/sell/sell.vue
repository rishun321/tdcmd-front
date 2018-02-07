<template>
<div>
  <md-content>
    <searchCard :manager="manager"/>
  </md-content>
  <md-content>
    <requestList :manager="manager"/>
  </md-content>
</div>
</template>

<script>
import searchCard from './searchCard'
import requestList from './requestList'
export default {
  props: ['manager'],
  components: {
    searchCard,
    requestList
  },
  data: () => ({
    stations: [],
    minute: 0,
    layout: null,
    percent: 0,
    amount: 5000,
    isLatest: true
  })
}
</script>

<style scoped>
.give-space {
  margin-right: 50px;
}
.md-content {
  margin-bottom: 20px;
}
</style>
