import '@babel/polyfill';
import 'mutationobserver-shim';

import Vue from 'vue';
import './plugins/bootstrap-vue';

import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  router,
  render: (hyperscript) => {
    return hyperscript(App);
  }
}).$mount('#app');  // index.html に用意している要素と一致させる
