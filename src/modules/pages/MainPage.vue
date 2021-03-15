<template>
  <div>
    <div class="title">Great Calendar - {{ monthName }}</div>
    <CalendarPanel />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import CalendarPanel from '@/modules/components/CalendarPanel.vue';

@Component({
  components: { CalendarPanel },
})
export default class MainPage extends Vue {
  monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];

  get monthName() {
    const d = new Date();
    console.log(d.getMonth());
    return this.monthNames[d.getMonth()];
  }
}
</script>

<style scoped>
  .title {
    font-size: 20px;
    margin-bottom: 20px;
  }
</style>
