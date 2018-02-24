<template>
<div>
  <vue-headful title="ブドウさん - 本人"/>
  <div class="md-layout md-gutter md-alignment-center">
    <div class="md-layout-item md-size-30 md-medium-size-40 md-small-size-100">
      <contactCard :manager="manager" :contact="manager.user"/>
    </div>
    <div class="md-layout-item md-size-70 md-medium-size-60 md-small-size-100">
      <myPublish :manager="manager"/>
    </div>
  </div>
  <md-content>
    <md-tabs class="md-primary md-elevation-1" md-alignment="right">

      <md-tab id="tab-card" md-label="名刺">
        <div class="md-layout md-gutter md-alignment-top">
          <div class="md-layout-item md-size-30 md-medium-size-40 md-small-size-50 md-xsmall-size-100">
            <md-card>
              <md-card-header>
                <md-card-header-text>
                  <div class="md-title">アバター</div>
                </md-card-header-text>
                <md-card-media md-medium>
                  <fileuploader ref="uploadCard" name = "uploadCard" :manager="manager" :onSendCompleted="showlog" :showUploadButton="false"/>
                </md-card-media>
              </md-card-header>
              <md-card-actions>
                <md-button class="md-primary">クリア</md-button>
                <md-button class="md-primary" @click.native="doUploadCard">アップロード</md-button>
              </md-card-actions>
            </md-card>
          </div>
          <div class="md-layout-item md-size-30 md-medium-size-40 md-small-size-50 md-xsmall-size-100">
            <md-card>
              <md-card-header>
                <md-card-header-text>
                  <div class="md-title">会社ロゴ</div>
                </md-card-header-text>
                <md-card-media md-medium>
                  <fileuploader ref="uploadCard2"
                    name = "uploadCard2"
                    :manager="manager"
                    :onSendCompleted="showlog"
                    :showUploadButton="false"
                    :defaultBackGroundImage="'static/miraimon.png'"/>
                </md-card-media>
              </md-card-header>
              <md-card-actions>
                <md-button class="md-primary">クリア</md-button>
                <md-button class="md-primary" @click.native="doUploadCard2">アップロード</md-button>
              </md-card-actions>
            </md-card>
          </div>
        </div>
        <div class="md-layout md-gutter md-alignment-center">
          <div class="md-layout-item md-size-33 md-small-size-50 md-xsmall-size-100">
            <md-field :class="{'md-invalid': !isNicknameValid}">
              <label>ニックネーム</label>
              <md-input v-model="manager.user.nickname" type="text"></md-input>
              <span class="md-error">10文字以内</span>
            </md-field>
          </div>
          <div class="md-layout-item md-size-33 md-small-size-50 md-xsmall-size-100">
            <md-field :class="{'md-invalid': !isPhoneValid}">
              <label>電話番号</label>
              <md-input v-model="manager.user.phone" type="text"></md-input>
              <span class="md-error">15文字以内</span>
            </md-field>
          </div>
          <div class="md-layout-item md-size-33 md-small-size-100">
            <md-field :class="{'md-invalid': !isEmailValid}">
              <label>メールアドレス</label>
              <md-input v-model="manager.user.email" type="text"></md-input>
              <span class="md-helper-text">40文字以内</span>
              <span class="md-error">40文字以内</span>
            </md-field>
          </div>
        </div>
        <div class="md-layout md-gutter md-alignment-center">
          <div class="md-layout-item md-size-25 md-small-size-100">
            <md-field :class="{'md-invalid': !isPositionValid}">
              <label>役職</label>
              <md-input v-model="manager.user.position" type="text"></md-input>
              <span class="md-error">10文字以内</span>
            </md-field>
          </div>
          <div class="md-layout-item md-size-75 md-small-size-100">
            <md-field :class="{'md-invalid': !isCommentValid}">
              <label>コメント</label>
              <md-input v-model="manager.user.comment" type="text"></md-input>
              <span class="md-error">30文字以内</span>
            </md-field>
          </div>
        </div>
        <div class="md-layout md-gutter md-alignment-center">
          <div class="md-layout-item md-size-25 md-small-size-100">
            <md-field :class="{'md-invalid': !isCompanyValid}">
              <label>会社名</label>
              <md-input v-model="manager.user.company" type="text"></md-input>
              <span class="md-error">15文字以内</span>
            </md-field>
          </div>
          <div class="md-layout-item md-size-75 md-small-size-100">
            <md-field :class="{'md-invalid': !isAddressValid}">
              <label>会社アドレス</label>
              <md-input v-model="manager.user.address" type="text"></md-input>
              <span class="md-error">60文字以内</span>
            </md-field>
          </div>
        </div>
        <div class="md-layout">
          <div class="md-layout-item md-size-100 action-container">
            <md-button class="md-accent md-raised">
              <div class="button-text">
                <md-icon>save</md-icon><p>保存</p>
              </div>
            </md-button>
          </div>
        </div>
      </md-tab>

      <md-tab id="tab-personal" md-label="個人ページ">
        <mySaved :manager="manager"/>
      </md-tab>

      <md-tab id="tab-company" md-label="会社ページ">
        eeeee
      </md-tab>

    </md-tabs>
  </md-content>
</div>
</template>

<script>
import manager from '@/store/manager.js'
import contactCard from '@/components/shared/contactCard'
import myPublish from './myPublish'
import mySaved from './mySaved'
import fileuploader from '@/components/common/fileuploader'
export default {
  props: ['manager'],
  components: {
    contactCard,
    myPublish,
    mySaved,
    fileuploader
  },
  data: () => ({
    tab: 'tab-card'
  }),
  computed: {
    isNicknameValid () {
      return manager.user.nickname.length <= 10
    },
    isPositionValid () {
      return manager.user.position.length <= 10
    },
    isPhoneValid () {
      return manager.user.phone.length <= 15
    },
    isEmailValid () {
      return manager.user.email.length <= 40
    },
    isCommentValid () {
      return manager.user.comment.length <= 30
    },
    isCompanyValid () {
      return manager.user.company.length <= 15
    },
    isAddressValid () {
      return manager.user.address.length <= 60
    }
  },
  methods: {
    showlog () {
      console.log('custome completed method')
    },
    doUploadCard () {
      console.log('begin upload1')
      this.$refs.uploadCard.doUpload()
    },
    doUploadCard2 () {
      console.log('begin upload2')
      let file = this.$refs.uploadCard2.getSelectedFile()
      console.log(file)
      this.$refs.uploadCard2.doUpload()
    }
  }
}
</script>

<style scoped lang="scss">
.md-layout + .md-content {
  margin-top: 20px;
}
.md-layout + .md-layout {
  margin-top: 20px;
}
.md-layout-item {
  margin-top: 10px;
}
.thumbnail {
  max-width: 150px;
  height: auto;
}
.action-container {
  display: flex;
  justify-content: center;
}
.button-text {
  display: flex;
  justify-content: center;
  align-items: center;
  .md-icon {
    margin-right: 5px;
  }
}
</style>
