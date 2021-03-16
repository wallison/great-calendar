import axios from 'axios';
import { ICalendarEvent } from '@/modules/settings/types';

const API = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

export default function fetchCityWeather(reminder: ICalendarEvent) {
  return API
    .get(`http://api.openweathermap.org/data/2.5/weather?q=${reminder.city.toLowerCase()}&appid=723c8e39ecb99d046996d0ee36c64712`)
    .then((r) => r.data);
}
