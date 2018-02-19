<template>
  <div class="app-content-fix-height scene-container">
    <vue-headful title="ブドウさん - 内覧"/>
    <a-scene embedded>
      <a-assets>
        <img id="photo-view" :src="view">
        <img id="photo-info" :src="info">
      </a-assets>
      <a-sky id="image-360" radius="10" src="#photo-view"></a-sky>
      <a-entity class="link" geometry="primitive: plane; height: 1; width: 1" material="shader: flat; src: #photo-info" position="5 5 -5">
      <!-- <a-entity class="link" geometry="primitive: plane; height: 1; width: 1" position="0 0 0"> -->
      </a-entity>
      <a-camera>
        <a-cursor id="cursor">
          <a-animation begin="click" easing="ease-in" attribute="scale" fill="backwards" from="0.1 0.1 0.1" to="1 1 1" dur="150"></a-animation>
          <a-animation begin="cursor-fusing" easing="ease-in" attribute="scale" from="1 1 1" to="0.1 0.1 0.1" dur="1500"></a-animation>
        </a-cursor>
      </a-camera>
    </a-scene>
  </div>
</template>

<script>
export default {
  props: ['manager'],
  data: () => ({
    view: '../../../static/city.jpg',
    info: '../../../static/thumb-city.jpg'
  }),
  created () {
    if (this.$route.params.id === 'city') {
      this.view = '../../../static/city.jpg'
      this.info = '../../../static/miraimon.png'
    }
    if (this.$route.params.id === 'cubes') {
      this.view = '../../../static/cubes.jpg'
      this.info = '../../../static/miraimon.png'
    }
    if (this.$route.params.id === 'sechelt') {
      this.view = '../../../static/sechelt.jpg'
      this.info = '../../../static/miraimon.png'
    }
    if (this.$route.params.id === 'beach') {
      this.view = '../../../static/beach.jpg'
      this.info = '../../../static/miraimon.png'
    }
    if (this.$route.params.id === 'shop') {
      this.view = '../../../static/shop.jpg'
      this.info = '../../../static/miraimon.png'
    }
    if (this.$route.params.id === 'star') {
      this.view = '../../../static/star.jpg'
      this.info = '../../../static/miraimon.png'
    }
    if (this.$route.params.id === 'mountain') {
      this.view = '../../../static/mountain.jpg'
      this.info = '../../../static/miraimon.png'
    }
  }
}
</script>

<style scoped>
.scene-container {
  display: flex;
  justify-content: center;
  padding: 15px;
}
a-scene {
  width: 998px;
  height: 700px;
}
</style>
