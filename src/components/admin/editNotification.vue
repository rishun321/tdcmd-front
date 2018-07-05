<template>
<div class="contents">
  <div class="md-layout md-gutter md-alignment-left" v-if="manager.notificationService.notification">
    <div class="md-layout-item md-size-33 md-small-size-100">
      <md-field md-clearable>
        <label for="name">タイトル</label>
        <md-input v-model="manager.notificationService.notification.title"></md-input>
      </md-field>
    </div>
    <div class="md-layout-item md-size-66 md-small-size-100">
      <md-field md-clearable>
        <label for="name">カバー画像</label>
        <md-input v-model="manager.notificationService.notification.cover"></md-input>
      </md-field>
    </div>
    <div class="md-layout-item md-size-100">
      <label for="type">コンテンツ</label>
      <editor class="tinymce-editer" v-model="manager.notificationService.notification.content" api-key="pdhrddp4l1l6hxpj8xvxvbv8vsjevxyrzddh8cw4045syj7t" :init="editorInit"></editor>
    </div>
    <div class="md-layout-item md-size-100 actions">
      <md-button class="md-primary md-raised action-button" @click="save()">
        保存
      </md-button>
    </div>
  </div>
</div>
</template>

<script>
// import utils from '@/tool/utils.js'
import manager from '@/store/manager.js'
import Editor from '@tinymce/tinymce-vue'
export default {
  props: ['manager'],
  components: {
    Editor
  },
  data: () => ({
    editorInit: {
      plugins: 'print preview fullpage searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists textcolor wordcount imagetools contextmenu colorpicker textpattern help',
      toolbar: 'formatselect | bold italic strikethrough forecolor backcolor | link image | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat'
    }
  }),
  methods: {
    save () {
      const that = this
      if (!manager.notificationService.notification.id) {
        manager.notificationService.insertNotification(manager.notificationService.notification, () => {
          that.$router.push({path: '/admin/notification'})
        })
      } else {
        manager.notificationService.updateNotification(manager.notificationService.notification, () => {
          that.$router.push({path: '/admin/notification'})
        })
      }
    }
  }
}
</script>

<style scoped lang="scss">
.contents {
  padding: 16px;
}
.tinymce-editer {
  width: 100%;
  height: 350px;
}
.actions {
  padding: 20px;
  display: flex;
  justify-content: flex-end;
}
</style>
