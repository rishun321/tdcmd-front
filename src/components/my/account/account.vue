<template>
<div>
  <vue-headful title="ブドウさん - 本人"/>
  <div class="my-card">
    <contactCard :manager="manager" :contact="manager.user"/>
  </div>
  <md-content class="main-container">
    <md-tabs class="md-primary" md-alignment="right">
      <md-tab id="tab-home" md-label="名刺">
        sdfsdfsdf
      </md-tab>
      <md-tab id="tab-pages" md-label="個人ページ">
        gegegeg
      </md-tab>
      <md-tab id="tab-posts" md-label="会社ページ">
        eeeee
      </md-tab>
    </md-tabs>
  </md-content>
</div>
</template>

<script>
import contactCard from '@/components/shared/contactCard'
import myPublish from './myPublish'
import mySaved from './mySaved'
export default {
  props: ['manager'],
  components: {
    contactCard,
    myPublish,
    mySaved
  },
  data: () => ({
    contact: {
      avatar: '../../../static/user.jpg',
      _id: 'vv',
      nickname: '田中　祐一',
      company: '未来夢株式会社',
      phone: '08099997777',
      comment: '頑張ります！'
    }
  })
}
</script>

<style scoped lang="scss">
.my-card {
  width: 337px;
  margin: 15px;
}
.main-container {
  width: 100%;
  height: auto;
}
</style>
