<template>
<md-content class="my-page">
  <vue-headful title="ブドウさん - 個人情報"/>
  <div class="my-card">
    <contactCard :manager="manager" :contact="contact"/>
  </div>
  <md-content md-theme="light" class="my-publishes md-primary md-elevation-10">
    <myPublish :manager="manager"/>
  </md-content>
  <md-content class="main-container">
    <md-content md-theme="warm" class="lists-container md-primary">
      <md-content class="list-header list-header-1 md-elevation-10">
      </md-content>
      <md-content class="list-header list-header-2 md-elevation-10">
      </md-content>
      <md-content class="list-container md-elevation-10">
        <mySaved :manager="manager"/>
      </md-content>
    </md-content>
  </md-content>
</md-content>
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
.my-page {
  position: relative;
}
.my-card {
  position: absolute;
  top: 30px;
  left: 0px;
}
.my-publishes {
  position: absolute;
  top: 0;
  right: 0;
  width: 500px;
  height: 300px;
  overflow-x: auto;
  overflow-y: hidden;
}
.main-container {
  width: 100%;
  height: auto;
  padding: 80px 50px 0px 100px;
}
.lists-container {
  width: 100%;
  height: 100%;
  padding: 240px 10px 10px 10px;
}
.list-container {
  border-radius: 5px;
  height: auto;
}
.list-header {
  height: 15px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
}
.list-header-1 {
  width: 80%;
}
.list-header-2 {
  width: 90%;
}

@media (max-width: 894px) {
  .main-container {
    padding: 50px 0px 0px 0px;
  }
  .my-card {
    top: 320px;
    left: calc((100% - 337px) / 2);
    right: calc((100% - 337px) / 2);
    margin-left: auto;
    margin-right: auto;
  }
  .my-publishes {
    right: 10px;
    left: 10px;
    margin-left: auto;
    margin-right: auto;
    top: 0;
    width: calc(100% - 20px);
  }
  .lists-container {
    padding: 550px 10px 10px 10px;
  }
}
</style>
