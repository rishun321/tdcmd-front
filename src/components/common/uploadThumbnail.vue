<template>
<div class="upload-wrapper">
  <file-upload class="fileupload" ref="uploader" :custom-action="uploadAction" :accept="acceptFileType" :extensions="extensionFileType" :size="limitSize" :multiple="false" :thread="1" @input-filter="inputFilter" v-model="files"/>
  <div class="thumbnail-wrapper">
    <div class="thumbnail">
      <img :src="thumbnail">
    </div>
    <div class="thumbnail draggable" ref="draggable" @click="browse">
    </div>
  </div>
  <div class="action-wrapper">
    <div class="action">
      <md-button class="md-icon-button md-accent md-raised" @click="clear" v-show="this.files && this.files.length > 0"><md-icon>clear</md-icon></md-button>
      <md-button class="md-icon-button md-accent md-raised" @click="browse"><md-icon>folder_open</md-icon></md-button>
    </div>
  </div>
  <md-progress-bar md-mode="buffer" :md-value="progress" :md-buffer="100"></md-progress-bar>
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
    preview: {
      type: String,
      default: '/static/noimage.png'
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
    acceptFileType: 'image/png, image/jpeg, image/tiff, image/x-tiff, image/svg+xml, image/bmp, image/x-bmp, image/x-ms-bmp, image/gif',
    extensionFileType: 'jpg, jpeg, png, tif, tiff, svg, bmp, gif',
    limitSize: 1024 * 1024 * 2,
    next: null
  }),
  computed: {
    thumbnail () {
      if (this.files && this.files.length > 0) return this.files[0].thumbnail
      if (this.preview != null && this.preview !== '') return this.preview
      return '/static/noimage.png'
    },
    progress () {
      if (!this.files || this.files.length <= 0) return 0
      else return this.files[0].progress
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
    inputFilter (newFile, oldFile, prevent) {
      if (newFile && !oldFile) {
        if (/(\/|^)(Thumbs\.db|desktop\.ini|\..+)$/.test(newFile.name)) {
          return prevent()
        }
        if (newFile && (!oldFile || newFile.file !== oldFile.file)) {
          if (newFile.size > this.limitSize) {
            utils.event.$emit('SHOW_MESSAGE', {code: 'B005', detail: 'ファイルサイズを' + utils.formatSize(this.limitSize) + '以内にしてください。'})
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
    uploadAction (file, component) {
      let that = this
      let options = {withoutThumbnail: true}
      if (this.subFolder) {
        options.subFolder = this.subFolder
      }
      return new Promise(async (resolve, reject) => {
        utils.event.$emit('LOCK_SCREEN', 'lock')
        await utils.uploadFile(file, options).then((response) => {
          if (response && response[0]) {
            if (that.next !== null) {
              that.next(response[0].file)
            }
          }
          that.clear()
          that.next = null
          utils.event.$emit('LOCK_SCREEN', 'unlock')
        })
      })
    },
    upload (next) {
      if (this.files && this.files.length > 0) {
        this.next = next || null
        this.$refs.uploader.active = true
      } else {
        if (next !== null) {
          next(null)
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
  position: relative;
}
.fileupload {
  display: none;
}
.thumbnail-wrapper {
  width: 100%;
  padding-top: 100%;
  overflow: hidden;
  position: relative;
}
.thumbnail {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-width: 100%;
    max-height: 100%;
  }
}
.draggable {
  border: 1px solid #e8e8e8;
  border-style: dashed;
}
.action-wrapper {
  position: absolute;
  bottom: 5px;
  right: 0;
}
.action {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .md-button {
    margin: 5px;
  }
}
</style>
