<template>
<md-card>
  <md-card-content>
    <div class="md-layout md-gutter">
      <div class="md-layout-item md-size-25 md-medium-size-33 md-small-size-50 md-xsmall-size-100" v-for="piece in pieces" :key="piece._id">
        <pieceCard :manager="manager" :piece="piece"/>
      </div>
    </div>
  </md-card-content>
</md-card>
</template>

<script>
import pieceCard from './pieceCard'
export default {
  props: ['manager'],
  components: {
    pieceCard
  },
  data: () => ({
    pieces: [
      {_id: '1', name: '亀戸富士マンション', preview: 'city', text: 'ＪＲ総武線 / 亀戸駅 徒歩10分、4階、南向き、２５００万、専有面積、25.51m²'},
      {_id: '2', name: 'リリナー', preview: 'cubes', text: '投資用マーション、中古'},
      {_id: '3', name: '田中竜', preview: 'sechelt', text: '3階建一軒家、新築'},
      {_id: '4', name: '中田龍', preview: 'beach', text: '5000万以内であれば、なんでもいい'},
      {_id: '5', name: 'ナースカリスマ', preview: 'shop', text: '居間は畳、北向き'},
      {_id: '6', name: 'おたくの神', preview: 'beach', text: '東陽町付近、マンション'},
      {_id: '7', name: '中田龍', preview: 'city', text: 'ワンルーム、貸し出し安いマンション'},
      {_id: '8', name: 'ハウスマン', preview: 'cubes', text: '3LDK以上'},
      {_id: '9', name: 'リリナー', preview: 'sechelt', text: '1000万円以内、茨城県'},
      {_id: '10', name: '五十嵐東海林太郎', preview: 'shop', text: '富士山麓、交通便利、贅沢を尽くす別荘'}
    ]
  })
}
</script>

<style scoped>
.md-layout-item {
  margin-bottom: 10px;
}
</style>
