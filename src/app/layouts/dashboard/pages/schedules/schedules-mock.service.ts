import { Injectable } from '@angular/core';
import { ISchedule } from '../../../../core/models';

@Injectable({
  providedIn: 'root'
})
export class SchedulesMockService {

  constructor() { }

  getSchedule(): ISchedule[] {
    return [
      {
        id: 1,
        title: 'Matutino 1',
        start: '08:00',
        end: '9:20',
        color: 'blue',
        allDay: false,
      },
      {
        id: 2,
        title: 'Matutino 2',
        start: '09:30',
        end: '10:50',
        color: 'green',
        allDay: false,
      },
      {
        id: 3,
        title: 'Matutino 2',
        start: '11:00',
        end: '12:30',
        color: 'green',
        allDay: false,
      },
      {
        id: 4,
        title: 'Vespertino 1',
        start: '14:00',
        end: '15:20',
        color: 'red',
        allDay: false,
      },
      {
        id: 5,
        title: 'Vespertino 2',
        start: '15:30',
        end: '16:50',
        color: 'yellow',
        allDay: false,
      },
      {
        id: 6,
        title: 'Nocturno 1',
        start: '18:00',
        end: '19:20',
        color: 'purple',
        allDay: false,
      },
      {
        id: 7,
        title: 'Nocturno 2',
        start: '19:30',
        end: '20:50',
        color: 'orange',
        allDay: false,
      },
    ];
  }
}
