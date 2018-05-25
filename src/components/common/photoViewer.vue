<template>
<div class="photo-viewer-wrapper" v-if="photos && photos.length > 0">
  <md-tabs class="photo-viewer-tabs" :md-active-tab="'tab-' + photoIndex">
    <md-tab :id="'tab-' + i" md-label="・" v-for="(photo, i) in photos" :key="i">
      <img :src="photo">
    </md-tab>
  </md-tabs>
  <div class="carousel">
    <div class="carousel-tab" v-for="i in photos.length" :key="i">
      <md-button class="md-accent" @click.stop="setCarousel(i - 1)" v-if="photoIndex !== i - 1"><md-icon>radio_button_unchecked</md-icon></md-button>
      <md-button class="md-accent" v-else><md-icon>radio_button_checked</md-icon></md-button>
    </div>
  </div>
  <div class="carousel-switch carousel-left">
    <md-button class="md-accent" @click.stop="setCarousel(photoIndex - 1)" v-if="photoIndex > 0"><md-icon>chevron_left</md-icon></md-button>
  </div>
  <div class="carousel-switch carousel-right">
    <md-button class="md-accent" @click.stop="setCarousel(photoIndex + 1)" v-if="photoIndex < photos.length - 1"><md-icon>chevron_right</md-icon></md-button>
  </div>
</div>
</template>

<script>
export default {
  props: ['manager', 'photos'],
  data: () => ({
    photoIndex: 0,
    timer: null
  }),
  mounted () {
    this.photoIndex = this.photos.length - 1
    this.switchCarousel()
  },
  methods: {
    switchCarousel () {
      const that = this
      if (this.photoIndex < this.photos.length - 1) {
        this.photoIndex += 1
      } else {
        this.photoIndex = 0
      }
      this.timer = setTimeout(() => {
        that.switchCarousel()
      }, 3000)
    },
    setCarousel (i) {
      const that = this
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        that.switchCarousel()
      }, 15000)
      this.photoIndex = i
    }
  }
}
</script>

<style scoped lang="scss">
.photo-viewer-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
}
.md-tabs {
  width: 100%;
  height: 100%;
}
.md-tab {
  width: 100%;
  height: 100%;
  padding: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
}
.carousel {
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0px;
}
.carousel-tab {
  cursor: pointer;
  .md-button {
    min-width: 36px;
    margin: 0px;
    .md-icon {
      font-size: 12px !important;
    }
  }
}
.carousel-switch {
  position: absolute;
  bottom: calc(50% - 18px);
  .md-button {
    min-width: 36px;
    margin: 0px;
    .md-icon {
      font-size: 48px !important;
      font-weight: 400 !important;
    }
  }
}
.carousel-right {
  right: 0px;
}
</style>

<style lang="scss">
// scopedではないため、コピーして使わないでください！
.photo-viewer-tabs {
  .md-tabs-navigation {
    display: none;
  }
  .md-tabs-content {
    height: 100% !important;
  }
  .md-tabs-container {
    height: 100% !important;
  }
}
</style>
