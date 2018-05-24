<template>
<div>
  <div v-if="!enabled" class="overlayer" @touchmove.prevent @scroll.prevent
    @click="validMap"
    @mouseover="showTip"
    @mouseout="hideTip"
    @touchstart="showTip"
    @touchend="hideTip">
    <div v-if="tip" class="text-bg">
      <p class="md-title text-center">地図を操作するには、一度タップしてください</p>
    </div>
  </div>
  <div class="map-container" v-if="config.latitude && config.longitude">
    <gmap-map class="gmap-inner" :center="center" :zoom="14">
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="false"
        :draggable="false"
      ></gmap-marker>
    </gmap-map>
  </div>
</div>
</template>

<script>
export default {
  props: ['manager', 'config'],
  data: () => ({
    center: {lat: null, lng: null},
    markers: [],
    enabled: false,
    tip: false
  }),
  mounted () {
    this.markers.splice(0, this.markers.length)
    if (this.config.latitude != null && this.config.longitude != null) {
      this.center.lat = this.config.latitude
      this.center.lng = this.config.longitude
      this.markers.push({
        position: {
          lat: this.config.latitude,
          lng: this.config.longitude
        }
      })
    }
  },
  methods: {
    validMap () {
      this.enabled = true
    },
    showTip () {
      this.tip = true
    },
    hideTip () {
      this.tip = false
    }
  }
}
</script>

<style scoped lang="scss">
.map-container {
  position: relative;
  height: 100%;
}
.gmap-inner {
  width: 100%;
  height: 100%;
}
.overlayer {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
}
.text-bg {
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.2);
}
.text-center {
  width: 100%;
  padding: 50px 40px 0px 40px;
  text-align: center;
}
</style>
