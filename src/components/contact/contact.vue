<template>
<div class="full-screen">
  <vue-headful title="ブドウさん - 連絡帳"/>
  <md-table style="height: 100%;" v-model="searched" md-sort="_id" md-sort-order="asc" md-card md-fixed-header @md-selected="onSelect">
    <md-table-toolbar>
      <div class="md-toolbar-section-start">
        <div class="title-content">
          <h1 class="md-title">連絡先</h1>
          <md-button class="md-icon-button md-accent md-raised" @click="findUser">
            <md-icon>person_add</md-icon>
          </md-button>
        </div>
      </div>

      <md-field md-clearable class="md-toolbar-section-end">
        <md-input placeholder="Search ..." v-model="search" @input="searchOnTable" />
      </md-field>
    </md-table-toolbar>

    <md-table-empty-state
      md-label="見つかりませんでした。"
      :md-description="`あなたの連絡帳に'${search}'にヒットするアカウントが見つかりませんでした。新たに登録しますか？`">
      <md-button class="md-primary md-raised" @click="findUser">探す</md-button>
    </md-table-empty-state>

    <md-table-row slot="md-table-row" slot-scope="{item}" md-selectable="single">
      <md-table-cell md-label="">
        <md-avatar>
          <img :src="item.avatar" alt="Avatar">
        </md-avatar>
      </md-table-cell>
      <md-table-cell md-label="アカウント" md-sort-by="_id">{{item._id}}</md-table-cell>
      <md-table-cell md-label="ニックネーム" md-sort-by="nickname">{{item.nickname}}</md-table-cell>
      <md-table-cell md-label="会社" md-sort-by="company">{{item.company}}</md-table-cell>
      <md-table-cell md-label="電話番号" md-sort-by="phone">{{item.phone}}</md-table-cell>
      <md-table-cell md-label="コメント" md-sort-by="comment">{{item.comment}}</md-table-cell>
    </md-table-row>
  </md-table>
  <contactDialog :manager="manager"/>
</div>
</template>

<script>
import contactDialog from './contactDialog'
import utils from '@/tool/utils.js'
export default {
  props: ['manager'],
  components: {
    contactDialog
  },
  data: () => ({
    search: null,
    searched: [],
    users: [
      {
        avatar: '../../../static/user.jpg',
        _id: 'vv',
        nickname: '田中　祐一',
        company: '未来夢株式会社',
        phone: '08099997777',
        comment: '頑張ります！'
      },
      {
        avatar: '../../../static/user.jpg',
        _id: 'bb',
        nickname: '小村　寛人',
        company: 'カプコン',
        phone: '08099997777',
        comment: '売り尽くします！'
      },
      {
        avatar: '../../../static/user.jpg',
        _id: 'aa',
        nickname: 'エリサベト　カテリラ',
        company: 'スクエアエニックス',
        phone: '08099997777',
        comment: '働きます！'
      },
      {
        avatar: '../../../static/user.jpg',
        _id: 'cc',
        nickname: '田中　助っ人',
        company: 'IBM',
        phone: '08099997777',
        comment: 'えっ！？'
      },
      {
        avatar: '../../../static/user.jpg',
        _id: 'qoo',
        nickname: 'Thatcher Stave',
        company: 'Micro Soft',
        phone: '08099997777',
        comment: ''
      },
      {
        avatar: '../../../static/user.jpg',
        _id: 'buuu',
        nickname: 'Karim Chipping',
        company: '未来夢株式会社',
        phone: '08099997777',
        comment: ''
      },
      {
        avatar: '../../../static/user.jpg',
        _id: 'kero',
        nickname: '佐助',
        company: '未来夢株式会社',
        phone: '08099997777',
        comment: '途切れないようにしようぜ！'
      },
      {
        avatar: '../../../static/user.jpg',
        _id: 'ninja',
        nickname: 'フルル',
        company: '未来夢株式会社',
        phone: '08099997777',
        comment: ''
      },
      {
        avatar: '../../../static/user.jpg',
        _id: 'miko',
        nickname: 'ガベリオ',
        company: '未来夢株式会社',
        phone: '08099997777',
        comment: '途切れた。。。'
      },
      {
        avatar: '../../../static/user.jpg',
        _id: 'ten',
        nickname: '信長',
        company: 'NTT',
        phone: '08099997777',
        comment: 'おっ、おう'
      },
      {
        avatar: '../../../static/user.jpg',
        _id: 'bus',
        nickname: 'Cybill Rimington',
        company: '未来夢株式会社',
        phone: '08099997777',
        comment: 'じゃ〜長いコメントをつけて、途切れないように繋げていきましょう！'
      },
      {
        avatar: '../../../static/user.jpg',
        _id: 'loki',
        nickname: '井上',
        company: 'Bust group',
        phone: '08099997777',
        comment: ''
      },
      {
        avatar: '../../../static/user.jpg',
        _id: 't44t',
        nickname: 'ガスト',
        company: '未来夢株式会社',
        phone: '08099997777',
        comment: ''
      },
      {
        avatar: '../../../static/user.jpg',
        _id: '3ff',
        nickname: 'リナ',
        company: 'ななこ株式会社',
        phone: '08099997777',
        comment: ''
      },
      {
        avatar: '../../../static/user.jpg',
        _id: 'sdffff',
        nickname: 'Ingar Raggles',
        company: '未来夢株式会社',
        phone: '08099997777',
        comment: ''
      },
      {
        avatar: '../../../static/user.jpg',
        _id: '1407',
        nickname: 'レベーカ',
        company: '未来夢株式会社',
        phone: '08099997777',
        comment: 'まあ、いいや'
      },
      {
        avatar: '../../../static/user.jpg',
        _id: '9087',
        nickname: 'Salome Judron',
        company: 'IBM',
        phone: '08099997777',
        comment: ''
      },
      {
        avatar: '../../../static/user.jpg',
        _id: 'itit',
        nickname: '田中　トトロ',
        company: 'Micro Soft',
        phone: '08099997777',
        comment: ''
      },
      {
        avatar: '../../../static/user.jpg',
        _id: 'rrsrr',
        nickname: '遠藤　冴え',
        company: 'King Stone',
        phone: '08099997777',
        comment: ''
      },
      {
        avatar: '../../../static/user.jpg',
        _id: 'sdf',
        nickname: '御手洗　遊助',
        company: 'IBM',
        phone: '08099997777',
        comment: 'おしまいです〜'
      }
    ]
  }),
  created () {
    this.searched = this.users
  },
  methods: {
    findUser () {
      console.log('find')
    },
    onSelect (user) {
      if (!user) {
        return
      }
      utils.event.$emit('SHOW_CONTACT', user)
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
            if (user.company.toString().toLowerCase().includes(this.search.toString().toLowerCase())) {
              return true
            }
            return false
          }
        )
      } else {
        this.searched = this.users
      }
    }
  }
}
</script>

<style scoped>
.full-screen {
  width: 100%;
  height: 100%;
}
.title-content {
  display: flex;
  align-items: center;
}
.md-title {
  margin-right: 20px;
}
.md-field {
  max-width: 300px;
}
</style>
