<template>
  <div class="feedback-wrapper">
    <div class="feedback-inner">
      <div class="feedback-button" v-on:click="feedbackToggle()">
        <i class="material-icons">mail</i>
        <span>Feedback</span>
      </div>
      <div class="feedback-form">
        <div class="feedback-body">
          <textarea v-model="content" type="text" rows="3" placeholder="Type Feedback ..." class="form-control"></textarea>
        </div>
        <div class="feedback-footer">
          <button type="button" v-on:click="feedbackToggle()" class="btn btn-close">
            Close
          </button>
          <button type="button" v-on:click="submitFeedback()" class="btn btn-submit" :disabled="content == ''" data-dismiss="modal">
            Submit
          </button>
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
    pros: ["manager"],
    data() {
      return {
        content: ''
      }
    },
    methods: {
      feedbackToggle() {
        let wrapper = $('.feedback-wrapper')
        if (wrapper.hasClass('active')) {
          wrapper.removeClass('active')
        } else {
          wrapper.addClass('active')
        }
      },
      submitFeedback() {
        let self = this
        let feedback = {}
        feedback.app = manager.controller.currentApp
        feedback.content = this.content
        feedback.cuser = manager.user._id
        feedback.uuser = manager.user._id

        this.feedbackToggle()
        utils.restPost('/api/insertFeedback', feedback).then(
          response => {
            utils.event.$emit('SHOW_MESSAGE', 'B007')
            self.content = ''
          }
        )
      }
    }
  }
</script>

<style scoped>
  .feedback-wrapper {
    position: fixed;
    right: 0;
    bottom: 70px;
    width: 335px;
    z-index: 90000;
    transform: translateX(335px);
    transition: all .2s;
  }
  .feedback-wrapper.active {
    transform: translateX(0);
  }
  .feedback-inner {
    position: relative;
  }
  .feedback-button {
    position: absolute;
    top: 0;
    left: -65px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
    width: 65px;
    height: 65px;
    color: #fff;
    font-size: 11px;
    font-weight: 100;
    background: #ED4163;
    border-radius: 10px 0 0 10px;
    transition: 0.1s;
    cursor: pointer;
    opacity: 0.4;
    overflow: hidden;
  }
  .active .feedback-button,
  .feedback-button:hover {
    opacity: 1;
  }
  .feedback-form {
    flex: 1 1 auto;
    background: #bbb;
  }
  .feedback-form .feedback-body {
    padding: 15px 13px 15px 15px;
  }
  .feedback-form .feedback-footer {
    display: flex;
    justify-content: flex-end;
    background: #2d2d2d;
  }
  .feedback-form textarea {
    padding: 12px 15px;
    height: 130px;
    font-weight: 100;
    border: none;
    resize: none;
  }
  .feedback-form textarea:placeholder-shown {
    font-size: 13px;
  }
  .feedback-form button {
    width: 50%;
    color: #fff;
    border-radius: 0;
  }
  .feedback-form button:focus {
    outline: none;
  }
  .feedback-form button.btn-submit {
    background: #6369D4;
  }
  .feedback-form button.btn-close {
    background: #3e3e3e;
  }

  /* responsive */
  @media (max-width: 767px) {
    .feedback-wrapper {
      display: none;
    }
  }
  @media (max-width: 480px) {
    .feedback-wrapper {
      width: 300px;
      transform: translateX(300px);
    }
  }
</style>
