<template>
<div>
    <vue-headful title="サンダーコマンドス - 新規"/>
    <md-card>
      <md-card-header>
        <div class="md-title">新規</div>
      </md-card-header>

      <md-card-content>
        <div class="md-layout md-gutter md-alignment-center">
          <div class="md-layout-item md-small-size-33 md-xsmall-size-100">
            <md-field md-clearable :class="{'md-invalid': inValidObj === 'name'}">
              <label for="name">タイトル</label>
              <md-input ref="name" v-model="manager.pageService.editpage.title" required></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-33 md-xsmall-size-100">
            <md-field md-clearable :class="{'md-invalid': inValidObj === 'name'}">
              <label for="name">サブタイトル</label>
              <md-input ref="name" v-model="manager.pageService.editpage.subhead" required></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-33 md-xsmall-size-100">
            <md-field :class="{'md-invalid': inValidObj === 'adress'}">
              <label for="adress">タイプ</label>
              <md-select v-model="manager.pageService.editpage.type">
                <md-option value="event">イベント</md-option>
                <md-option value="photo">活動の写真</md-option>
              </md-select>
            </md-field>
          </div>
        </div>
        <div class="tinymce-editer">
          <label for="type">コンテンツ</label>
          <editor v-model="contenthtml" api-key="pdhrddp4l1l6hxpj8xvxvbv8vsjevxyrzddh8cw4045syj7t" :init="editorInit"></editor>
        </div>
      </md-card-content>

      <md-card-actions>
        <md-button class="md-raised md-primary" @click="cancel()">取消</md-button>
        <md-button class="md-raised md-primary" @click="save()">保存</md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
import utils from '@/tool/utils.js'
import manager from '@/store/manager.js'
import Editor from '@tinymce/tinymce-vue'

export default {
  props: ['manager'],
  components: {
    Editor
  },
  data: () => ({
    inValidObj: '',
    editorInit: {
      plugins: 'print preview fullpage powerpaste searchreplace autolink directionality advcode visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists textcolor wordcount tinymcespellchecker a11ychecker imagetools mediaembed  linkchecker contextmenu colorpicker textpattern help',
      toolbar: 'formatselect | bold italic strikethrough forecolor backcolor | link image | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat'
    }
  }),
  created () {
    this.contenthtml = manager.pageService.editpage.contenthtml
  },
  methods: {
    cancel () {
      this.$router.go(-1)
    },
    save () {
      let that = this

      manager.pageService.editpage.contenthtml = this.contenthtml

      if (manager.pageService.editpage.id) {
        manager.pageService.updatePage(manager.pageService.editpage.toJSON()).then(that.onSaveCompleted)
      } else {
        manager.pageService.publishPage(manager.pageService.editpage.toJSON()).then(that.onSaveCompleted)
      }
    },
    onSaveCompleted () {
      let that = this
      utils.event.$emit('SHOW_MESSAGE', {code: 'I002'}, () => {
        that.$router.push({name: 'pagelist'})
      })
    },
    isValidBaseInfo () {
      let that = this
      that.firstStepError = null
      that.inValidObj = ''

      if (!manager.myService.editSellPiece.name) {
        that.inValidObj = 'name'
        that.firstStepError = '建物名を入力してください！'
        that.$nextTick(function () {
          that.$refs.name.$el.focus()
        })
        return false
      }

      if (!manager.myService.editSellPiece.address) {
        that.inValidObj = 'address'
        that.firstStepError = 'アドレスを入力してください！'
        that.$nextTick(function () {
          that.$refs.adress.$el.focus()
        })
        return false
      }

      that.isValidBuildAge()

      return that.firstStepError == null
    }
  }
}
</script>

<style lang="scss" scoped>
.viewport {
  width: 100%;
  min-width: 500px;
  display: inline-block;
  vertical-align: top;
  overflow: auto;
  border: 1px solid rgba(#000, .12);
}
.subTitle{
  font-size: 30px;
  font-weight: 500;
  padding: 10px;
}

.tinymce-editer{
  margin: auto;
  width: 100%;
}
</style>
