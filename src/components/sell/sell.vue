<template>
<div>
  <md-content>
    <searchCard :manager="manager"/>
  </md-content>
  <md-content>
    <requestList :manager="manager"/>
  </md-content>
  <requestDialog :manager="manager"/>
  <publishDialog :manager="manager"/>
</div>
</template>

<script>
import searchCard from './searchCard'
import requestList from './requestList'
import requestDialog from './requestDialog'
import publishDialog from './publishDialog'
export default {
  props: ['manager'],
  components: {
    searchCard,
    requestList,
    requestDialog,
    publishDialog
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
