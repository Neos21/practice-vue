<template>
  <!-- template 要素の直下は1つしか要素を置けない -->
  <!-- App.vue のルート要素は #app で index.html と揃えているが、便宜的なモノで必ず揃える必要はない。class 要素を振り scoped な style 要素でスタイル付けすると良さそう -->
  <div id="app">
    <b-container>  <!-- fluid を付ければ 100% 幅になる -->
      <b-navbar toggleable="lg" type="dark" variant="primary" class="mb-3">
        <b-navbar-brand href="#">{{ title }}</b-navbar-brand>
        
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>  <!-- 幅が狭い時に表示されるハンバーガーメニュー・target 属性で要素の id を指定する -->

        <b-collapse is-nav id="nav-collapse">  <!-- b-collapse に is-nav を付けておくと親要素のブレイクポイントで閉じられるようになる -->
          <b-navbar-nav>
            <b-nav-item to="/"      exact-active-class="active">Home</b-nav-item>   <!-- b-nav-item は route-link 同様 to 属性を受け付ける・exact-active-class でパスが完全一致した時に付与するクラス名を指定できる -->
            <b-nav-item to="/about" exact-active-class="active">About</b-nav-item>  <!-- exact と active-class を別々に付与することもできる -->
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      
      <router-view/>
    </b-container>
  </div>
</template>



<!-- scoped と付けておけばコンポーネント内に閉じたスタイルになる。付けないと子コンポーネント内で指定したスタイルもページ全体に効いてしまう -->
<style lang="scss">
html {
  overflow-x: hidden;
  overflow-y: scroll;
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
