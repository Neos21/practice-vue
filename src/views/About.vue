<template>
  <div class="about">
    <h1 class="text-primary">This is an about page</h1>
    <b-alert show variant="primary">Default Alert</b-alert>
  </div>
</template>


<style lang="scss" scoped>
</style>



<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class About extends Vue {}
</script>
