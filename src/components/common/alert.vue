<template>
  <div class="alert-wrapper">
    <div class="alert-inner" v-on:click="openChat(notification)">
      <div class="icon"><i class="material-icons">announcement</i></div>
      <div class="message">
        <p class="title" v-if="notification!=null">{{notification.from_name}}</p>
        <p class="text" v-if="notification!=null">
          {{notification.text}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import CONST from '@/store/const.js'
  import manager from '@/store/manager.js'
  import utils from '@/tool/utils.js'

  export default {
    data() {
      return {
        notification: null
      }
    },
    pros: ["manager"],
    mounted() {
      let self = this
      utils.event.$on('NEW_ALERT', (notification) => {
        self.notification = notification
        self.$nextTick(() => {
          if (!($('.alert-wrapper').hasClass('active'))) {
            $('.alert-wrapper').addClass('active')
            setTimeout(() => {
              if ($('.alert-wrapper').hasClass('active')) {
                $('.alert-wrapper').removeClass('active')
              }
            }, 3000)
          }
        })
      })
    },
    methods: {
      openChat(notification) {
        if (!notification) {
          return
        }
        utils.restPost(
          'api/removeNotification',
          {notification: notification._id}
        ).then(
          response => {
            if (response) {
              manager.readNotification(notification)
              if ($('.alert-wrapper').hasClass('active')) {
                $('.alert-wrapper').removeClass('active')
              }
            }
          }
        )
      }
    },
    beforeDestroy() {
      utils.event.$off('NEW_ALERT')
    }
  }
</script>

<style scoped lang="scss">
  .alert-wrapper {
    position: fixed;
    top: 59px;
    right: 0;
    padding: 0 20px 0 18px;
    width: 300px;
    background: #dd5066;
    border-radius: 5px;
    box-sizing: border-box;
    z-index: 95000;
    transform: translateX(300px);
    transition: all .4s;
    &.active {
      transform: translateX(-8px);
      transition: all .4s;
    }

    .alert-inner {
      display: flex;
      align-items: center;
      height: 65px;
      cursor: pointer;
      .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 0 0 auto;
        width: 30px;
        i {
          color: #fff;
          font-size: 27px;
        }
      }
      .message {
        flex: 1 1 auto;
        padding-left: 10px;
        width: calc(100% - 20px);
        p {
          color: #fff;
          line-height: 1.2;
        }
        .title {
          margin-bottom: 5px;
          font-size: 11px;
        }
        .text {
          height: 13px;
          font-size: 12px;
          width: 100%;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
      }
    }
  }

  /* responsive */
  @media (max-width: 768px) {
    .alert-wrapper {
      top: 50px;
    }
  }
  @media (max-width: 480px) {
    .alert-wrapper {
      padding: 0 15px;
      .alert-inner {
        height: 60px;
        .icon {
          display: flex;
          justify-content: center;
          align-items: center;
          flex: 0 0 auto;
          width: 25px;
          i {
            font-size: 25px;
          }
        }
        .message {
          padding-left: 12px;
          .text {
          }
        }
      }
    }
  }
</style>
