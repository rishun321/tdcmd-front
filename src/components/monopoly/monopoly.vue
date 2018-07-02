<template>
<div class="app-content-auto-height">
  <vue-headful title="サンダーコマンドス - 貸切"/>
  <div class="cover">
    <img src="/static/cover04.jpg">
  </div>

  <div class="contents">
    <p class="md-display-1 content-title">フィールド貸切</p>
    <p>チームの交流戦や親睦会、リーグ戦ゲーム、コスプレ撮影イベント、ショップのイベントなど、フィールドを自由にご利用いただけます。</p>
    <p>※二つのフィールドを提供しておりますので、それぞれの空き状況はカレンダーにてご確認ください。</p>
    <p>※貸切の場合、昼食サービスは行っておりません。</p>
    <p class="md-title content-title">フィールド一覧</p>
    <md-table>
      <md-table-row>
        <md-table-head>フィールド</md-table-head>
        <md-table-head>料金</md-table-head>
        <md-table-head>支払い</md-table-head>
      </md-table-row>

      <md-table-row>
        <md-table-cell>Aフィール</md-table-cell>
        <md-table-cell>貸切基本料金 60,000円（20名様まで、1人様増すごとに3000円追加）</md-table-cell>
        <md-table-cell>・「貸切基本料金 60,000円」は銀行振込制となります。（振込手数料はお客様が負担します。）<br>・20名様が超える分の追加料金とレンタル料金は、代表者の方で当日受付で現金払いお願いします。</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>Bフィール</md-table-cell>
        <md-table-cell>貸切基本料金 30,000円（10名様まで、1人様増すごとに3000円追加）</md-table-cell>
        <md-table-cell>・「貸切基本料金 30,000円」は銀行振込制となります。（振込手数料はお客様が負担します。）<br>・10名様が超える分の追加料金とレンタル料金は、代表者の方で当日受付で現金払いお願いします。</md-table-cell>
      </md-table-row>
    </md-table>
    <p class="md-title content-title">ご利用時間</p>
    <p>・夏：9：10～17：10（4月-10月）</p>
    <p>・冬：9：10～16：10（11月-3月）</p>
    <p class="md-title content-title">注意事項</p>
    <p class="md-headline">キャンセルの場合</p>
    <p>予約日14日前までの場合、キャンセル料金は発生致しません。</p>
    <p>（例：予約日が日曜日の場合、2週前の日曜日23：59まで。予約料金のお返しは客様の口座にお振込致します。振込手数料はキャンセルのお客様が負担致します。）</p>
    <p>予約日13日前から3日前までの場合、基本料金の半額がキャンセル料金として発生致します。</p>
    <p>（例：日曜日で貸切予約の場合、木曜日23：59まで。キャンセル料金は15,000円となります。残り15,000円の部分は振込でお返し致します。振込手数料はキャンセルのお客様が負担致します。）</p>
    <p>予約日3日前から基本料金の金額がキャンセル料金として発生致します。</p>
    <p>（例：日曜日貸切予約の場合、金曜日00：00から、キャンセル料金30,000円となります。）</p>
    <p class="md-headline">雨、嵐、台風の天気の場合</p>
    <p>＜天候による中止の場合がございます、料金返済やゲームの延期が可能です、具体的ご相談ください＞</p>
    <p>前日16時の段階で「日本気象協会」に記載されている翌日袖ケ浦の降水確率が06-12時、または12-18時どちらかで50％以上の場合、キャンセル料金はかかりません。</p>
    <p>降水確率50％未満だが実際に当日午前7時の時点で降っていた場合もキャンセル料金はかかりません。或いは、貸切を延期にして、他の日付（予約なし）に変更することが可能です。具体的メール或いはお電話でご相談ください。</p>
    <p>お申込みの際は十分ご注意ください。</p>
    <p class="md-title content-title">貸切応援サービス</p>
    <div class="md-layout md-gutter">
      <div class="md-layout-item md-size-70 md-small-size-100">
        <p>貸切のお客様にはバーベキューのコンロ、炭を無料提供致します。食材に関しましてはお客様ご自身でのご準備をお願い致しております。</p>
        <p>「貸切割引券」や「サービス券」をお持ちのお客様は、当日受付スタッフにお渡しすると、各種サービスが受けられます。</p>
        <p>貸切の場合、フィールドでの昼食サービスは行なっておりませんが、スタッフがお弁当の買出しをすることは可能です。あらかじめご予約の際にご相談下さい。（要予約）</p>
        <p>大統領救出戦、人質解放戦などのゲームついて、スタッフが共演することはご相談が可能です。</p>
      </div>
      <div class="md-layout-item md-size-30 md-small-size-100">
        <img src="/static/bbq.jpg">
      </div>
    </div>
    <p class="md-title content-title">予約〜当日までの流れ</p>
    <md-steppers>
      <md-step id="first" md-label="申込">
        <p>当日7日前まで、貸切予約フォームにてお申し込みください。</p>
        <p>運営より予約内容の確認及び貸切料金の振込情報をお送り致します。</p>
      </md-step>
      <md-step id="second" md-label="貸切料金支払">
        <p>「貸切基本料金」を振込していただき、運営より振込済みの連絡を致します。</p>
      </md-step>
      <md-step id="third" md-label="最終確認">
        <p>ご予約日の前日に運営よりお電話致します。</p>
        <p>※お電話できないお客様はご予約前日20：00まで、メールで担当者へお知らせください。</p>
      </md-step>
      <md-step id="fourth" md-label="ご利用">
        <p>当日にご来場いただき、フィールド受付にて利用人数の確認、レンタル品の支給を致します。</p>
      </md-step>
    </md-steppers>
    <div class="actions">
      <md-button class="md-primary md-raised" to="/reserve">予約</md-button>
    </div>
  </div>
</div>
</template>

<script>
// import utils from '@/tool/utils.js'
export default {
  props: ['manager']
}
</script>

<style scoped lang="scss">
.cover {
  width: 100%;
  height: auto;
  text-align: center;
  img {
    width: 100%;
    height: 100%;
  }
}
.content-title {
  text-align: center;
}
.contents {
  padding: 16px;
}
.md-title {
  text-align: center;
}
.actions {
  display: flex;
  justify-content: center;
  margin-bottom: 120px;
}
</style>
