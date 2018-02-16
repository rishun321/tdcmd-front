<template>
<md-card>
  <md-card-content>
    <div class="md-layout md-gutter">
      <div class="md-layout-item md-size-25 md-medium-size-33 md-small-size-50 md-xsmall-size-100" v-for="request in manager.buyRequestService.buyRequests" :key="request._id">
        <requestCard :manager="manager" :request="request"/>
      </div>
    </div>
  </md-card-content>
</md-card>
</template>

<script>
import requestCard from './requestCard'
export default {
  props: ['manager'],
  components: {
    requestCard
  }
}
</script>

<style scoped>
.md-layout-item {
  margin-bottom: 10px;
}
</style>
