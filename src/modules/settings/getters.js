export default {
  getCalendarEvents(state) {
    return state.calendarEvents;
  },
  getCalendarEventsByDate: (state) => (date) => (state.calendarEvents
    .filter((item) => new Date(item.eventDate).getDate() === date.getDate()
        && new Date(item.eventDate).getMonth() === date.getMonth()
        && new Date(item.eventDate).getFullYear() === date.getFullYear())),
  getErrorStatus(state) {
    return state.error;
  },
};
// # sourceMappingURL=getters.js.map
