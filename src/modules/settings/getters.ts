import { ICalendarEvent, ISettingsState } from './types';

export default {
  getCalendarEvents(state: ISettingsState): ICalendarEvent[] {
    return state.calendarEvents;
  },
  getCalendarEventsByDate: (state: ISettingsState) => (date: Date) => (
    state.calendarEvents
      .filter((item) => new Date(item.eventDate).getDate() === date.getDate()
      && new Date(item.eventDate).getMonth() === date.getMonth()
      && new Date(item.eventDate).getFullYear() === date.getFullYear())
  ),
  getErrorStatus(state: ISettingsState): boolean {
    return state.error;
  },
};
