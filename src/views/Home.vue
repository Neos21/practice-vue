<template>
  <div class="home">
    <b-jumbotron header="Bootstrap Vue" lead="Bootstrap Components for Vue.js">
      <p><b-button variant="primary" to="/about">Go To About</b-button></p>
      
      <!-- このように <HelloWorld msg="Hoge"/> 書いても良い -->
      <HelloWorld></HelloWorld>
      <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"></HelloWorld>
      <!-- 変数値を代入する場合は v-bind:id="variable" もしくは :id="variable" と書く -->
      <HelloWorld v-bind:msg="text"></HelloWorld>
      <HelloWorld :msg="text"></HelloWorld>
    </b-jumbotron>
  </div>
</template>



<style lang="scss" scoped>
// Bootstrap の SCSS 変数を参照したい時の読み込み方コレでいいのかな…
@import '../../node_modules/bootstrap/scss/bootstrap.scss';
// @import '../../node_modules/bootstrap-vue/src/index.scss';

h1 {
  color: $primary;
}
</style>



<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import HelloWorld from '@/components/HelloWorld.vue';  // @ は /src のエイリアス

@Component({
  components: {
    HelloWorld  // 子コンポーネントを設定しておく
  }
})
export default class Home extends Vue {
  private text: string = 'Text Value';
}
</script>
