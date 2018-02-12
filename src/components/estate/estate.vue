<template>
<div>
  <div class="md-layout md-gutter subclassify-waper">
    <div class="md-layout-item">
      <md-button md-theme="pink" :class="{'md-raised': true, 'md-accent': 'sell'== selectedClassify, 'md-primary': 'sell'!= selectedClassify, 'md-elevation-6': true}" @click="go('sell')">売る</md-button>
    </div>
    <div class="md-layout-item">
      <md-button md-theme="pink" :class="{'md-raised': true, 'md-accent': 'buy'== selectedClassify, 'md-primary': 'buy'!= selectedClassify, 'md-elevation-6': true}" @click="go('buy')">買う</md-button>
    </div>
    <div class="md-layout-item">
      <md-button md-theme="pink" :class="{'md-raised': true, 'md-accent': 'rent'== selectedClassify, 'md-primary': 'rent'!= selectedClassify, 'md-elevation-6': true}" @click="go('rent')">貸す</md-button>
    </div>
    <div class="md-layout-item">
      <md-button md-theme="pink" :class="{'md-raised': true, 'md-accent': 'lend'== selectedClassify, 'md-primary': 'lend'!= selectedClassify, 'md-elevation-6': true}" @click="go('lend')">借り</md-button>
    </div>
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
    selectedClassify: null
  }),
  components: {
    buy,
    lend,
    rent,
    sell
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
.subclassify-waper {
  position: absolute;
  z-index: 100;
  width: 100%;
  top: 80px;
}
.md-button {
  width: calc(100% - 16px);
  border-radius: .2rem;
  font-weight: 600;
  height: 40px;
}
</style>
