import { ICalendarEvent, ISettingsState } from '@/modules/settings/types';

export default {
  setCalendarEvent(state: ISettingsState, payload: ICalendarEvent) {
    state.error = false;
    state.calendarEvents = state.calendarEvents.filter((item) => item.id !== payload.id);
    state.calendarEvents.push(payload);
  },
  removeCalendarEvent(state: ISettingsState, payload: ICalendarEvent) {
    state.error = false;
    state.calendarEvents = state.calendarEvents.filter(
      (item) => item.id !== payload.id,
    );
  },
  setCalendarEvents(state: ISettingsState, payload: ICalendarEvent[]) {
    state.error = false;
    state.calendarEvents = payload;
  },
  settingError(state: ISettingsState) {
    state.error = true;
  },
};
