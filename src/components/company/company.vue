<template>
<div class="app-content-auto-height">
  <vue-headful title="サンダーコマンドス - 会社概要"/>
  <div class="cover">
    <img src="/static/cover.jpg">
  </div>

  <md-content class="company">
    <md-tabs class="md-primary">
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
          <p class="detail-content">〒145-0064 東京都大田区上池台1-7-16 203号室</p>
        </div>
        <div class="detail-row">
          <p class="detail-title">電話</p>
          <p class="detail-content">080-4893-8383 (予約受付担当、対応時間:平日9:00-17:00)</p>
        </div>
      </md-tab>

      <md-tab md-label="事業内容">
        <p class="md-body-1"><md-icon>chevron_right</md-icon>サバイバルゲーム施設の経営</p>
        <p class="md-body-1"><md-icon>chevron_right</md-icon>サバイバルゲーム各装備、迷彩服及び消耗品等の輸出入及び販売</p>
        <p class="md-body-1"><md-icon>chevron_right</md-icon>グラフィック、ウェブ、ファッション、パンフレット、図書及びキャラクター等のデザインの企画、作成、宣伝及び発信業務</p>
        <p class="md-body-1"><md-icon>chevron_right</md-icon>イベント及び展示会等の企画、主催及び支援</p>
        <p class="md-body-1"><md-icon>chevron_right</md-icon>翻訳及び通訳業務</p>
      </md-tab>

      <md-tab md-label="会社理念">
        <p class="md-body-1"><md-icon>chevron_right</md-icon>お客様に喜びと満足を与え続ける。</p>
        <p class="md-body-1"><md-icon>chevron_right</md-icon>最大ではなく、最適なサービスを提供する。</p>
        <p class="md-body-1"><md-icon>chevron_right</md-icon>地域社会に貢献できる企業を目指す。</p>
      </md-tab>
    </md-tabs>
  </md-content>
</div>
</template>

<script>
// import utils from '@/tool/utils.js'
export default {
  props: ['manager']
}
</script>

<style scoped lang="scss">
.cover {
  width: 100%;
  height: auto;
  text-align: center;
  img {
    width: 100%;
    height: 100%;
  }
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
</style>
