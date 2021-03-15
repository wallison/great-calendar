import { ActionContext } from 'vuex';
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
};
