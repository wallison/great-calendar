<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>{{ day }}</span>
        <el-button
          class="edit-reminders"
          type="text"
          @click="handleOpenSetDialog"
        >
          <i class="el-icon-edit"></i>
        </el-button>
        <el-badge
          v-if="reminders.length > 0"
          :value="reminders.length"
          class="item-badge"
        />
        <el-dialog
          v-if="openSetDialog"
          :visible.sync="openSetDialog"
          :title="setDialogTitle"
          append-to-body
          :before-close="() => (this.openSetDialog = false)"
        >
          <div>
            <ReminderForm :date="date" />
          </div>
        </el-dialog>
      </div>
      <div class="item" @click="handleOpenViewDialog">
        <el-tooltip
          v-for="calendar in reminders.filter((item, index) => index < 2)"
          :key="calendar.id"
          class="item"
          effect="dark"
          :content="calendar.text"
          placement="top-start"
        >
          <el-alert
            :style="'background-color:' + calendar.color"
            effect="dark"
            class="alert-small"
            :closable="false">
            <div
              style="white-space: nowrap;"
            >
              {{ calendar.text }}
            </div>
          </el-alert>
        </el-tooltip>
        <div class="view-more" v-if="reminders.length">view more</div>
        <el-dialog
          v-if="openViewDialog"
          :visible.sync="openViewDialog"
          :title="viewDialogTitle"
          append-to-body
          :before-close="() => (this.openViewDialog = false)"
        >
          <ReminderAlert
            v-for="calendar in reminders"
            :key="calendar.id"
            :reminder="calendar"
            :date="date"
          />
        </el-dialog>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import { ICalendarEvent } from '../settings/types';
import ReminderForm from './ReminderForm.vue';
import ReminderAlert from './ReminderAlert.vue';
import UtilsService from '../utils/utils-service';

const namespace = 'settings';
@Component({
  components: {
    ReminderAlert,
    ReminderForm,
  },
})
export default class DayBox extends Vue {
  @Prop({ required: true, default: null }) day: number;
  @Prop({ required: true, default: null }) date: Date;
  @Getter('getCalendarEventsByDate', { namespace }) getRemindersByDate: Function;

  openSetDialog = false;
  openViewDialog = false;

  handleOpenSetDialog() {
    this.openSetDialog = true;
  }

  handleOpenViewDialog() {
    this.openViewDialog = true;
  }

  get reminders(): ICalendarEvent[] {
    return this.getRemindersByDate(this.date)
      .sort((a: ICalendarEvent, b: ICalendarEvent) => a.time.localeCompare(b.time));
  }

  get viewDialogTitle(): string {
    return `View Reminders - ${this.date.getFullYear()}/${UtilsService.getMonthName(this.date)}/${this.date.getDate()}`;
  }

  get setDialogTitle(): string {
    return `Set Reminders - ${this.date.getFullYear()}/${UtilsService.getMonthName(this.date)}/${this.date.getDate()}`;
  }
}
</script>

<style scoped>

  .item {
    font-size: 12px;
    cursor: pointer;
  }

  .item-badge {
    font-size: 12px;
  }

  .clearfix {
    display: flex;
    justify-content: space-between;
  }

  .clearfix:before,
  .clearfix:after {
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 150px;
    height: 180px;
  }

  .view-more {
    color: #409EFF;
    font-size: 12px;
    font-weight: bold;
  }
  .alert-small {
    text-align: left;
    height: 30px;
    padding: 0;
  }
  .alert-view {
    margin-bottom: 10px;
  }
  .edit-reminders {
    float: right;
    padding: 3px 0;
  }
</style>
