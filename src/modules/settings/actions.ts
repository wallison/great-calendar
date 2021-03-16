import { ActionContext } from 'vuex';
import fetchCityWeather from '../apis';
import { ISettingsState, ICalendarEvent } from './types';

export default {
  fetchCalendarEvents(store: ActionContext<ISettingsState, ICalendarEvent>): void {
    const calendarEvents: ICalendarEvent[] = [];
    store.commit('setCalendarEvents', calendarEvents);
  },
  setCalendarEvent(
    store: ActionContext<ISettingsState, ICalendarEvent>,
    calendarEvent: ICalendarEvent,
  ): void {
    store.commit('setCalendarEvent', calendarEvent);
  },
  removeCalendarEvent(
    store: ActionContext<ISettingsState, ICalendarEvent>,
    calendarEvent: ICalendarEvent,
  ): void {
    store.commit('removeCalendarEvent', calendarEvent);
  },
  fetchEventCityWeather(
    store: ActionContext<ISettingsState, ICalendarEvent>,
    calendarEvent: ICalendarEvent,
  ) {
    return new Promise((resolve, reject) => {
      fetchCityWeather(calendarEvent)
        .then((response: any) => {
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
