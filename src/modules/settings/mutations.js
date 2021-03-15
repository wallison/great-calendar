export default {
    setCalendarEvent(state, payload) {
        state.error = false;
        state.calendarEvents = state.calendarEvents.filter((item) => item.id !== payload.id);
        state.calendarEvents.push(payload);
    },
    removeCalendarEvent(state, payload) {
        state.error = false;
        state.calendarEvents = state.calendarEvents.filter((item) => item.id !== payload.id);
    },
    setCalendarEvents(state, payload) {
        state.error = false;
        state.calendarEvents = payload;
    },
    settingError(state) {
        state.error = true;
    },
};
//# sourceMappingURL=mutations.js.map