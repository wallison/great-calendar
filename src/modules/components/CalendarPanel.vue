<template>
  <div>
    <div class="panel">
      <div
        class="column-card"
      >
        <span>Sunday</span>
        <DisabledDayBox v-if="days.saturday.length < 5 && days.saturday[0].day > 1" />
        <DayBox v-for="day in days.sunday" :day="day.day" :date="day.date" :key="day.day" />
      </div>
      <div
        class="column-card"
      >
        <span>Monday</span>
        <DisabledDayBox v-if="days.monday.length < 5 && days.monday[0].day > 2" />
        <DayBox v-for="day in days.monday" :day="day.day" :date="day.date" :key="day.day" />
      </div>
      <div
        class="column-card"
      >
        <span>Tuesday</span>
        <DisabledDayBox v-if="days.tuesday.length < 5 && days.tuesday[0].day > 3" />
        <DayBox v-for="day in days.tuesday" :day="day.day" :date="day.date" :key="day.day" />
      </div>
      <div
        class="column-card"
      >
        <span>Wednesday</span>
        <DisabledDayBox v-if="days.wednesday.length < 5 && days.wednesday[0].day > 4" />
        <DayBox v-for="day in days.wednesday" :day="day.day" :date="day.date" :key="day.day" />
      </div>
      <div
        class="column-card"
      >
        <span>Thursday</span>
        <DisabledDayBox v-if="days.thursday.length < 5 && days.thursday[0].day > 5" />
        <DayBox v-for="day in days.thursday" :day="day.day" :date="day.date" :key="day.day" />
      </div>
      <div
        class="column-card"
      >
        <span>Friday</span>
        <DisabledDayBox v-if="days.friday.length < 5 && days.friday[0].day > 6" />
        <DayBox v-for="day in days.friday" :day="day.day" :date="day.date" :key="day.day" />
      </div>
      <div
        class="column-card"
      >
        <span>Saturday</span>
        <DisabledDayBox v-if="days.saturday.length < 5 && days.saturday[0].day > 7" />
        <DayBox v-for="day in days.saturday" :day="day.day" :date="day.date" :key="day.day" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import DayBox from './DayBox.vue';
import DisabledDayBox from './DisabledDayBox.vue';

@Component({
  components: {
    DayBox,
    DisabledDayBox,
  },
})
export default class CalendarPanel extends Vue {
  getDaysOfMonth(date: Date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  }

  get lastDayOfPreviusMonth() {
    const currentDate = new Date();
    const lastDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
    return this.getDaysOfMonth(lastDate);
  }

  get days() {
    const currentDate = new Date();
    const firstDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const daysNum = this.getDaysOfMonth(firstDate);
    const days = {
      sunday: [] as any[],
      monday: [] as any[],
      tuesday: [] as any[],
      wednesday: [] as any[],
      thursday: [] as any[],
      friday: [] as any[],
      saturday: [] as any[],
    };
    for (let i = 1; i <= daysNum; i += 1) {
      const testDate = new Date(firstDate.getFullYear(), firstDate.getMonth(), i);
      const dayOfWeek = testDate.getDay();
      switch (dayOfWeek) {
        case 0:
          days.sunday.push({ day: i, date: testDate });
          break;
        case 1:
          days.monday.push({ day: i, date: testDate });
          break;
        case 2:
          days.tuesday.push({ day: i, date: testDate });
          break;
        case 3:
          days.wednesday.push({ day: i, date: testDate });
          break;
        case 4:
          days.thursday.push({ day: i, date: testDate });
          break;
        case 5:
          days.friday.push({ day: i, date: testDate });
          break;
        case 6:
          days.saturday.push({ day: i, date: testDate });
          break;
        default:
          break;
      }
    }

    return days;
  }
}
</script>

<style scoped>
  .panel {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .column-card {
    display: flex;
    flex-direction: column;
    background-color: #d0d0d0;
  }
</style>
