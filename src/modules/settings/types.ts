export interface ICalendarEvent {
  id?: number;
  eventDate: Date;
  time: string;
  text: string;
  city: string;
  color: string;
}

export interface ISettingsState {
  calendarEvents: ICalendarEvent[];
  selectedCalendarEvent: ICalendarEvent;
  error: boolean;
}
