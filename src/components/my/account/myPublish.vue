<template>
<div class="my-publish">
  <md-content class="list-header list-header-1 md-elevation-10">
  </md-content>
  <md-content class="list-header list-header-2 md-elevation-10">
  </md-content>
  <md-tabs class="md-elevation-10">
    <md-tab id="tab-publish-sell" md-label="売出">
      <md-content class="publish-container md-scrollbar">
        <div class="md-layout md-alignment-top">
          <div class="md-layout-item md-size-25 md-medium-size-50 md-xsmall-size-100" v-for="piece in pieces" :key="piece._id">
            <div class="one-publish">
              <sellPieceCard :manager="manager" :piece="piece"/>
            </div>
          </div>
        </div>
      </md-content>
    </md-tab>
    <md-tab id="tab-publish-buy" md-label="買入">
      <md-content class="publish-container md-scrollbar">
        buy
      </md-content>
    </md-tab>
    <md-tab id="tab-publish-rent" md-label="貸付">
      <md-content class="publish-container md-scrollbar">
        rent
      </md-content>
    </md-tab>
    <md-tab id="tab-publish-lend" md-label="借入">
      <md-content class="publish-container md-scrollbar">
        lend
      </md-content>
    </md-tab>
  </md-tabs>
  <md-content class="md-accent list-title md-elevation-1">
    <div class="text-alignment">公開中</div>
  </md-content>
</div>
</template>

<script>
import sellPieceCard from '@/components/shared/sellPieceCard'
export default {
  props: ['manager'],
  components: {
    sellPieceCard
  },
  data: () => ({
    pieces: [
      {_id: '1', name: '亀戸富士マンション', preview: 'city', text: 'ＪＲ総武線 / 亀戸駅 徒歩10分、4階、南向き、２５００万、専有面積、25.51m²'},
      {_id: '2', name: 'リリナー', preview: 'cubes', text: '投資用マーション、中古'},
      {_id: '3', name: '田中竜', preview: 'sechelt', text: '3階建一軒家、新築'},
      {_id: '4', name: '中田龍', preview: 'beach', text: '5000万以内であれば、なんでもいい'}
    ]
  })
}
</script>

<style scoped lang="scss">
.my-publish {
  width: 100%;
  height: auto;
  position: relative;
}
.publish-container {
  height: 300px;
  overflow: auto;
}
.md-tab {
  padding: 0px;
}
.one-publish {
  padding: 10px;
}
.list-title {
  width: 60px;
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  top: 10px;
  border-radius: 5px;
  .text-alignment {
    text-align: center;
  }
}
.list-header {
  height: 15px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
}
.list-header-1 {
  width: 80%;
}
.list-header-2 {
  width: 90%;
}
</style>
