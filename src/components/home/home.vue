<template>
<div class="app-content-auto-height">
  <vue-headful title="サンダーコマンドス - ホーム"/>
  <div class="cover">
    <img class="cover-pic" src="/static/cover1.jpg">
  </div>

  <md-content>
    <div class="md-display-1 tdcmd-header">サンダーコマンドス</div>
    <div class="md-display-1 tdcmd-header">サバイバルゲーム</div>
  </md-content>
  <md-content>
    <div class="md-layout md-gutter md-alignment-top-center">

      <div class="md-layout-item md-size-33 md-small-size-50 md-xsmall-size-100">
        <md-card md-with-hover>
          <md-card-media>
            <img class="trim-picture" src="/static/h1.jpg">
          </md-card-media>
          <md-card-header>
            <div class="md-title">道具装備レンタル</div>
            <div class="md-subhead">レンタルサービス</div>
          </md-card-header>
          <md-card-actions>
            <md-button class="md-primary" to="/rental">詳しくはこちら</md-button>
          </md-card-actions>
          <md-card-content>
            サバイバルゲームの道具や装備をお持ちでない方に対して、道具と装備品のレンタルサービスもご用意しております。
          </md-card-content>
        </md-card>
      </div>

      <div class="md-layout-item md-size-33 md-small-size-50 md-xsmall-size-100">
        <md-card md-with-hover>
          <md-card-media>
            <img class="trim-picture" src="/static/h2.jpg">
          </md-card-media>
          <md-card-header>
            <div class="md-title">定例会とは</div>
            <div class="md-subhead">ルール紹介</div>
          </md-card-header>
          <md-card-actions>
            <md-button class="md-primary" to="/event">詳しくはこちら</md-button>
          </md-card-actions>
          <md-card-content>
            サンダーコマンドスは、土日や祝日に、常に定例会を開催しております。同じな趣味をお持ちの友達と出会えるかも。
          </md-card-content>
        </md-card>
      </div>

      <div class="md-layout-item md-size-33 md-small-size-50 md-xsmall-size-100">
        <md-card md-with-hover>
          <md-card-media>
            <img class="trim-picture" src="/static/h3.jpg">
          </md-card-media>
          <md-card-header>
            <div class="md-title">フィールド貸切</div>
            <div class="md-subhead">貸切サービス</div>
          </md-card-header>
          <md-card-actions>
            <md-button class="md-primary" to="/monopoly">詳しくはこちら</md-button>
          </md-card-actions>
          <md-card-content>
            親睦会戦、 リーグ戦、コスプレ撮影イベントなど、どんな目的でもフィールドを自由にご利用いただけます。
          </md-card-content>
        </md-card>
      </div>

    </div>
  </md-content>

  <md-content>
    <div class="md-display-1 tdcmd-header">
      定例会・イベントのお知らせ
      <md-button class="md-fab md-primary more" to="/event">
        <md-icon>more_horiz</md-icon>
      </md-button>
    </div>
  </md-content>
  <md-content>
    <div class="md-layout md-gutter">
      <div class="md-layout-item md-size-25 md-small-size-50 md-xsmall-size-100" v-for="event in events" :key="event._id">
        <eventCard :manager="manager" :event="event"/>
      </div>
    </div>
  </md-content>

  <md-content>
    <div class="md-display-1 tdcmd-header">
      定例会・イベントの写真
      <md-button class="md-fab md-primary more" to="/photo">
        <md-icon>more_horiz</md-icon>
      </md-button>
    </div>
  </md-content>
  <md-content>
    <div class="md-layout md-gutter">
      <div class="md-layout-item md-size-25 md-small-size-50 md-xsmall-size-100" v-for="event in events" :key="event._id">
        <eventCard :manager="manager" :event="event"/>
      </div>
    </div>
  </md-content>

  <md-content>
    <div class="md-display-1 tdcmd-header">
      アクセス
      <md-button class="md-fab md-primary more" to="/access">
        <md-icon>more_horiz</md-icon>
      </md-button>
    </div>
    <div class="md-subheading tdcmd-sub-header">〒299-0231 千葉県袖ケ浦市上泉字下鎌田1135−1</div>
  </md-content>
  <div class="cover">
    <img class="map-pic" src="/static/map1.png">
    <img class="map-pic" src="/static/map2.png">
  </div>

  <!-- <md-content class="map-container">
    <iframe class="google-calendar" src="https://calendar.google.com/calendar/embed?src=m61elhohn1s4n613kgseekgo7o%40group.calendar.google.com&ctz=Asia%2FTokyo" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
  </md-content> -->

  <md-content class="company">
    <img class="resize-picture" src="@/assets/THUNDERCOMMANDOS.png">
  </md-content>
  <md-content class="md-primary company-link">
    <md-button class="company-button" to="/company">会社概要</md-button>
  </md-content>
</div>
</template>

<script>
// import utils from '@/tool/utils.js'
import eventCard from '@/components/shared/eventCard'
export default {
  props: ['manager'],
  components: {
    eventCard
  },
  data: () => ({
    events: [
      {_id: 1, title: '3月7日 平日定例会', date: '2018年3月7日', cover: 'static/e1.png'},
      {_id: 2, title: '3月1日 定例会', date: '2018年3月1日', cover: 'static/e2.jpg'},
      {_id: 3, title: '2月22日 定例会', date: '2018年2月22日', cover: 'static/e3.jpg'},
      {_id: 4, title: '2月14日 定例会', date: '2018年2月14日', cover: 'static/e4.jpg'}
    ]
  }),
  methods: {
    changed (editor, content) {},
    preview () {
      console.log(this.content)
    }
  }
}
</script>

<style scoped lang="scss">
.cover {
  width: 100%;
  height: auto;
  // display: flex;
  // justify-content: center;
  // position: relative;
  text-align: center;
  .cover-pic {
    width: 100%;
    height: 100%;
    // object-fit: cover;
  }
  .map-pic {
    width: 100%;
    max-width: 1000px;
    height: 100%;
  }
}
.md-content {
  margin-top: 30px;
  padding: 20px;
}
.tdcmd-header {
  width: 100%;
  text-align: center;
}
.tdcmd-sub-header {
  width: 100%;
  text-align: center;
  margin-top: 10px;
}
.md-card {
  margin-bottom: 20px;
}
.trim-picture {
  width: 100%;
  height: auto;
  // object-fit: cover;
}
.more {
  float: right;
}
.map-container {
  display: flex;
  justify-content: center;
  padding: 0px;
}
.company {
  min-height: 180px;
  padding: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.resize-picture {
  width: 240px;
}
.company-link {
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
}
.company-button {
  color: #fff;
  font-weight: 450;
}
.google-calendar {
  height: 80vw;
  max-height: 600px;
}
</style>
