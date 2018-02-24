<template>
<div>
  <searchCondition :manager="manager"/>
  <pieceList :manager="manager"/>
  <sellPieceDetailDialog :manager="manager"/>
  <sellPieceCreateDialog :manager="manager"/>
</div>
</template>

<script>
import searchCondition from './searchCondition'
import pieceList from './pieceList'
import sellPieceDetailDialog from '@/components/shared/sellPieceDetailDialog'
import sellPieceCreateDialog from '@/components/shared/sellPieceCreateDialog'
export default {
  props: ['manager'],
  components: {
    searchCondition,
    pieceList,
    sellPieceDetailDialog,
    sellPieceCreateDialog
  }
}
</script>

<style scoped>

</style>
