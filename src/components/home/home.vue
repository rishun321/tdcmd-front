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
      最新情報・イベント
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
  <md-content class="map-container">
    <gmap-map class="gmap" :center="center" :zoom="14">
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center=m.position"
      ></gmap-marker>
    </gmap-map>
  </md-content>

  <md-content class="map-container">
    <iframe class="google-calendar" src="https://calendar.google.com/calendar/embed?src=m61elhohn1s4n613kgseekgo7o%40group.calendar.google.com&ctz=Asia%2FTokyo" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
  </md-content>

  <md-content class="company">
    <md-tabs class="md-accent">
      <md-tab md-label="会社概要">
        <div class="detail-row">
          <p class="detail-title">会社名</p>
          <p class="detail-content">アモネ株式会社</p>
        </div>
        <div class="detail-row">
          <p class="detail-title">設立</p>
          <p class="detail-content">2017年7月18日</p>
        </div>
        <div class="detail-row">
          <p class="detail-title">資本金</p>
          <p class="detail-content">930万円</p>
        </div>
        <div class="detail-row">
          <p class="detail-title">代表取締役社長</p>
          <p class="detail-content">須佐 幸輝</p>
        </div>
        <div class="detail-row">
          <p class="detail-title">本社所在地</p>
          <p class="detail-content">〒136-0071 東京都江東区亀戸3-21-8 804号</p>
        </div>
        <div class="detail-row">
          <p class="detail-title">電話</p>
          <p class="detail-content">03-6874-5906、080-4893-8383 (予約受付担当、対応時間:平日9:00-17:00)</p>
        </div>
      </md-tab>

      <md-tab md-label="事業内容">
        <p class="md-body-1">サバイバルゲーム施設の経営</p>
        <p class="md-body-1">サバイバルゲーム各装備、迷彩服及び消耗品等の輸出入及び販売</p>
        <p class="md-body-1">グラフィック、ウェブ、ファッション、パンフレット、図書及びキャラクター等のデザインの企画、作成、宣伝及び発信業務</p>
        <p class="md-body-1">イベント及び展示会等の企画、主催及び支援</p>
        <p class="md-body-1">翻訳及び通訳業務</p>
      </md-tab>

      <md-tab md-label="会社理念">
        <p class="md-body-1">お客様に喜びと満足を与え続ける。</p>
        <p class="md-body-1">最大ではなく、最適なサービスを提供する。</p>
        <p class="md-body-1">地域社会に貢献できる企業を目指す。</p>
      </md-tab>
    </md-tabs>
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
    ],
    center: {lat: 35.416645, lng: 140.042037},
    markers: [{
      position: {lat: 35.416645, lng: 140.042037}
    }]
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
  justify-content: center;
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
  min-height: 380px;
  padding: 0px;
}
.md-tab {
  padding-left: 50px;
  padding-right: 50px;
}
.detail-row {
  display: flex;
  justify-content: flex-start;
  .detail-title {
    width: 120px;
  }
  .detail-content {
    width: calc(100% - 120px);
    border-bottom: solid 1px #eee;
  }
}
.google-calendar {
  height: 80vw;
  max-height: 600px;
}
.gmap {
  width: 100%;
  height: 500px
}
</style>
