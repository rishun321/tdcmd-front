<template>
<div>
  <vue-headful title="ブドウさん - ホーム"/>
  <div class="segment">
    <md-card>
      <md-card-header>
        <div class="md-title">最近の連絡</div>
      </md-card-header>
      <md-card-content>
        <div class="md-layout md-gutter">
          <div class="md-layout-item md-size-25 md-medium-size-33 md-small-size-50 md-xsmall-size-100" v-for="contact in contacts" :key="contact._id">
            <contactCard :manager="manager" :contact="contact"/>
          </div>
        </div>
      </md-card-content>
    </md-card>
  </div>
  <div class="segment">
    <md-card>
      <md-card-header>
        <div class="md-title">売却中物件</div>
      </md-card-header>
      <md-card-content>
        <div class="md-layout md-gutter">
          <div class="md-layout-item md-size-25 md-medium-size-33 md-small-size-50 md-xsmall-size-100" v-for="request in requests" :key="request._id">
            <requestCard :manager="manager" :request="request"/>
          </div>
        </div>
      </md-card-content>
    </md-card>
  </div>
  <div class="segment">
    <md-card>
      <md-card-header>
        <div class="md-title">購入希望中物件</div>
      </md-card-header>
      <md-card-content>
        <div class="md-layout md-gutter">
          <div class="md-layout-item md-size-25 md-medium-size-33 md-small-size-50 md-xsmall-size-100" v-for="request in requests" :key="request._id">
            <requestCard :manager="manager" :request="request"/>
          </div>
        </div>
      </md-card-content>
    </md-card>
  </div>
  <div class="segment">
    <md-card>
      <md-card-header>
        <div class="md-title">貸出中物件</div>
      </md-card-header>
      <md-card-content>
        <div class="md-layout md-gutter">
          <div class="md-layout-item md-size-25 md-medium-size-33 md-small-size-50 md-xsmall-size-100" v-for="request in requests" :key="request._id">
            <requestCard :manager="manager" :request="request"/>
          </div>
        </div>
      </md-card-content>
    </md-card>
  </div>
  <div class="segment">
    <md-card>
      <md-card-header>
        <div class="md-title">借入希望中物件</div>
      </md-card-header>
      <md-card-content>
        <div class="md-layout md-gutter">
          <div class="md-layout-item md-size-25 md-medium-size-33 md-small-size-50 md-xsmall-size-100" v-for="request in requests" :key="request._id">
            <requestCard :manager="manager" :request="request"/>
          </div>
        </div>
      </md-card-content>
    </md-card>
  </div>
</div>
</template>

<script>
import utils from '@/tool/utils.js'
import contactCard from '../contact/contactCard'
import requestCard from '../estate/sell/requestCard'
export default {
  props: ['manager'],
  components: {
    contactCard,
    requestCard
  },
  data: () => ({
    requests: [
      {_id: '1', name: 'ロマンチックアップル', text: '都内2000万円、シングル部屋'},
      {_id: '2', name: 'リリナー', text: '投資用マーション、中古'},
      {_id: '3', name: '田中竜', text: '3階建一軒家、新築'},
      {_id: '4', name: '中田龍', text: '5000万以内であれば、なんでもいい'}
    ],
    contacts: [
      {_id: '1', name: '田中竜', text: 'ABC屋'},
      {_id: '2', name: '田中竜 ', text: '未来不動産'},
      {_id: '3', name: '田中竜', text: '新希望不動産'},
      {_id: '4', name: '中田龍', text: '学生寮専門店'}
    ]
  }),
  methods: {
    test () {
      utils.restGet('/api/getData', {something: 'testdata'}).then(
        response => {
          console.log(JSON.stringify(response))
        }
      )
    },
    test2 () {
      utils.restPost('/api/postData', {something: 'test2data'}).then(
        response => {
          console.log(JSON.stringify(response))
        }
      )
    },
    test3 () {
      utils.restPut('/api/putData', {something: 'test3data'}).then(
        response => {
          console.log(JSON.stringify(response))
        }
      )
    },
    test4 () {
      utils.restDelete('/api/deleteData', {something: 'test4data'}).then(
        response => {
          console.log(JSON.stringify(response))
        }
      )
    }
  }
}
</script>

<style scoped>
.segment {
  margin: 10px 0px;
}
.md-layout-item {
  margin-bottom: 10px;
}
</style>
