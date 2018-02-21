<template>
<div>
  <searchCard :manager="manager"/>
  <requestList :manager="manager"/>
  <buyRequestDialog :manager="manager"/>
  <publishDialog :manager="manager"/>
</div>
</template>

<script>
import searchCard from './searchCard'
import requestList from './requestList'
import buyRequestDialog from '@/components/shared/buyRequestDialog'
import publishDialog from './publishDialog'
export default {
  props: ['manager'],
  components: {
    searchCard,
    requestList,
    buyRequestDialog,
    publishDialog
  }
}
</script>

<style scoped>

</style>
