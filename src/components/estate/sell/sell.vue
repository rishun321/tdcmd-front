<template>
<div>
  <searchCondition :manager="manager"/>
  <requestList :manager="manager"/>
  <buyRequestDetailDialog :manager="manager"/>
  <buyRequestCreateDialog :manager="manager"/>
</div>
</template>

<script>
import searchCondition from './searchCondition'
import requestList from './requestList'
import buyRequestDetailDialog from '@/components/shared/buyRequestDetailDialog'
import buyRequestCreateDialog from '@/components/shared/buyRequestCreateDialog'
export default {
  props: ['manager'],
  components: {
    searchCondition,
    requestList,
    buyRequestDetailDialog,
    buyRequestCreateDialog
  }
}
</script>

<style scoped>

</style>
