<template>
<div class="app-content-auto-height">
  <vue-headful title="サンダーコマンドス - 定例会"/>
  <div class="cover">
    <img src="/static/cover.jpg">
  </div>

  <div class="contents">
    <p class="md-display-1 content-title">定例会開催について</p>
    <p class="md-title content-title">毎週土曜日及び祝日に定例会を開催致します。2018年11月1日から、土日定例会や平日定例会は<span class="strong-color">予約優先制</span>となります。</p>
    <p class="md-body-1 content-title">（予約なしの方は、定例会に入場できますが、割引サービスは差し上げません）</p>
    <p>予約優先制とは、</p>
    <p>予約されている方へ下記のサービスを差し上げます。</p>

    <md-table>
      <md-table-row>
        <md-table-head></md-table-head>
        <md-table-head>予約あり</md-table-head>
        <md-table-head>予約なし</md-table-head>
      </md-table-row>

      <md-table-row>
        <md-table-cell>特別割引サービス券のご利用</md-table-cell>
        <md-table-cell>可</md-table-cell>
        <md-table-cell>不可</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>回数券カードのご購入</md-table-cell>
        <md-table-cell>可</md-table-cell>
        <md-table-cell>不可</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>先行予約サービス（一週前予約）<br>・土曜日定例会は先週土曜日12時まで<br>・日曜日定例会は先週日曜日12時まで</md-table-cell>
        <md-table-cell>参加費2500円</md-table-cell>
        <md-table-cell>なし</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>定例会通常に行える場合</md-table-cell>
        <md-table-cell>入場OK</md-table-cell>
        <md-table-cell>入場OK</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>定例会のMAX人数超える場合（駐車場や休憩所は当日に空いていない場合）</md-table-cell>
        <md-table-cell>入場OK</md-table-cell>
        <md-table-cell>入場NG</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>定例会中止になる場合</md-table-cell>
        <md-table-cell>メールにてご連絡を差し上げます。</md-table-cell>
        <md-table-cell>連絡はできません。</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>後半入場（14:00以降）</md-table-cell>
        <md-table-cell>参加費2000円<br>全ての割引券、サービス券のご利用はできません。</md-table-cell>
        <md-table-cell>参加費2000円<br>全ての割引券、サービス券のご利用はできません。</md-table-cell>
      </md-table-row>
    </md-table>

    <br>

    <md-chip class="md-primary">☆予約制！</md-chip>
    <md-chip class="md-primary">☆途中参加・退場OK！</md-chip>
    <md-chip class="md-primary">☆当日昼食受付OK！（11時まで）</md-chip>
    <md-chip class="md-primary">☆女性・初心者大歓迎！</md-chip>
    <md-chip class="md-primary">☆雨天決行！（大雨、台風、嵐の場合は中止）</md-chip>
    <p class="md-display-1 content-title">定例会詳細</p>
    <p class="md-headline">参加費及びお時間について</p>
    <p>1名様3,000円(税込)。昼食、各メニューも500円~1000円(税込゙)ご予約いただけます。</p>

    <md-table>
      <md-table-row>
        <md-table-head>定例会種類</md-table-head>
        <md-table-head>お時間</md-table-head>
        <md-table-head>参加費</md-table-head>
        <md-table-head>サービス券利用</md-table-head>
        <md-table-head>昼食</md-table-head>
        <md-table-head>途中休憩</md-table-head>
      </md-table-row>

      <md-table-row>
        <md-table-cell>通常定例会</md-table-cell>
        <md-table-cell>１０：００〜１７：００（１１月から３月までは１６：００時）</md-table-cell>
        <md-table-cell>3,000円（税込）</md-table-cell>
        <md-table-cell>OK</md-table-cell>
        <md-table-cell>500~1,000円（税込）</md-table-cell>
        <md-table-cell>約１時間</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>夕方定例会</md-table-cell>
        <md-table-cell>１５：００〜１９：００（２１時まで伸ばすことを検討中）</md-table-cell>
        <md-table-cell>3,000円（税込）</md-table-cell>
        <md-table-cell>OK</md-table-cell>
        <md-table-cell>なし</md-table-cell>
        <md-table-cell>なし</md-table-cell>
      </md-table-row>
    </md-table>

    <p class="md-headline">予約締切について</p>
    <p>土、日定例会は通常に毎週行います。（休み場合あり、カレンダーより）</p>
    <p>※土曜日の 通常定例会 及び 夕方定例会 の予約締切は木曜日12時まで（2日前）（7月17日から実施します）</p>
    <p>※日曜日の 通常定例会 及び 夕方定例会 の予約締切は金曜日12時まで（2日前）（7月17日から実施します）・火、水、木定例会は不定期です（カレンダーより）</p>
    <p>※平日定例会の予約締切はカレンダー掲示日より</p>
    <p class="md-headline">女性団体サービスについて</p>
    <p>5人以上の女性団体が予約する方々に特別な「一人分1000円offサービス」にします。</p>
    <p>※予約フォームでの予約限定です。予約フォームのコメントにて、全員のお名前を入力してください。</p>
    <p>※女性団体サービスを行う場合は、全てのサービス券は使えません。</p>
    <p class="md-headline">雨天決行について</p>
    <p>1、予約された方がいらっしゃいる時、当日午前中の10時までゲームを行える小雨レベルの場合は「雨天決行」です。</p>
    <p>※一日連続小雨の場合です。</p>
    <p>※10時前3時間以上連続雨、フィールド内は溜水がたくさんある場合です。</p>
    <p>2、雨天決行なら、全てのサービス券を使えずに、</p>
    <p>「予約された方」は、参加費の半額1500円となります。</p>
    <p>「予約されてない方」は、参加費2000円となります。</p>
    <p>※当日様子より、予約なしの方は参加できない場合もあります。</p>
    <p>3、10時以降、突然一時雨が降る場合（1時間未満）は雨天決行の半額サービスを行いません。</p>
    <p>※天気予報と関係なし、1時間未満の一時雨の場合です。</p>
    <p class="md-headline">定例会のキャンセルについて</p>
    <p>1、天気予報より2日前雨が降る報道がある場合は、メールにてキャンセルが可能です。</p>
    <p>※土曜日定例会は当週木曜日12時まで、受取ります。</p>
    <p>※日曜日定例会は当週金曜日12時まで、受取ります。</p>
    <p>※平日定例会は当週2日前12時まで、受取ります。（火曜日は先週日曜日12時まで）</p>
    <p>2、正当な理由がある場合は、メールにてご相談でキャンセルが可能です。</p>
    <p>※土曜日定例会は当週木曜日12時まで、受取ります。</p>
    <p>※日曜日定例会は当週金曜日12時まで、受取ります。</p>
    <p>※平日定例会は当週2日前12時まで、受取ります。（火曜日は先週日曜日12時まで）</p>
    <p>3、1日前及び定例会当日はドタキャン禁止です。（遅刻は大丈夫です。）</p>
    <p>※交通事故、病気になることではない場合は、ドタキャン禁止です。</p>
    <p>※急いで大変なことになりますと、予約フォームにて来られない理由をコメントください。（当日はお電話を受取れない場合があります）</p>
    <p class="md-headline">中止について</p>
    <p>1、天気予報より、及び当日は突然、嵐、大雨、台風、地震など客観的不可抗力のようなことがある場合は中止致します。</p>
    <p>2、当日はキャンセルされて、参加人数は足りない場合は中止致します。</p>
    <p>3、予約締切日に経ってから、参加人数は足りない場合は中止致します。</p>
    <p class="md-headline">フィールドでのマナーについて</p>
    <p>1、飲酒禁止です。</p>
    <p>2、ゴミは分類にして、各種類のゴミ箱やゴミ袋に入れってください。</p>
    <p>3、トイレはきれいに使ってください。トイレ以外の場所は排泄物にするなら、10万円の罰金となります。（子供にも同じです）</p>
    <p>4、休憩所は喫煙禁止です。</p>
    <p>5、休憩所で大きな騒音をしてください。周りの参加者と近所がいますので、他人に迷惑を掛けないでください。</p>
    <p>6、他人のお席に座ることは禁止です。もし、他人の荷物がなくなりますと、違う席に座る方は責任が負うかもしれません。</p>
    <p>※上記のマナーに違反する方は、状況より警察に通報することもあります。</p>
    <p>※他人に迷惑を掛ける方は、ブラックリストに入れることもあります。</p>
    <p class="md-headline">参加資格について</p>
    <p>男女問わず18歳以上</p>
    <p>※18歳未満は保護者の同意書を提出してください。</p>
    <p>※PDF形式のファイルをご覧いただくには、アドビシステムズ社から無償提供されているAdobe® Reader® プラグインが必要です。「Adobe® Acrobat®」でご覧になる場合は、バージョン10以降をご利用ください。（ダウンロード用PDF形式は作成中、現地で原本があります。）</p>
    <p class="md-headline">必要なものについて</p>
    <p>エアガン・ゴーグル（レンタル可）</p>
    <p class="md-headline">推奨する服装について</p>
    <p>長袖・長ズボン・運動できる靴（足首まであるものが好ましい）</p>
    <div class="actions">
      <md-button class="md-primary md-raised" to="/reserve">予約</md-button>
    </div>
    <p class="md-display-1 content-title">定例会ルール</p>
    <p>当フィールドは生分解バイオbb弾（0.25g以下）のみ使えます。
    <br>それ以外のbb弾を使うと10万円罰金となります。</p>
    <p>当フィールドでは全身ヒット制を採用しています。
    <br>身体、装備、エアガン、その他持ち物に弾が当たった場合及び、跳弾、味方による誤射は全てヒットとして扱います。
    <br>ヒット後は、ゲームルールに従って行動してください。</p>
    <p>自分に弾が当たったら、「ヒット！」と大きな声に出してヒットコールをお願いします。
    <br>手を上げるだけや、その場を黙って去る行為などはオーバーキルやゾンビ疑惑につながる恐れがあります。
    <br>フラッグ戦では、走りこんでのフラグゲットは無効とさせていただく事があります。</p>
    <p>なるべく周囲の敵を殲滅してから、フラッグゲットするようにしてください。
    <br>味方への誤射は撃った側と撃たれた側の双方がヒットされたものとして扱います。</p>
    <p>誤って味方を撃ってしまった場合には撃ってしまった方に謝る等して、後のゲームも楽しく遊べるようご配慮をお願いします。</p>
    <p>マナー違反、ルール違反を発見した際は、スタッフまでご連絡ください。</p>
    <p>ご連絡いただいた情報を基にしかるべき対処を行いますので、個人間で解決するようなことは無いようにお願いします。</p>
    <p class="md-display-1 content-title">以下の行為はゲームのマナー違反となります</p>
    <p>安全なゲームの妨げになるような悪質な行為の場合には、運営スタッフの判断により退場を宣言させていただく事もございます。ご了承ください。</p>
    <p>遮蔽から銃のみを出して撃つような行為、射撃方向を目視しないまま射撃する撃ち方は禁止です。</p>
    <p>目視しない射撃は思わぬ場所に弾が飛び、誤射や怪我などの原因となります。</p>
    <p>自分に弾が当たってもヒットコールを行わず、ゲームを継続する行為は絶対に禁止です。</p>
    <p>自分のヒットを認めずにゲームを継続する行為をゾンビ行為と言います。ゾンビ行為はゲームを成立させなくする悪質な行為です。</p>
    <p>ヒットされているプレイヤーへ、さらに射撃するようなオーバーキルと呼ばれる行為にはお気を付けください。</p>
    <p>自分の撃つ相手が敵であるか、動いているかなどを確認してから射撃するようにしてください。</p>
    <p>ヒットされた後に情報を味方に告げるような行為は禁止です。</p>
    <p>セーフティエリアに戻る際や復活戦などで復活するまでの間などに、敵の位置情報などを味方に告げ無いようにしてください。</p>
    <p>ゲーム中やセーフティエリアにて誹謗中傷や、暴言を言う等の行為はご遠慮ください。</p>
    <p>ゾンビ疑惑やその他マナー違反などは、スタッフまでご連絡ください。</p>
    <p>当フィールド内にて暴力行為などは絶対におやめください。</p>
    <div class="md-display-1 content-title">
      カレンダー
    </div>
    <iframe class="google-calendar" src="https://calendar.google.com/calendar/embed?src=e69227usonlkiim5hkr3o777pg%40group.calendar.google.com&ctz=Asia%2FTokyo" frameborder="0" scrolling="no"></iframe>
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
.md-layout-item {
  margin-bottom: 30px;
}
.md-title {
  text-align: center;
}
.md-chip {
  margin-bottom: 16px;
}
.actions {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}
.google-calendar {
  width: 100%;
  height: 500px;
}
.strong-color {
  color: red;
}
</style>
