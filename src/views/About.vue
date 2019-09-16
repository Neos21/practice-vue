<template>
  <div>
    <h1>This is an about page</h1>
    <b-alert show>Default Alert</b-alert>
  </div>
</template>


<style lang="scss" scoped>
h1 {
  color: #00f;
}
</style>



<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class About extends Vue {}
</script>
