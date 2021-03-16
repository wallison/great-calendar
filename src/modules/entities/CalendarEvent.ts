import { ICalendarEvent } from '@/modules/settings/types';

export default class CalendarEvent implements ICalendarEvent {
  public id?: number;
  public eventDate: Date;
  public time: string;
  public text: string;
  public city: string;
  public color: string;
  public weather?: string;

  constructor(eventDate: Date, time: string, text: string, city: string, color: string) {
    this.eventDate = eventDate;
    this.time = time;
    this.text = text;
    this.city = city;
    this.color = color;
  }
}
