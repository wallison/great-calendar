export default {
    fetchCalendarEvents(store) {
        const calendarEvents = [];
        store.commit('setCalendarEvents', calendarEvents);
    },
    setCalendarEvent(store, calendarEvent) {
        store.commit('setCalendarEvent', calendarEvent);
    },
    removeCalendarEvent(store, calendarEvent) {
        store.commit('removeCalendarEvent', calendarEvent);
    },
};
//# sourceMappingURL=actions.js.map