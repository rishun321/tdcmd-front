<template>
<div>
  <fileuploader :manager="manager"/>
  <router-view :manager="manager"/>
</div>
</template>

<script>
import fileuploader from '@/components/common/fileuploader'
export default {
  components: {
    fileuploader
  },
  props: ['manager']
}
</script>

<style scoped>

</style>
