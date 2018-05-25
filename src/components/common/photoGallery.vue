<template>
<div class="photo-wrapper photo-gallery-wrapper">
  <div class="photo-gallery">
    <div class="photo-container" v-if="!photos || photos.length == null || photos.length <= 0">
      <img src="@/assets/noimage.png">
    </div>
    <div class="photo-container" v-else-if="photos && photos.length === 1">
      <img :src="photos[0]">
    </div>
    <div class="md-layout md-alignment-center-center" v-else-if="photos && photos.length < 4">
      <div class="md-layout-item md-size-50" v-for="(photo, index) in photos" :key="index">
        <div class="photo-wrapper">
          <div class="photo-container">
            <img :src="photo">
          </div>
        </div>
      </div>
    </div>
    <div class="md-layout md-alignment-center-center" v-else>
      <div class="md-layout-item md-size-33" v-for="(photo, index) in photos" :key="index" v-if="index < 9">
        <div class="photo-wrapper">
          <div class="photo-container">
            <img :src="photo">
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['manager', 'photos']
}
</script>

<style scoped lang="scss">
.photo-gallery-wrapper {
  min-width: 40px;
  border-radius: 5px;
  border: 1px solid #e8e8e8;
}
.photo-wrapper {
  width: 100%;
  padding-top: 100%;
  overflow: hidden;
  position: relative;
}
.photo-gallery {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  background: #e8e8e8;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.photo-container {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
}
</style>
