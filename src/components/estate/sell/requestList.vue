<template>
<md-card>
  <md-card-content>
    <div class="md-layout md-gutter">
      <div class="md-layout-item md-size-100">
        <md-toolbar md-theme="light" class="md-dense md-primary">
          <h3 class="md-title">
            買取希望 ({{manager.buyRequestService.buyRequests.length}} / {{manager.buyRequestService.count}})
          </h3>
        </md-toolbar>
      </div>
      <div class="md-layout-item md-size-25 md-medium-size-33 md-small-size-50 md-xsmall-size-100" v-for="request in manager.buyRequestService.buyRequests" :key="request._id">
        <buyRequestCard :manager="manager" :request="request"/>
      </div>
      <div class="md-layout-item md-size-100 more-container" v-if="manager.buyRequestService.buyRequests.length < manager.buyRequestService.count">
        <md-button class="md-primary more-button" @click="more()">結果をもっと表示 ({{manager.buyRequestService.buyRequests.length}} / {{manager.buyRequestService.count}})</md-button>
      </div>
    </div>
  </md-card-content>
</md-card>
</template>

<script>
import utils from '@/tool/utils.js'
import manager from '@/store/manager.js'
import buyRequestCard from '@/components/shared/buyRequestCard'
export default {
  props: ['manager'],
  components: {
    buyRequestCard
  },
  methods: {
    more () {
      const last = manager.buyRequestService.buyRequests[manager.buyRequestService.buyRequests.length - 1]
      utils.restGet('/api/moreBuyRequests', {
        filter: {},
        paging: {_id: last._id}
      }).then(
        response => {
          if (response) {
            manager.buyRequestService.count = response.count
            manager.buyRequestService.buyRequests = response.buyRequests
          }
        }
      )
    }
  }
}
</script>

<style scoped>
.md-layout-item {
  margin-bottom: 10px;
}
.more-container {
  display: flex;
  justify-content: center;
}
.more-button {
  width: 300px;
}
</style>
