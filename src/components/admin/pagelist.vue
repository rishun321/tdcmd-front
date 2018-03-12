<template>
<div class="app-content-auto-height">
  <vue-headful title="サンダーコマンドス - 管理"/>
  <md-content>
    <p class="title">{{pagetypename}}</p>
    <md-button class="md-raised md-primary" @click.prevent="createnew">新規</md-button>
  </md-content>
  <md-content>
    <div class="md-layout md-gutter md-alignment-top-center">
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
              <md-button class="md-accent" @click.prevent="edit(page.id)">編集</md-button>
              <md-button class="md-accent" @click.prevent="remove(page.id)">削除</md-button>
            </md-card-actions>
            <md-card-content>
              <span v-html="page.contenthtml"></span>
            </md-card-content>
          </md-card>
        </div>
    </div>
  </md-content>
  <md-table>
    <pagination
      :md-page-size="manager.pageService.pagesize"
      :md-total="manager.pageService.count"
      :md-page="manager.pageService.pageindex"
      md-label="Rows"
      md-separator="of"
      :md-page-options="[5, 10, 25, 50]"
      @goToPrevious="goToPrevious"
      @goToNext="goToNext">
    </pagination>
  </md-table>
</div>
</template>

<script>
import utils from '@/tool/utils.js'
import manager from '@/store/manager.js'
import pagination from '@/components/common/pagination'

export default {
  props: ['manager'],
  components: {
    pagination
  },
  data: function () {
    return {
      // size: 3,
      // page: 1
      // ,total: 10
    }
  },
  computed: {
    pagetypename () {
      return utils.getPageTypeDisplayName(this.$route.params.pagetype)
    }
  },
  methods: {
    createnew: function () {
      this.$router.push({path: '/admin/pageedit'})
    },
    edit: function (e) {
      this.$router.push({path: '/admin/pageedit/' + e})
    },
    remove: function (e) {
      manager.pageService.removePage(this.$route.params.pagetype, {id: e})
    },
    goToPrevious: function () {
      manager.pageService.pageindex += -1
      manager.pageService.findPage(this.$route.params.pagetype, manager.pageService.pageindex)
    },
    goToNext: function () {
      manager.pageService.pageindex += 1
      console.log('manager.pageService.pageindex:' + manager.pageService.pageindex)
      manager.pageService.findPage(this.$route.params.pagetype, manager.pageService.pageindex)
    }
  }
}
</script>

<style scoped>
.title{
  font-size: 30px;
  font-weight: 600;
}
.md-card {
  margin-bottom: 20px;
}
.trim-picture {
  height: 300px;
  object-fit: cover;
}

</style>
