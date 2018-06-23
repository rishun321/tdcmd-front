<template>
<div class="app-content-auto-height">
  <vue-headful title="サンダーコマンドス - レンタル"/>
  <div class="cover">
    <img src="/static/cover1.jpg">
  </div>

  <p class="md-display-1 content-title">レンタル装備</p>
  <div class="contents">
    <div class="md-layout md-gutter md-alignment-top-center">
      <div class="md-layout-item md-size-25 md-medium-size-33 md-small-size-50 md-xsmall-size-100">
        <img src="/static/rental1.jpg">
        <p class="md-title">電動ガン</p>
      </div>
      <div class="md-layout-item md-size-25 md-medium-size-33 md-small-size-50 md-xsmall-size-100">
        <img src="/static/rental2.jpg">
        <p class="md-title">電動ガン</p>
      </div>
      <div class="md-layout-item md-size-25 md-medium-size-33 md-small-size-50 md-xsmall-size-100">
        <img src="/static/rental3.jpg">
        <p class="md-title">電動ガン</p>
      </div>
      <div class="md-layout-item md-size-25 md-medium-size-33 md-small-size-50 md-xsmall-size-100">
        <img src="/static/rental4.jpg">
        <p class="md-title">電動ガン</p>
      </div>
      <div class="md-layout-item md-size-25 md-medium-size-33 md-small-size-50 md-xsmall-size-100">
        <img src="/static/rental5.jpg">
        <p class="md-title">電動ガン</p>
      </div>
      <div class="md-layout-item md-size-25 md-medium-size-33 md-small-size-50 md-xsmall-size-100">
        <img src="/static/rental6.jpg">
        <p class="md-title">電動ガン</p>
      </div>
      <div class="md-layout-item md-size-25 md-medium-size-33 md-small-size-50 md-xsmall-size-100">
        <img src="/static/rental7.jpg">
        <p class="md-title">電動ガン</p>
      </div>
    </div>
  </div>
  <p class="md-display-1 content-title">料金</p>
  <div class="contents">
    <md-table>
      <md-table-row>
        <md-table-head>装備</md-table-head>
        <md-table-head>賃金</md-table-head>
        <md-table-head>備考</md-table-head>
      </md-table-row>

      <md-table-row>
        <md-table-cell>銃</md-table-cell>
        <md-table-cell>3,000円</md-table-cell>
        <md-table-cell>バッテリー交換は無料で行います。</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>ベスト</md-table-cell>
        <md-table-cell>500円</md-table-cell>
        <md-table-cell>ー</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>バッテリー</md-table-cell>
        <md-table-cell>500円</md-table-cell>
        <md-table-cell>ー</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>迷彩服</md-table-cell>
        <md-table-cell>1,000円</md-table-cell>
        <md-table-cell>ー</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>フルフェイスゴーグル</md-table-cell>
        <md-table-cell>500円</md-table-cell>
        <md-table-cell>ー</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>バイオbb弾0.2g</md-table-cell>
        <md-table-cell>お問い合わせください</md-table-cell>
        <md-table-cell>ー</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>バイオbb弾0.25g</md-table-cell>
        <md-table-cell>お問い合わせください</md-table-cell>
        <md-table-cell>ー</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>BBガス</md-table-cell>
        <md-table-cell>お問い合わせください</md-table-cell>
        <md-table-cell>ー</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>ゴーグル各種類</md-table-cell>
        <md-table-cell>お問い合わせください</md-table-cell>
        <md-table-cell>ー</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>電池</md-table-cell>
        <md-table-cell>お問い合わせください</md-table-cell>
        <md-table-cell>ー</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>BBボイル各サイズ</md-table-cell>
        <md-table-cell>お問い合わせください</md-table-cell>
        <md-table-cell>ー</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>BBローダー各サイズ</md-table-cell>
        <md-table-cell>お問い合わせください</md-table-cell>
        <md-table-cell>ー</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>プレシャワー お肌の虫除けスプレー</md-table-cell>
        <md-table-cell>お問い合わせください</md-table-cell>
        <md-table-cell>ー</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>お菓子</md-table-cell>
        <md-table-cell>お問い合わせください</md-table-cell>
        <md-table-cell>ー</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>ドリンク</md-table-cell>
        <md-table-cell>お問い合わせください</md-table-cell>
        <md-table-cell>ー</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
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
.content-title {
  text-align: center;
}
.contents {
  padding: 16px;
}
.md-layout-item {
  margin-bottom: 30px;
}
.md-title {
  text-align: center;
}
</style>
