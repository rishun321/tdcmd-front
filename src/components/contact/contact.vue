<template>
<div class="full-screen">
  <vue-headful title="ブドウさん - 連絡先"/>
  <md-table style="height: 100%;" v-model="searched" md-sort="_id" md-sort-order="asc" md-card md-fixed-header @md-selected="onSelect">
    <md-table-toolbar>
      <div class="md-toolbar-section-start">
        <h1 class="md-title">連絡先</h1>
      </div>

      <md-field md-clearable class="md-toolbar-section-end">
        <md-input placeholder="Search ..." v-model="search" @input="searchOnTable" />
      </md-field>
    </md-table-toolbar>

    <md-table-empty-state
      md-label="No users found"
      :md-description="`No user found for this '${search}' query. Try a different search term or create a new user.`">
      <md-button class="md-primary md-raised" @click="newUser">探す</md-button>
    </md-table-empty-state>

    <md-table-row slot="md-table-row" slot-scope="{item}" md-selectable="single">
      <md-table-cell md-label="">
        <md-avatar>
          <img :src="item.avatar" alt="Avatar">
        </md-avatar>
      </md-table-cell>
      <md-table-cell md-label="アカウント" md-sort-by="_id">{{item._id}}</md-table-cell>
      <md-table-cell md-label="ニックネーム" md-sort-by="nickname">{{item.nickname}}</md-table-cell>
      <md-table-cell md-label="Email" md-sort-by="email">{{item.email}}</md-table-cell>
      <md-table-cell md-label="Gender" md-sort-by="gender">{{item.gender}}</md-table-cell>
      <md-table-cell md-label="Job Title" md-sort-by="title">{{item.title}}</md-table-cell>
    </md-table-row>
  </md-table>
</div>
</template>

<script>
export default {
  props: ['manager'],
  data: () => ({
    search: null,
    searched: [],
    users: [
      {
        avatar: '../../../static/user.jpg',
        _id: 'vv',
        nickname: '田中　祐一',
        email: 'sdubbin0@geocities.com',
        gender: 'Male',
        title: 'Assistant Media Planner'
      },
      {
        avatar: '../../../static/user.jpg',
        _id: 'bb',
        nickname: '小村　寛人',
        email: 'odemageard1@spotify.com',
        gender: 'Female',
        title: 'Account Coordinator'
      },
      {
        avatar: '../../../static/user.jpg',
        _id: 'aa',
        nickname: 'エリサベト　カテリラ',
        email: 'vtaleworth2@google.ca',
        gender: 'Male',
        title: 'Community Outreach Specialist'
      },
      {
        avatar: '../../../static/user.jpg',
        _id: 'cc',
        nickname: '田中　助っ人',
        email: 'lizkovitz3@youtu.be',
        gender: 'Female',
        title: 'Operator'
      },
      {
        avatar: '../../../static/user.jpg',
        _id: 'tt',
        nickname: 'Thatcher Stave',
        email: 'tstave4@reference.com',
        gender: 'Male',
        title: 'Software Test Engineer III'
      },
      {
        avatar: '../../../static/user.jpg',
        _id: 'tt',
        nickname: 'Karim Chipping',
        email: 'kchipping5@scribd.com',
        gender: 'Female',
        title: 'Safety Technician II'
      },
      {
        avatar: '../../../static/user.jpg',
        _id: 'tt',
        nickname: 'Helge Holyard',
        email: 'hholyard6@howstuffworks.com',
        gender: 'Female',
        title: 'Internal Auditor'
      },
      {
        avatar: '../../../static/user.jpg',
        _id: 'tt',
        nickname: 'Rod Titterton',
        email: 'rtitterton7@nydailynews.com',
        gender: 'Male',
        title: 'Technical Writer'
      },
      {
        avatar: '../../../static/user.jpg',
        _id: 'tt',
        nickname: 'Gawen Applewhite',
        email: 'gapplewhite8@reverbnation.com',
        gender: 'Female',
        title: 'GIS Technical Architect'
      },
      {
        avatar: '../../../static/user.jpg',
        _id: 'tt',
        nickname: 'Nero Mulgrew',
        email: 'nmulgrew9@plala.or.jp',
        gender: 'Female',
        title: 'Staff Scientist'
      },
      {
        avatar: '../../../static/user.jpg',
        _id: 'tt',
        nickname: 'Cybill Rimington',
        email: 'crimingtona@usnews.com',
        gender: 'Female',
        title: 'Assistant Professor'
      },
      {
        avatar: '../../../static/user.jpg',
        _id: 'tt',
        nickname: 'Maureene Eggleson',
        email: 'megglesonb@elpais.com',
        gender: 'Male',
        title: 'Recruiting Manager'
      },
      {
        avatar: '../../../static/user.jpg',
        _id: 'tt',
        nickname: 'Cortney Caulket',
        email: 'ccaulketc@cbsnews.com',
        gender: 'Male',
        title: 'Safety Technician IV'
      },
      {
        avatar: '../../../static/user.jpg',
        _id: 'tt',
        nickname: 'Selig Swynfen',
        email: 'sswynfend@cpanel.net',
        gender: 'Female',
        title: 'Environmental Specialist'
      },
      {
        avatar: '../../../static/user.jpg',
        _id: 'tt',
        nickname: 'Ingar Raggles',
        email: 'iragglese@cbc.ca',
        gender: 'Female',
        title: 'VP Sales'
      },
      {
        avatar: '../../../static/user.jpg',
        _id: 'tt',
        nickname: 'Karmen Mines',
        email: 'kminesf@topsy.com',
        gender: 'Male',
        title: 'Administrative Officer'
      },
      {
        avatar: '../../../static/user.jpg',
        _id: 'tt',
        nickname: 'Salome Judron',
        email: 'sjudrong@jigsy.com',
        gender: 'Male',
        title: 'Staff Scientist'
      },
      {
        avatar: '../../../static/user.jpg',
        _id: 'tt',
        nickname: 'Clarinda Marieton',
        email: 'cmarietonh@theatlantic.com',
        gender: 'Male',
        title: 'Paralegal'
      },
      {
        avatar: '../../../static/user.jpg',
        _id: 'tt',
        nickname: 'Paxon Lotterington',
        email: 'plotteringtoni@netvibes.com',
        gender: 'Female',
        title: 'Marketing Assistant'
      },
      {
        avatar: '../../../static/user.jpg',
        _id: 'tt',
        nickname: 'Maura Thoms',
        email: 'mthomsj@webeden.co.uk',
        gender: 'Male',
        title: 'Actuary'
      }
    ]
  }),
  methods: {
    newUser () {
      window.alert('Noop')
    },
    onSelect (user) {
      if (!user) {
        return
      }
      console.log(user.nickname)
    },
    searchOnTable () {
      if (this.search) {
        this.searched = this.users.filter(
          (user) => {
            if (user._id.toString().toLowerCase().includes(this.search.toString().toLowerCase())) {
              return true
            }
            if (user.nickname.toString().toLowerCase().includes(this.search.toString().toLowerCase())) {
              return true
            }
            return false
          }
        )
      } else {
        this.searched = this.users
      }
    }
  },
  created () {
    this.searched = this.users
  }
}
</script>

<style scoped>
.full-screen {
  width: 100%;
  height: 100%;
}
.md-field {
  max-width: 300px;
}
</style>
