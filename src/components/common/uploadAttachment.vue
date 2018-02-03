<template>
  <div>
    <input :id="id" type="file" class="file" multiple></input>
  </div>
</template>

<script>
  import CONST from '@/store/const.js'
  import manager from '@/store/manager.js'
  import utils from '@/tool/utils.js'

  import uuid from 'uuid'
  export default {
    props: ['manager'],
    data() {
      return {
        id: uuid.v4(),
        next: null,
        error: null
      }
    },
    mounted() {
      let self = this
      let uploadUrl = ''
      if (manager.controller.cors) {
        uploadUrl = CONST.developHost
      }
      else {
        uploadUrl = '/'
      }
      uploadUrl += 'uploadFiles'
      $('#' + self.id).fileinput(
        {
          uploadUrl: uploadUrl,
          // allowedFileExtensions : null,
          // overwriteInitial: false,
          maxFilesNum: 20,
          maxFileSize: 8000000,
          // previewFileType: 'any',
          showCaption: true,
          showUpload: false,
          // showRemove: false,
          showCancel: false,
          showClose: false,
          showBrowse: true,
          showPreview: false,
          browseOnZoneClick: false,
          // removeFromPreviewOnError: false,
          // previewFileIcon: '<i class="fa fa-file"></i>',
          browseIcon: '<i class="fa fa-paperclip"></i>',
          browseLabel: 'Attachment',
          browseClass: 'btn btn-default',
          removeIcon: '<i class="fa fa-chain-broken"></i>',
          removeLabel: 'Clear',
          removeClass: 'btn btn-default',
          cancelIcon: '<i class="fa fa-ban"></i>',
          cancelClass: 'btn btn-default',
          uploadIcon: '<i class="fa fa-upload"></i>',
          uploadClass: 'btn btn-default',
          // msgValidationErrorIcon: '<i class="fa fa-info-circle"></i>',
          fileActionSettings: {
            showRemove: true,
            removeIcon: '<i class="fa fa-trash"></i>',
            showUpload: false,
            uploadIcon: '<i class="fa fa-upload"></i>',
            showZoom: false,
            indicatorNew: ''
          },
          // slugCallback: (filename) => {
          //   return filename.replace('(', '_').replace(']', '_')
          // },
          uploadAsync: false
        }
      )
      $('#' + self.id).on('filebatchuploadsuccess', (event, data, previewId, index) => {
        utils.event.$emit('LOCK_SCREEN', 'unlock')
        let form = data.form, files = data.files, extra = data.extra, response = data.response, reader = data.reader
        if (!response.error) {
          if (self.next) {
            self.next(response.data)
            self.next = null
            self.error = null
          }
        }
        else {
          utils.event.$emit('SHOW_MESSAGE', response.error)
          if (self.error) {
            self.error()
            self.next = null
            self.error = null
          }
        }
        this.$nextTick(function (){
          $('#' + self.id).fileinput('clear')
        })
      })
      // $('#' + self.id).on('fileuploaded', (event, data, previewId, index) => {
      // })
      // $('#' + self.id).on('fileuploaderror', (event, numFiles, label) => {
      // })
      $('#' + self.id).on('filebatchuploaderror', (event, numFiles, label) => {
        utils.event.$emit('LOCK_SCREEN', 'unlock')
        $('#' + self.id).fileinput('clear')
        utils.event.$emit('SHOW_MESSAGE', 'S006')
        if (self.error) {
          self.error()
          self.next = null
          self.error = null
        }
      })
    },
    methods: {
      trigger(next, error) {
        let self = this
        if ($('#' + self.id).fileinput('getFilesCount') > 0) {
          if (next) {
            self.next = next
          }
          else {
            self.next = null
          }
          if (error) {
            self.error = error
          }
          else {
            self.error = null
          }
          utils.event.$emit('LOCK_SCREEN', 'lock')
          $('#' + self.id).fileinput('upload')
        }
        else {
          if (next) {
            next([])
          }
        }
      },
      fileClear() {
        let self = this
        $('#' + self.id).fileinput('clear')
      }
    }
  }
</script>

<style lang="scss">
  .content-chat {
    .input-file {
      .form-control {
        padding: 6px 12px 0;
        height: 30px;
        font-size: 12px;
        background: #fafafa;
        &:focus {
          border-color: rgba(#6369D4, 0.4);
        }
      }
      .input-group-btn .btn {
        padding: 4px 10px 0;
        height: 30px;
      }
      .hidden-xs {
        display: none;
      }
    }
    .fileinput-remove {
      i {
        position: relative;
        top: -1px;
      }
    }
    .btn-file {
      i {
        position: relative;
        top: 1px;
        font-size: 15px;
      }
    }
  }
  .modal-footer {
    .input-file {
      .hidden-xs {
        display: none;
      }
    }
    .btn+.btn {
      margin-left: -1px;
    }
  }
  .file-caption-icon {
    display: none !important;
  }
  .file-caption.icon-visible {
    .file-caption-name {
      padding-left: 0;
    }
  }
  @media (max-width: 480px) {
    .content-chat {
      .input-file {
        .form-control {
          height: 30px;
        }
        .input-group-btn .btn {
          padding: 4px 10px 0;
          height: 30px;
        }
      }
    }
    .btn-file {
      i {
        top: 1px;
      }
    }
  }
</style>
