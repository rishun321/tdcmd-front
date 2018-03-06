<template>
<div class="app-content-auto-height">
  <vue-headful title="サンダーコマンドス - 管理"/>
<md-button class="md-raised md-primary" @click.prevent="createnew">新規</md-button>
  <div class="md-layout-item md-size-33 md-small-size-50 md-xsmall-size-100" v-for="page in manager.pageService.pages" :key="page.id">
      <md-card md-with-hover>
        <md-card-media>
          <img class="trim-picture" :src="page.trimpicture">
        </md-card-media>
        <md-card-header>
          <div class="md-title">{{page.title}}</div>
          <div class="md-subhead">{{page.subhead}}</div>
        </md-card-header>
        <md-card-actions>
          <md-button class="md-accent">編集</md-button>
          <md-button class="md-accent">削除</md-button>
        </md-card-actions>
        <md-card-content>
          <span v-html="page.contenthtml"></span>
        </md-card-content>
      </md-card>
    </div>
</div>
</template>

<script>
export default {
  props: ['manager'],
  methods: {
    createnew: function () {
      let that = this
      that.$router.push({path: '/admin/pageedit'})
    }
  }
}
</script>

<style scoped>
.md-card {
  margin-bottom: 20px;
}
.trim-picture {
  height: 300px;
  object-fit: cover;
}
</style>
