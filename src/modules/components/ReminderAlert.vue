<template>
  <div>
    <el-alert
      effect="dark"
      class="alert-view"
      :style="'background-color:' + reminder.color"
      :closable="false">
      <div>
        {{ reminder.time }} - {{ reminder.text }} / {{ reminder.city }}
        {{ reminder.weather || observation }}
      </div>
    </el-alert>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Action } from 'vuex-class';
import ReminderForm from './ReminderForm.vue';
import CalendarEvent from '../entities/CalendarEvent';

const namespace = 'settings';
@Component({
  components: {
    ReminderForm,
  },
})
export default class ReminderAlert extends Vue {
  @Prop({ required: true, default: null }) reminder: CalendarEvent;
  @Prop({ required: true, default: null }) date: Date;
  @Action('fetchEventCityWeather', { namespace }) fetchEventCityWeather: Function;
  observation = '';

  mounted() {
    this.fetchEventCityWeather(this.reminder).then((response: any) => {
      if (response) this.observation = response;
    });
  }
}
</script>

<style scoped>
  .alert-view {
    margin-bottom: 10px;
  }
</style>
