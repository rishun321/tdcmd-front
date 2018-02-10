<template>
<div class="subPage">
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
  }
}
</script>

<style scoped>
.subPage {
  margin-top: 50px;
}
</style>
