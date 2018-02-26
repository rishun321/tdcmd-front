<template>
<div class="uploader-warper">
  <label class="thumb-label" :for="name">
    <div class="thumb" :style="background"></div>
  </label>
  <file-upload
    class="fileupload"
    ref="upload"
    :name="name"
    :custom-action="postaction"
    :extensions="extensions"
    :accept="accept"
    :multiple="false"
    :thread="3"
    v-model="files"
    @input-file="inputFile"
    @input-filter="inputFilter"
  >
  </file-upload>
  <button v-show="showUploadButton && (!$refs.upload || !$refs.upload.active)" @click.prevent="$refs.upload.active = true" type="button">开始上传</button>
  <button v-show="showUploadButton && $refs.upload && $refs.upload.active" @click.prevent="$refs.upload.active = false" type="button">停止上传</button>
</div>
</template>

<script>
import utils from '@/tool/utils.js'
import FileUpload from 'vue-upload-component/dist/vue-upload-component.part.js'
export default {
  components: {
    FileUpload
  },
  props: {
    manager: {
      default: 'manager'
    },
    name: {
      type: String,
      default: 'file'
    },

    customSendAction: {
      type: Function
    },

    onSendCompleted: {
      type: Function,
      default: null
    },

    onError: {
      type: Function
    },

    showUploadButton: {
      type: Boolean,
      default: false
    },

    defaultBackGroundImage: {
      type: String,
      default: 'static/avatar.png'
    },

    upload: {
      type: Boolean,
      default: false
    }
  },
  data: function () {
    return {
      files: [],
      extensions: [],
      accept: '',
      isShowUploadButton: true
    }
  },
  watch: {
    upload (upload) {
      this.watchUpload(upload)
    },
    showUploadButton (showUploadButton) {
      this.watchShowUploadButton(showUploadButton)
    }
  },
  computed: {
    background () {
      console.log(this.files.length)
      let backgroundimg = this.defaultBackGroundImage
      if (this.files.length === 1) {
        backgroundimg = this.files[0].thumb
      }
      console.log(backgroundimg)
      return 'background-image:url(' + backgroundimg + ');'
    }
  },
  methods: {
    watchShowUploadButton (isShowUploadButton) {
      this.isShowUploadButton = isShowUploadButton
    },
    watchUpload (isUpload) {
      let that = this
      if (isUpload) {
        that.startUpload()
      } else {
        that.stopUpload()
      }
    },
    startUpload () {
      if (this.upload.active !== true) {
        this.upload.active = true
      }
    },
    stopUpload () {
      if (this.upload.active !== false) {
        this.upload.active = false
      }
    },
    setAcceptType (acceptType, extension) {
      this.accept = this.accept + ',' + acceptType
      this.extensions.pusl(extension)
    },
    inputFilter (newFile, oldFile, prevent) {
      if (newFile && !oldFile) {
        // Before adding a file
        // 添加文件前
        // Filter system files or hide files
        // 过滤系统文件 和隐藏文件
        if (/(\/|^)(Thumbs\.db|desktop\.ini|\..+)$/.test(newFile.name)) {
          return prevent()
        }
        // Filter php html js file
        // 过滤 php html js 文件
        if (/\.(php5?|html?|jsx?)$/i.test(newFile.name)) {
          return prevent()
        }

        if (newFile && (!oldFile || newFile.file !== oldFile.file)) {
          // Create a blob field
          // 创建 blob 字段
          newFile.blob = ''
          let URL = window.URL || window.webkitURL
          if (URL && URL.createObjectURL) {
            newFile.blob = URL.createObjectURL(newFile.file)
          }
          // Thumbnails
          // 缩略图
          newFile.thumb = ''
          if (newFile.blob && newFile.type.substr(0, 6) === 'image/') {
            newFile.thumb = newFile.blob
          }
        }
      }
    },
    inputFile (newFile, oldFile) {
      if (newFile && !oldFile) {
        // add
        console.log('add', newFile)
      }
      if (newFile && oldFile) {
        // update
        console.log('update', newFile)
      }
      if (!newFile && oldFile) {
        // remove
        console.log('remove', oldFile)
      }
    },
    postaction: function (files, component) {
      console.log('postaction')
      console.log(files)

      let uploadfiles = []
      let uploadfilenames = []

      // for (let key in files) {
      //   let file = files[key]
      uploadfiles[uploadfiles.length] = files.file
      uploadfilenames[uploadfilenames.length] = files.name
      // }

      return new Promise((resolve, reject) => {
        utils.uploadFile(uploadfiles, uploadfilenames)
          .then(() => {
            console.log('end')
            console.log(this.onSendCompleted)
            console.log('onSendCompleted begin')
            if (this.onSendCompleted !== null) {
              console.log('onSendCompleted end')
              this.onSendCompleted(uploadfilenames)
            }
          })
      })
    },

    doUpload: function () {
      this.$refs.upload.active = true
    },

    getSelectedFile: function () {
      if (this.files.length > 0) {
        return this.files[0]
      } else {
        return null
      }
    }
  }
}
</script>

<style scoped>
.uploader-warper {
    width:100%;
    height:100%;
}
.fileupload {
    position: fixed;
    top:0px;
    visibility: hidden;
}
.thumb {
    background-size: cover;
    background-repeat: no-repeat;
    background-size: contain;
    /* background-attachment: fixed; */
    background-position: center;
    width:100%;
    height:100%;
}
.thumb-label {
    width:100%;
    height:100%;
}
</style>
