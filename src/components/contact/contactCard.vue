<template>
<md-card>
  <md-card-header>
    <md-avatar>
      <img :src="contact.avatar" alt="Avatar">
    </md-avatar>
    <div class="md-title">{{contact._id}} ({{contact.nickname}})</div>
    <div class="md-subhead">{{contact.company}} - 雑用</div>
  </md-card-header>

  <md-card-content>
    <div class="contact-detail-comment md-elevation-5" v-if="contact.comment">
      <p>{{contact.comment}}</p>
    </div>
    <div class="contact-detail-row contact-detail-right">
      <div>
        <md-icon>call</md-icon>
      </div>
      <div class="contact-text">
        {{contact.phone}}
      </div>
    </div>
    <div class="contact-detail-row contact-detail-right">
      <div>
        <md-icon>email</md-icon>
      </div>
      <div class="contact-text">
        sample@miraimon.com
      </div>
    </div>
    <div class="contact-detail-row contact-detail-right">
      <div>
        <md-icon>markunread_mailbox</md-icon>
      </div>
      <div class="contact-text">
        114-0012
      </div>
    </div>
    <div class="contact-detail-row contact-detail-right">
      <div>
        <md-icon>room</md-icon>
      </div>
      <div class="contact-text">
        東京都北区田端新町1-7-14ビズフィールド西日暮里107
      </div>
    </div>
  </md-card-content>

  <md-card-actions>
    <md-button class="md-icon-button">
      <md-icon>delete_forever</md-icon>
    </md-button>
    <md-button class="md-icon-button md-primary">
      <md-icon>assignment_ind</md-icon>
    </md-button>
    <md-button class="md-icon-button md-primary" to="/chat">
      <md-icon>forum</md-icon>
    </md-button>
  </md-card-actions>
</md-card>
</template>

<script>
// import utils from '@/tool/utils.js'
export default {
  props: ['manager', 'contact'],
  methods: {
    tocontact (contact) {
      this.$router.push({name: 'contact'})
    }
  }
}
</script>

<style scoped lang="scss">
.md-card {
  width: 400px;
}
.md-card-content {
  position: relative;
  padding-bottom: 0px;
}
.contact-detail-comment {
  margin-bottom: 20px;
  position: absolute;
  top: -15px;
  padding: 10px;
  width: 190px;
  background: #eee;
  border-radius: 2px;
  p {
    margin: 0;
    opacity: 0.7;
    font-size: 12px;
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
  font-size: 12px;
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
