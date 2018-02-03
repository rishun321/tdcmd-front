<template>
  <div class="modal fade in" id="media-detail-modal" tabindex="-1" role="dialog" aria-labelledby="mediaDetailModalLabel" aria-hidden="true"
    data-show="true" data-keyboard="true" data-backdrop="true">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" id="close-detail" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <h4 class="modal-title">
            <i class="fa fa-info-circle" style="margin-right: 3px"></i>
            <span v-if="object">{{object.name}}</span>
          </h4>
        </div>
        <div class="modal-body" v-if="object">
          <div class="image-container" v-if="!object.whatami">
            <img class="resize-picture" :src="object.file" v-if="object.file"></img>
            <img class="resize-picture" src="/static/noimage.png" v-else></img>
          </div>
          <div class="image-container" v-else-if="object.getType() == 'image'">
            <img class="resize-picture" :src="object.file" v-if="object.file"></img>
            <img class="resize-picture" src="/static/noimage.png" v-else></img>
          </div>
          <div class="video-container" v-else-if="object.getType() == 'video'">
            <video v-bind:src="object.file" controls="controls">
              <img class="resize-picture" :src="object.getThumbnail()"></img>
            </video>
          </div>
          <div class="audio-container" v-else-if="object.getType() == 'audio'">
            <audio :src="object.file" controls="controls">
              <img class="resize-picture" :src="object.getThumbnail()"></img>
            </audio>
          </div>
          <div class="image-container" v-else-if="object.whatami == 'sample' || (object.whatami == 'photo' && !object.type)">
            <img class="resize-picture" :src="object.file" v-if="object.file"></img>
            <img class="resize-picture" src="/static/noimage.png" v-else></img>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CONST from '@/store/const.js'
  import manager from '@/store/manager.js'
  import utils from '@/tool/utils.js'

  export default {
    props: ['manager'],
    data() {
      return {
        object: null
      }
    },
    mounted() {
      let self = this
      utils.event.$on('MEDIA_DETAIL', (object) => {
        self.object = object
        // self.$nextTick(() => {
        //   let screenWidth = document.documentElement.clientWidth
        //   $('audio').css('width', 0.7 * screenWidth)
        // })
        $('#media-detail-modal').modal('show')
      })
      $('#media-detail-modal').on('hidden.bs.modal', (event) => {
        self.object = null
      })
    },
    beforeDestroy() {
      utils.event.$off('MEDIA_DETAIL')
      $('#media-detail-modal').off('hidden.bs.modal')
    }
  }
</script>

<style scoped lang="scss">
  #media-detail-modal {
    .modal-header {
      position: relative;
      padding: 10px 15px 8px;
      border-right: solid 1px #fff;
      .close {
        position: absolute;
        top: 6px;
        right: 10px;
        margin-top: 0px;
      }
    }
    .modal-title {
      padding-right: 40px;
      color: #333 !important;
      font-size: 11px;
      font-weight: 100;
      letter-spacing: 1px;
      i {
        display: none;
      }
      span {
        word-break: break-all;
      }
    }
    .modal-body {
      padding: 0;
      .audio-container {
        padding: 20px 0;
        text-align: center;
        img {
          flex: 0 0 auto;
          margin-right: 20px;
          width: 185px;
          height: 185px;
          background: #e8e9e9;
        }
      }
      video {
        width: 100%;
      }
      audio {
        width: 100%;
      }
    }
    .resize-picture {
      width: 100%;
      height: 100%
    }
  }
</style>
