<template>
<div>
  <file-upload
    ref="upload"
    :custom-action="postaction"
    extensions="gif,jpg,jpeg,png,webp"
    accept="image/png,image/gif,image/jpeg,image/webp"
    :multiple="true"
    :thread="3"
    v-model="files"
    @input-file="inputFile"
    @input-filter="inputFilter"
  >
  </file-upload>
  <button v-show="!$refs.upload || !$refs.upload.active" @click.prevent="$refs.upload.active = true" type="button">开始上传</button>
  <button v-show="$refs.upload && $refs.upload.active" @click.prevent="$refs.upload.active = false" type="button">停止上传</button>
</div>
</template>

<script>
import utils from '@/tool/utils.js'
import FileUpload from 'vue-upload-component/dist/vue-upload-component.part.js'
export default {
  components: {
    FileUpload
  },
  props: ['manager'],
  data: function () {
    return {
      files: []
    }
  },
  methods: {
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
        utils.uploadFile(uploadfiles, uploadfilenames, function () {
          console.log('end')
        })
      })
    }
  }
}
</script>

<style scoped>

</style>
