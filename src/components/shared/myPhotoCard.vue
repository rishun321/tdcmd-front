<template>
<md-card md-with-hover>
  <md-card-media>
    <img class="trim-picture" :src="photo.cover" v-if="photo.cover">
    <img class="trim-picture" src="@/assets/noimage.png" v-else>
  </md-card-media>
  <md-card-header>
    <div class="md-title">{{photo.title}}</div>
    <div class="md-subhead">{{photo.udateText}}</div>
  </md-card-header>
  <md-card-actions>
    <md-button class="md-primary" @click="deletePhoto(photo)">削除</md-button>
    <md-button class="md-primary" :to="'/admin/photo/' + photo.id">編集</md-button>
    <md-button class="md-primary" :to="'/photo/' + photo.id">詳細</md-button>
  </md-card-actions>
</md-card>
</template>

<script>
import utils from '@/tool/utils.js'
import manager from '@/store/manager.js'
export default {
  props: ['manager', 'photo'],
  methods: {
    deletePhoto (photo) {
      if (photo.id) {
        utils.event.$emit('SHOW_MESSAGE', {code: 'I004'}, () => {
          manager.photoService.deletePhoto({_id: photo.id}, () => {
            manager.photoService.loadPhotos(null, null, () => {
              utils.event.$emit('SCROLL_TO_TOP')
            })
          })
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.md-card {
  margin: 0;
  margin-bottom: 20px;
}
.trim-picture {
  height: 250px;
  object-fit: cover;
}
</style>
