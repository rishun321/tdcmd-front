<template>
<div class="upload-wrapper">
  <file-upload class="fileupload" ref="uploader" :custom-action="uploadAction" :accept="acceptFileType" :extensions="extensionFileType" :size="limitSize" :multiple="true" :maximum="maximum" :thread="maximum" @input-filter="inputFilter" v-model="files"/>
  <div ref="draggable" class="file-list">
    <div class="one-file" v-for="file in files" :key="file.id">
      <div class="thumbnail">
        <img :src="file.thumbnail">
      </div>
      <div class="file-detail">
        <div class="md-title file-name">
          {{file.name}}
        </div>
        <div class="md-caption file-size">
          <md-icon>description</md-icon>{{formatSize(file.size)}}
        </div>
      </div>
      <div class="file-action">
        <md-button class="md-icon-button md-raised" @click="remove(file)"><md-icon>clear</md-icon></md-button>
      </div>
      <div class="progress-bar" v-show="file.active">
        <md-progress-bar md-mode="buffer" :md-value="file.progress" :md-buffer="100"></md-progress-bar>
      </div>
    </div>
  </div>
  <div class="md-layout">
    <div class="md-layout-item md-size-40 md-xsmall-size-100 upload-title">
      <span class="md-title">{{title}}</span>
    </div>
    <div class="md-layout-item md-size-60 md-xsmall-size-100 upload-action">
      <md-button class="md-accent md-raised" @click="clear" v-show="this.files && this.files.length > 0">全てクリア</md-button>
      <md-button class="md-accent md-raised" @click="browse">ファイル選択</md-button>
    </div>
  </div>
</div>
</template>

<script>
import utils from '@/tool/utils.js'
import FileUpload from 'vue-upload-component/dist/vue-upload-component.part.js'
export default {
  props: {
    manager: {
      default: 'manager'
    },
    title: {
      type: String,
      default: 'アップロード'
    },
    acceptType: {
      type: String,
      default: null
    },
    maximum: {
      type: Number,
      default: 10
    },
    subFolder: {
      type: String,
      default: null
    }
  },
  components: {
    FileUpload
  },
  data: () => ({
    files: [],
    limitSize: 0,
    acceptFileType: null,
    extensionFileType: null,
    next: null,
    results: null
  }),
  created () {
    if (this.acceptType === 'image') {
      this.acceptFileType = 'image/png, image/jpeg, image/tiff, image/x-tiff, image/svg+xml, image/bmp, image/x-bmp, image/x-ms-bmp, image/gif'
      this.extensionFileType = 'jpg, jpeg, png, tif, tiff, svg, bmp, gif'
      this.limitSize = 1024 * 1024 * 20
    } else {
      this.acceptFileType = null
      this.extensionFileType = null
      this.limitSize = 1024 * 1024 * 1024 * 2
    }
  },
  mounted () {
    const that = this
    that.$refs.draggable.ondragover = (e) => {
      e.preventDefault()
    }
    that.$refs.draggable.ondrop = (e) => {
      e.preventDefault()
      for (let file of e.dataTransfer.files) {
        if (file !== null) {
          let isValid = true
          if (that.acceptFileType) {
            let types = that.acceptFileType.split(',')
            isValid = types.some(type => {
              if (type.trim() === file.type) return true
            })
          }
          if (isValid) that.$refs.uploader.add(file)
        }
      }
    }
  },
  methods: {
    formatSize (size) {
      return utils.formatSize(size)
    },
    inputFilter (newFile, oldFile, prevent) {
      if (newFile && !oldFile) {
        if (/(\/|^)(Thumbs\.db|desktop\.ini|\..+)$/.test(newFile.name)) {
          return prevent()
        }
        if (newFile && (!oldFile || newFile.file !== oldFile.file)) {
          if (newFile.size > this.limitSize) {
            utils.event.$emit('SHOW_MESSAGE', {code: 'B005', detail: 'ファイルサイズを' + utils.formatSize(this.limitSize) + '以内にしてください。'})
            return prevent()
          } else if (this.files.length >= this.maximum) {
            utils.event.$emit('SHOW_MESSAGE', {code: 'B007', detail: this.maximum + 'ファイル以内にしてください。'})
            return prevent()
          } else {
            newFile.blob = ''
            let URL = window.URL || window.webkitURL
            if (URL && URL.createObjectURL) {
              newFile.blob = URL.createObjectURL(newFile.file)
            }
            newFile.thumbnail = ''
            if (newFile.blob && newFile.type.substr(0, 6) === 'image/' && newFile.type.indexOf('photoshop') < 0 && newFile.type.indexOf('psd') < 0) {
              newFile.thumbnail = newFile.blob
            } else {
              newFile.thumbnail = utils.getIcon(newFile.type)
            }
            newFile.progress = 0
          }
        }
      }
    },
    browse () {
      this.$refs.uploader.$el.click()
    },
    clear () {
      this.$refs.uploader.clear()
    },
    remove (file) {
      this.$refs.uploader.remove(file)
    },
    uploadAction (file, component) {
      let that = this
      let options = {}
      return new Promise(async (resolve, reject) => {
        await utils.uploadFile(file, options).then((response) => {
          if (response && response[0]) {
            that.results.push(response[0])
          }
        })
        that.finish()
      })
    },
    finish () {
      if (this.results.length === this.files.length) {
        utils.event.$emit('LOCK_SCREEN', 'unlock')
        if (this.next !== null) {
          this.next(this.results)
          this.next = null
        }
        this.clear()
      }
    },
    upload (next) {
      if (this.files && this.files.length > 0) {
        this.results = []
        this.next = next || null
        utils.event.$emit('LOCK_SCREEN', 'lock')
        this.$refs.uploader.active = true
      } else {
        this.results = null
        if (next !== null) {
          next(this.results)
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.upload-wrapper {
  width: 100%;
  height: 100%;
}
.fileupload {
  display: none;
}
.file-list {
  width: 100%;
  min-height: 202px;
  position: relative;
  border: 1px solid #e8e8e8;
}
.file-list:hover {
  background: #e8e8e8;
}
.one-file {
  position: relative;
  width: calc(100% - 10px);
  height: 60px;
  margin: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .thumbnail {
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #e8e8e8;
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
  .file-detail {
    width: calc(100% - 60px);
    height: 60px;
    .file-name, .file-size {
      font-size: 14px;
      width: calc(100% - 30px);
      height: 30px;
      margin-left: 15px;
      display: flex;
      .md-icon {
        height: 18px;
        font-size: 14px !important;
        margin: 0 5px 0 0;
      }
    }
    .file-name {
      align-items: flex-end;
    }
    .file-size {
      align-items: flex-start;
      border-bottom: 1px solid #e8e8e8;
    }
  }
  .progress-bar {
    width: 100%;
    position: absolute;
    bottom: -5px;
  }
}
.upload-action {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: #e8e8e8;
}
.upload-title {
  padding: 20px;
  background: #e8e8e8;
  display: flex;
  justify-content: flex-start;
}
</style>
