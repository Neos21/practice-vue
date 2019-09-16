<template>
  <div class="hello-world">
    <p>[ {{ msg }} ]</p>
  </div>
</template>



<style lang="scss" scoped>
h1 {
  color: #0f0;
}
</style>



<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class HelloWorld extends Vue {
  /**
   * - 親コンポーネントからデータを受け取る props は @Prop デコレータで定義する
   *   - default プロパティを指定すれば値が入ってこなかった場合の初期値を指定できる
   * - 変数末尾の ! 記号は Non-Null Assertion Operator。この変数は undefined や null になることはないと宣言している
   *   - よそで代入される場合のオペレータなので msg! = 'hoge' のようにその場での代入はできない
   *   - 実際に値が代入されなかった場合も特に実行時エラーにはならない
   */
  @Prop({
    default: 'Default Value'
  })
  private msg!: string;
}
</script>
