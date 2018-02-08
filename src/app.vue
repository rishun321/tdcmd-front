<template>
<router-view :manager="manager"/>
</template>

<script>
export default {
  props: ['manager']
}
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Lato:400,700);
@import url(http://fonts.googleapis.com/earlyaccess/notosansjp.css);
body {
  font-family: Lato, "Noto Sans JP", "游ゴシック Medium", "游ゴシック体", "Yu Gothic Medium", YuGothic, "ヒラギノ角ゴ ProN", "Hiragino Kaku Gothic ProN", "メイリオ", Meiryo, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
}

.md-select-menu {
  z-index: 10;
}
</style>
