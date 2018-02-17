<template>
<div class="app-content-auto-height">
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
