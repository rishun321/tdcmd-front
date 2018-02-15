<template>
<div>
  <searchCard :manager="manager"/>
  <requestList :manager="manager"/>
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

</style>
