<template>
  <div>
    <h1>Home</h1>
    <!-- このように <HelloWorld msg="Hoge"/> 書いても良い -->
    <HelloWorld></HelloWorld>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"></HelloWorld>
    <!-- 変数値を代入する場合は v-bind:id="variable" もしくは :id="variable" と書く -->
    <HelloWorld v-bind:msg="text"></HelloWorld>
    <HelloWorld :msg="text"></HelloWorld>
  </div>
</template>



<style lang="scss" scoped>
h1 {
  color: #f00;
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
