<template>
<div>
  <searchCard :manager="manager"/>
  <pieceList :manager="manager"/>
  <sellPieceDialog :manager="manager"/>
  <publishDialog :manager="manager"/>
</div>
</template>

<script>
import searchCard from './searchCard'
import pieceList from './pieceList'
import sellPieceDialog from '@/components/shared/sellPieceDialog'
import publishDialog from './publishDialog'
export default {
  props: ['manager'],
  components: {
    searchCard,
    pieceList,
    sellPieceDialog,
    publishDialog
  }
}
</script>

<style scoped>

</style>
