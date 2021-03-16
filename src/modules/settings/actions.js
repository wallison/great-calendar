import fetchCityWeather from '../apis';
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
    fetchEventCityWeather(store, calendarEvent) {
        return new Promise((resolve, reject) => {
            fetchCityWeather(calendarEvent)
                .then((response) => {
                if (response) {
                    const changedEvent = calendarEvent;
                    changedEvent.weather = `#weather: ${response.weather[0]?.main} - ${response.weather[0]?.description}`;
                    store.commit('setCalendarEvent', changedEvent);
                }
                resolve(response);
            })
                .catch((error) => {
                reject(error);
            });
        });
    },
};
//# sourceMappingURL=actions.js.map