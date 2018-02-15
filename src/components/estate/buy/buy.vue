<template>
<div>
  <searchCard :manager="manager"/>
  <pieceList :manager="manager"/>
  <pieceDialog :manager="manager"/>
  <publishDialog :manager="manager"/>
</div>
</template>

<script>
import searchCard from './searchCard'
import pieceList from './pieceList'
import pieceDialog from './pieceDialog'
import publishDialog from './publishDialog'
export default {
  props: ['manager'],
  components: {
    searchCard,
    pieceList,
    pieceDialog,
    publishDialog
  }
}
</script>

<style scoped>

</style>
