<template>
<div class="app-content-auto-height">
  <vue-headful title="サンダーコマンドス - ホーム"/>
  <div class="cover">
    <img src="static/home.png">
  </div>

  <md-content>
    <div class="md-display-1 home-header">サンダーコマンドス</div>
    <div class="md-display-1 home-header">サバイバルゲーム</div>
  </md-content>
  <md-content>
    <div class="md-layout md-gutter md-alignment-top-center">

      <div class="md-layout-item md-size-33 md-small-size-50 md-xsmall-size-100">
        <md-card md-with-hover>
          <md-card-media>
            <img class="trim-picture" src="static/h1.jpg">
          </md-card-media>
          <md-card-header>
            <div class="md-title">道具装備レンタル</div>
            <div class="md-subhead">レンタルサービス</div>
          </md-card-header>
          <md-card-actions>
            <md-button class="md-accent">詳しくはこちら</md-button>
          </md-card-actions>
          <md-card-content>
            サバイバルゲームの道具や装備をお持ちでない方に対して、道具と装備品のレンタルサービスもご用意しております。
          </md-card-content>
        </md-card>
      </div>

      <div class="md-layout-item md-size-33 md-small-size-50 md-xsmall-size-100">
        <md-card md-with-hover>
          <md-card-media>
            <img class="trim-picture" src="static/h2.jpg">
          </md-card-media>
          <md-card-header>
            <div class="md-title">フィールド貸切</div>
            <div class="md-subhead">予約サービス</div>
          </md-card-header>
          <md-card-actions>
            <md-button class="md-accent">詳しくはこちら</md-button>
          </md-card-actions>
          <md-card-content>
            親睦会戦、 リーグ戦、コスプレ撮影イベントなど、どんな目的でもフィールドを自由にご利用いただけます。
          </md-card-content>
        </md-card>
      </div>

      <div class="md-layout-item md-size-33 md-small-size-50 md-xsmall-size-100">
        <md-card md-with-hover>
          <md-card-media>
            <img class="trim-picture" src="static/h3.jpg">
          </md-card-media>
          <md-card-header>
            <div class="md-title">定例会参加</div>
            <div class="md-subhead">予約サービス</div>
          </md-card-header>
          <md-card-actions>
            <md-button class="md-accent">詳しくはこちら</md-button>
          </md-card-actions>
          <md-card-content>
            サンダーコマンドスは、土日や祝日に、常に定例会を開催しております。同じな趣味をお持ちの友達と出会えるかも。
          </md-card-content>
        </md-card>
      </div>

    </div>
  </md-content>

  <md-content>
    <div class="md-display-1 home-header">
      定例会・イベント
      <md-button class="md-fab md-plain more">
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
    <div class="md-display-1 home-header">
      ゲームの写真
      <md-button class="md-fab md-plain more">
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
    <div class="md-display-1 home-header">
      アクセス
      <md-button class="md-fab md-plain more" to="/access">
        <md-icon>more_horiz</md-icon>
      </md-button>
    </div>
    <div class="md-subheading home-sub-header">〒299-0231 千葉県袖ケ浦市上泉字下鎌田1135−1</div>
  </md-content>
  <md-content class="map-container">
    <img src="static/map.png">
  </md-content>

  <md-content class="company">
    <img class="resize-picture" src="static/THUNDER-COMMANDOS.png">
  </md-content>
  <md-content md-theme="reverse" class="md-primary company-link">
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
  })
}
</script>

<style scoped lang="scss">
.cover {
  width: 100%;
  height: 700px;
  display: flext;
  justify-content: center;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.md-content {
  margin-top: 30px;
  padding: 20px;
}
.home-header {
  width: 100%;
  text-align: center;
}
.home-sub-header {
  width: 100%;
  text-align: center;
  margin-top: 10px;
}
.md-card {
  margin-bottom: 20px;
}
.trim-picture {
  height: 300px;
  object-fit: cover;
}
.more {
  float: right;
}
.map-container {
  display: flex;
  justify-content: center;
}
.company {
  min-height: 180px;
  padding: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #aaa;
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
</style>
