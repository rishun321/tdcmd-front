<template>
<div>
  <div class="md-layout md-gutter subclassify-waper">
    <div :class="{ 'md-layout-item': true, 'subclassify': true,'selected': 'sell'== selectedClassify }" @click="go('sell')">売る</div>
    <div :class="{ 'md-layout-item': true, 'subclassify': true,'selected': 'buy'== selectedClassify }" @click="go('buy')">買う</div>
    <div :class="{ 'md-layout-item': true, 'subclassify': true,'selected': 'rent'== selectedClassify }" @click="go('rent')">貸す</div>
    <div :class="{ 'md-layout-item': true, 'subclassify': true,'selected': 'lend'== selectedClassify }" @click="go('lend')">借り</div>
  </div>
  <router-view :manager="manager"/>
</div>
</template>

<script>
import buy from './buy/buy'
import lend from './lend/lend'
import rent from './rent/rent'
import sell from './sell/sell'

export default {
  props: ['manager'],
  data: () => ({
    selectedClassify: 'buy'
  }),
  components: {
    buy,
    lend,
    rent,
    sell
  },
  mounted () {
    this.go('sell')
  },
  methods: {
    go (where) {
      this.selectedClassify = where
      this.$router.push({name: where})
    }
  }
}
</script>

<style scoped>
.subclassify-waper{
  position: absolute;
  z-index: 100;
  width: 98%;
  top: 70px;
}
.subclassify{
  height: 40px;
  margin: 10px 10px;
  padding: 0 8px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;

  background: #f1b5c7d5;/*背景色*/
  border-radius: 5%;/*角丸く*/
  transition: .3s;/*滑らかな動きに*/
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.12), 0 2px 2px 0 rgba(0,0,0,.24);/*影*/

  color: rgba(68, 25, 30, 0.85);
    font-weight: 600;
}

.subclassify:hover {/*ホバー時の影*/
  margin: 5px 10px 15px 10px;
  color: rgb(245, 229, 231);
  background: #df4774bd;/*背景色*/
  box-shadow: 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12), 0 2px 4px -1px rgba(0,0,0,.2);
}

.subclassify.selected {/*ホバー時の影*/
  color: rgb(245, 229, 231);
  background: #e44071ea;/*背景色*/
  box-shadow: 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12), 0 2px 4px -1px rgba(0,0,0,.2);
}

.subclassify.selected:hover {/*ホバー時の影*/
  color: rgb(245, 229, 231);
  background: #df4774bd;/*背景色*/
  box-shadow: 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12), 0 2px 4px -1px rgba(0,0,0,.2);
}

.md-button{
  width: 100%;
  height: 100%;
  background: #03a9f4;/*背景色*/
}
</style>
