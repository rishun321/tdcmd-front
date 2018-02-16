<template>
<div class="full-screen">
  <vue-headful title="ブドウさん - 物件取引"/>

  <md-speed-dial class="md-top-left" md-direction="bottom" md-effect="scale">
    <md-speed-dial-target class="md-accent">
      <md-icon class="md-morph-initial">room</md-icon>
      <md-icon class="md-morph-final">business</md-icon>
    </md-speed-dial-target>

    <md-speed-dial-content>
      <md-button :class="{'md-icon-button': true, 'md-accent': route === 'sell'}" to="/estate/sell">
        <md-icon>cloud</md-icon>
        <label>売</label>
      </md-button>
      <md-button :class="{'md-icon-button': true, 'md-accent': route === 'buy'}" to="/estate/buy">
        <md-icon>cloud</md-icon>
        <label>買</label>
      </md-button>
      <md-button :class="{'md-icon-button': true, 'md-accent': route === 'rent'}" to="/estate/rent">
        <md-icon>cloud</md-icon>
        <label>貸</label>
      </md-button>
      <md-button :class="{'md-icon-button': true, 'md-accent': route === 'lend'}" to="/estate/lend">
        <md-icon>cloud</md-icon>
        <label>借</label>
      </md-button>
    </md-speed-dial-content>
  </md-speed-dial>

  <router-view :manager="manager"/>

  <div class="full-screen estate-guide" v-if="route === 'estate'">
    <div>
      <div>
        <md-button class="md-raised md-accent button-guide" to="/estate/sell">物件を売る</md-button>
        <md-button class="md-raised md-accent button-guide" to="/estate/buy">物件を買う</md-button>
      </div>
      <div>
        <md-button class="md-raised md-accent button-guide" to="/estate/rent">物件を貸す</md-button>
        <md-button class="md-raised md-accent button-guide" to="/estate/lend">物件を借りる</md-button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['manager'],
  computed: {
    route () {
      return this.$route.name
    }
  }
}
</script>

<style scoped>
.md-speed-dial {
  z-index: 10;
  top: 90px;
}
label {
  position: absolute;
  top: 4px;
  left: 6px;
  color: #fff;
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
}
.full-screen {
  width: 100%;
  height: 100%;
}
.estate-guide {
  display: flex;
  justify-content: center;
  align-items: center;
}
.button-guide {
  width: 120px;
  height: 74px;
  margin: 16px;
}
</style>
