<template>
  <div>
    <el-card class="box-card" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class DisabledDayBox extends Vue {}
</script>

<style scoped>
  .box-card {
    width: 150px;
    height: 180px;
    background-color: #d0d0d0;
  }
</style>
