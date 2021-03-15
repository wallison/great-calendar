<template>
  <div>
    <div class="title">Great Calendar - {{ currentDate.getFullYear() }} / {{ monthName }}</div>
    <div class="panel-area">
      <el-button
        type="primary"
        icon="el-icon-arrow-left"
        circle @click="decreaseMonth"
      ></el-button>
      <CalendarPanel :currentDate="currentDate" />
      <el-button
        type="primary"
        icon="el-icon-arrow-right"
        circle @click="increaseMonth"
      ></el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import CalendarPanel from '@/modules/components/CalendarPanel.vue';
import UtilsService from '../utils/utils-service';

@Component({
  components: { CalendarPanel },
})
export default class MainPage extends Vue {
  date = new Date();

  created() {
    const currentDate = new Date();
    this.date = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  }

  get currentDate() {
    return this.date;
  }

  get monthName() {
    return UtilsService.getMonthName(this.date);
  }

  decreaseMonth() {
    this.date = new Date(this.date.getFullYear(), this.date.getMonth() - 1, 1);
  }

  increaseMonth() {
    this.date = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 1);
  }
}
</script>

<style scoped>
  .title {
    font-size: 20px;
    margin-bottom: 20px;
  }
  .panel-area {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
</style>
