<template>
<md-card class="md-primary" md-with-hover>
  <md-ripple>
    <md-card-header>
      <md-card-header-text  @click.native="showContactDetail(contact)">
        <div class="md-title">{{contact.name}}</div>
        <div class="md-subhead">{{contact.text}}</div>
        <md-button class="md-icon-button detail-info">
          <md-icon>account_circle</md-icon>
        </md-button>
      </md-card-header-text>
    </md-card-header>
    <md-card-content  @click.native="showContactDetail(contact)">
      <div class="line">
        <div style="flex:left;">
          <md-card-media md-medium>
            <img class="business-card-image" src="../../../static/user.jpg" alt="People">
          </md-card-media>
        </div>
        <div style="flex:left;">
          <div class="line"><i class="material-icons contact-content">call</i><div class="business-card-content">123-1234-1234</div></div>
          <div class="line"><i class="material-icons contact-content">business</i><div class="business-card-content">西日本旅客鉄道</div></div>
          <div class="line"><i class="material-icons contact-content">email</i><div class="business-card-content">sspport@miraimon.com</div></div>
        </div>
      </div>
    </md-card-content>
    <md-card-actions>
      <md-button class="contact-buttom" @click.stop="tocontact(contact)">
        <div class="line"><div class="business-card-content">システム内連絡</div><i class="material-icons contact-content">contact_mail</i></div>
      </md-button>
    </md-card-actions>
  </md-ripple>
</md-card>
</template>

<script>
import utils from '@/tool/utils.js'
export default {
  props: ['manager', 'contact'],
  methods: {
    tocontact (contact) {
      console.log('tocontact')
      this.$router.push({name: 'contact'})
    },
    showContactDetail (contact) {
      console.log('showContactDetail')
      utils.event.$emit('SHOW_CONTACT_DIALOG', contact)
    }
  }
}
</script>

<style scoped>
.line{
  display: flex;
  flex-flow: row wrap;
}

.material-icons{
  margin: 0 5px 5px 5px;
}

.md-card{
  border-radius: 10px;
}

.md-card-header {
  padding: 5px;
}

.md-card-actions{
  display: flex;
  padding: 0;
}

.detail-info {
  display: flex;
  margin: 0 5px 0 auto;
  padding: 0 5px 0 auto;
}

.md-card-content{
  background: white;
  opacity: 0.9;
  margin: 2px;
  color: black;
  padding: 5px;
}

.md-card-header-text{
  display: flex;
  white-space: nowrap;
}

.md-subhead {
  margin-top: 18px;
}

.business-card-image{
  border-radius: 50%;
  width: 60px;
  height: 60px;
}

.business-card-content {
  margin-top: 2px;
  margin-bottom: 3px;
}

.contact-buttom {
  margin: 0 auto;
  left: 5px;
  width: 100%;
}
</style>
