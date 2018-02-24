<template>
<md-card class="md-elevation-10">
  <md-card-header>
    <md-avatar>
      <img :src="contact.avatar">
    </md-avatar>
    <div class="md-title" v-if="contact.nickname">{{contact.nickname}}</div>
    <div class="md-title" v-else>{{contact._id}}</div>
    <div class="md-subhead">{{contact.company}}</div>
  </md-card-header>

  <md-card-content>
    <div class="contact-detail-logo">
      <img class="company-logo" src="../../../static/miraimon.png">
    </div>
    <div class="contact-detail-comment md-elevation-5" v-if="contact.comment">
      <p>{{contact.comment}}</p>
    </div>
    <div class="contact-detail-row contact-detail-right">
      <div>
        <md-icon class="md-primary">business_center</md-icon>
      </div>
      <div class="contact-text">
        {{contact.position ? contact.position : '雑用'}}
      </div>
    </div>
    <div class="contact-detail-row contact-detail-right">
      <div>
        <md-icon class="md-primary">call</md-icon>
      </div>
      <div class="contact-text">
        {{contact.phone}}
      </div>
    </div>
    <div class="contact-detail-row contact-detail-right">
      <div>
        <md-icon class="md-primary">email</md-icon>
      </div>
      <div class="contact-text">
        {{contact.email ? contact.email : 'sample@miraimon.com'}}
      </div>
    </div>
    <div class="contact-detail-row contact-detail-right">
      <div>
        <md-icon class="md-primary">room</md-icon>
      </div>
      <div class="contact-text">
        {{contact.address ? contact.address : '〒114-0012 東京都北区田端新町1-7-14ビズフィールド西日暮里107'}}
      </div>
    </div>
  </md-card-content>

  <md-card-actions>
    <md-button class="md-icon-button md-accent">
      <md-icon>delete_forever</md-icon>
    </md-button>
    <md-button class="md-icon-button md-accent">
      <md-icon>assignment_ind</md-icon>
    </md-button>
    <md-button class="md-icon-button md-accent" to="/chat">
      <md-icon>forum</md-icon>
    </md-button>
  </md-card-actions>
</md-card>
</template>

<script>
// import utils from '@/tool/utils.js'
export default {
  props: ['manager', 'contact']
}
</script>

<style scoped lang="scss">
.md-card {
  min-width: 337px;
  max-width: 420px;
  margin: 0px;
}
.md-card-content {
  position: relative;
  padding-bottom: 0px;
}
.md-subhead {
  font-size: 12px;
}
.contact-detail-logo {
  position: absolute;
  top: -64px;
  right: 16px;
  width: 60px;
  height: 60px;
  opacity: 0.9;
}
.company-logo {
  width: 100%;
  height: auto;
}
.contact-detail-comment {
  position: absolute;
  top: -15px;
  padding: 8px;
  width: calc(100% - 205px);
  background: #eee;
  border-radius: 2px;
  p {
    margin: 0;
    opacity: 0.7;
    font-size: 11px;
  }
  &::before {
    position: absolute;
    top: -8px;
    left: 15px;
    content: '';
    width: 0;
    height: 0;
    font-weight: 100;
    border-left: solid 5px transparent;
    border-right: solid 5px transparent;
    border-bottom: solid 8px #eee;
  }
}
.contact-detail-row {
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 11px;
  margin-top: 8px;
  .md-icon {
    font-size: 16px !important;
  }
}
.contact-detail-left {
  justify-content: flex-start;
}
.contact-detail-right {
  justify-content: flex-end;
}
.contact-text {
  min-width: 140px;
  min-height: 24px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid #ddd;
}
</style>
