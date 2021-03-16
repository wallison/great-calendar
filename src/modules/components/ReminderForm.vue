<template>
  <div>
    <el-form
      style="width: 680px"
      ref="form"
      :model="form"
      :rules="rules"
      label-width="120px"
      :key="form.key"
    >
      <el-form-item label="Text" prop="text" required>
        <el-input v-model="form.text"></el-input>
      </el-form-item>
      <el-form-item label="Time" prop="time" required>
        <el-time-select
          v-model="form.time"
          :picker-options="{
            start: '00:00',
            step: '00:15',
            end: '23:59'
          }"
          placeholder="Select time">
        </el-time-select>
      </el-form-item>
      <el-form-item label="City" prop="city" required>
        <el-input v-model="form.city"></el-input>
      </el-form-item>
      <el-form-item label="Color" prop="color">
        <el-color-picker v-model="form.color" ></el-color-picker>
      </el-form-item>
      <el-form-item>
        <el-button @click="defineReminder" type="primary" plain>Define Reminder</el-button>
      </el-form-item>
    </el-form>
    <div>
      <el-table
        :data="reminders"
        empty-text="No reminders"
      >
        <el-table-column
          prop="time"
          label="Time"
        />
        <el-table-column
          prop="text"
          label="Text"
        />
        <el-table-column
          prop="city"
          label="City"
        />
        <el-table-column :resizable="true" label="Color">
          <template slot-scope="scope">
            <div class="color-vision" :style="'background-color:' + scope.row.color"></div>
          </template>
        </el-table-column>
        <el-table-column :resizable="true" align="right">
          <template slot-scope="scope">
            <el-button @click="editEvent(scope.row)">
              <i class="el-icon-edit"></i>
            </el-button>
            <el-button @click="deleteEvent(scope.row)">
              <i class="el-icon-delete"></i>
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';
import CalendarEvent from '../entities/CalendarEvent';
import { ICalendarEvent } from '../settings/types';

const namespace = 'settings';
@Component
export default class ReminderForm extends Vue {
  @Prop({ required: true, default: null }) date: Date;
  @Action('setCalendarEvent', { namespace }) setReminder: Function;
  @Action('removeCalendarEvent', { namespace }) removeReminder: Function;
  @Getter('getCalendarEventsByDate', { namespace }) getRemindersByDate: Function;

  form = {
    id: null as number,
    text: '',
    time: '',
    city: '',
    color: '#E6A23C',
    key: 1,
  };
  rules = {
    text: [
      {
        required: true,
        message: 'Please input Text',
        trigger: 'blur',
      },
      {
        min: 3,
        max: 30,
        message: 'Length should be 3 to 30',
        trigger: 'change',
      },
    ],
    time: [
      { required: true, message: 'Please select a Time', trigger: 'blur' },
    ],
    city: [
      { required: true, message: 'Please input a City', trigger: 'blur' },
      {
        min: 3,
        max: 30,
        message: 'Length should be 3 to 30',
        trigger: 'change',
      },
    ],
  };

  get reminders() {
    return this.getRemindersByDate(this.date)
      .sort((a: ICalendarEvent, b: ICalendarEvent) => a.time.localeCompare(b.time));
  }

  defineReminder() {
    const formName = 'form';
    const form: any = this.$refs[formName];
    form.validate((valid: boolean) => {
      if (valid) {
        const calendar = new CalendarEvent(
          this.date,
          this.form.time,
          this.form.text,
          this.form.city,
          this.form.color,
        );
        if (this.form.id) {
          calendar.id = this.form.id;
        } else {
          calendar.id = new Date().getTime();
        }
        this.setReminder(calendar);
        this.cleanForm();
      }
    });
  }

  deleteEvent(event: ICalendarEvent) {
    this.removeReminder(event);
  }

  editEvent(event: ICalendarEvent) {
    this.form.id = event.id;
    this.form.text = event.text;
    this.form.time = event.time;
    this.form.city = event.city;
    this.form.color = event.color;
  }

  cleanForm() {
    this.form.id = null;
    this.form.text = '';
    this.form.time = '';
    this.form.city = '';
    this.form.color = '#E6A23C';
    this.form.key += 1;
  }
}
</script>

<style scoped>
  .color-vision {
    width: 30px;
    height: 30px;
  }
</style>
