<template>
  <!-- template 要素の直下は1つしか要素を置けない -->
  <!-- App.vue のルート要素は #app で index.html と揃えているが、便宜的なモノで必ず揃える必要はない。class 要素を振り scoped な style 要素でスタイル付けすると良さそう -->
  <div id="app">
    <h1>{{ title }}</h1>
    <nav>
      <router-link to="/">Home</router-link> | <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
  </div>
</template>



<!-- scoped と付けておけばコンポーネント内に閉じたスタイルになる。付けないと子コンポーネント内で指定したスタイルもページ全体に効いてしまう -->
<style lang="scss" scoped>
h1 {
  color: #09f;
}
</style>



<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class App extends Vue {
  /** タイトル */
  private title: string = 'Practice Vue';
}
</script>
