<template>
<div class="app-content-auto-height">
  <vue-headful title="ブドウさん - ホーム"/>

  <md-content class="md-primary md-title" md-theme="light">
    お知らせ
  </md-content>
  <md-content class="md-primary md-scrollbar content-block" md-theme="warm">
    <md-toolbar class="md-medium">
      Toolbar actions appear above the view affected by their actions. They may constrain their width to accommodate material passing over them. Toolbar actions appear above the view affected by their actions. They may constrain their width to accommodate material passing over them. Toolbar actions appear above the view affected by their actions. They may constrain their width to accommodate material passing over them. Toolbar actions appear above the view affected by their actions. They may constrain their width to accommodate material passing over them.
    </md-toolbar>
    <md-toolbar class="md-dense md-accent">
      As the Toolbars are mostly used to hold actions that affects the entire application, you can create rows or sections inside of it.
    </md-toolbar>
    <md-toolbar class="md-large">
      Although those rows works on every toolbar, they were created to separate contents for large toolbars. This element is represented by the md-toolbar-row class. A row can also have a md-toolbar-offset to add a little space on the left of it. This is commonly used inside the second row of an large toolbar. Although those rows works on every toolbar, they were created to separate contents for large toolbars. This element is represented by the md-toolbar-row class. A row can also have a md-toolbar-offset to add a little space on the left of it. This is commonly used inside the second row of an large toolbar.
    </md-toolbar>
    <md-toolbar class="md-dense">
      As the Toolbars are mostly used to hold actions that affects the entire application, you can create rows or sections inside of it.
    </md-toolbar>
  </md-content>

  <md-content class="md-primary md-title" md-theme="light">
    新着情報
  </md-content>
  <md-content class="md-primary md-scrollbar content-block" md-theme="warm">
    <md-toolbar class="md-medium">
      Toolbar actions appear above the view affected by their actions. They may constrain their width to accommodate material passing over them. Toolbar actions appear above the view affected by their actions. They may constrain their width to accommodate material passing over them. Toolbar actions appear above the view affected by their actions. They may constrain their width to accommodate material passing over them. Toolbar actions appear above the view affected by their actions. They may constrain their width to accommodate material passing over them.
    </md-toolbar>
    <md-toolbar class="md-dense md-accent">
      As the Toolbars are mostly used to hold actions that affects the entire application, you can create rows or sections inside of it.
    </md-toolbar>
    <md-toolbar class="md-large">
      Although those rows works on every toolbar, they were created to separate contents for large toolbars. This element is represented by the md-toolbar-row class. A row can also have a md-toolbar-offset to add a little space on the left of it. This is commonly used inside the second row of an large toolbar. Although those rows works on every toolbar, they were created to separate contents for large toolbars. This element is represented by the md-toolbar-row class. A row can also have a md-toolbar-offset to add a little space on the left of it. This is commonly used inside the second row of an large toolbar.
    </md-toolbar>
    <md-toolbar class="md-dense">
      As the Toolbars are mostly used to hold actions that affects the entire application, you can create rows or sections inside of it.
    </md-toolbar>
  </md-content>
</div>
</template>

<script>
import utils from '@/tool/utils.js'
export default {
  props: ['manager'],
  mounted () {
    utils.event.$emit('SHOW_SNACKBAR', 'I001', null, () => {
      utils.event.$emit('SHOW_MESSAGE', {code: 'I001', detail: 'だから、なにを求めてんの？工事中だって！'})
    })
  },
  beforeDestroy () {
    utils.event.$emit('HIDE_SNACKBAR')
  }
}
</script>

<style scoped lang="scss">
.md-title {
  padding: 5px;
  width: 200px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content-block {
  width: 100%;
  height: 300px;
  overflow: auto;
  padding: 10px;
}
.content-block + .md-title {
  margin-top: 16px;
}
.md-toolbar + .md-toolbar {
  margin-top: 16px;
}
</style>
