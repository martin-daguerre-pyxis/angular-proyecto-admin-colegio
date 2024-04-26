import { Component, OnInit } from '@angular/core';
import { SchedulesService } from './schedules.service';
import { Observable } from 'rxjs'; 
@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrl: './schedules.component.scss'
})
export class SchedulesComponent implements OnInit {

  items: Observable<any> | undefined;

  constructor(private scheduleService: SchedulesService) {
    this.scheduleService.getSchedule().subscribe((data: any) => { 
      console.log(data);
    });
  }

  ngOnInit(): void {
      this.items = this.scheduleService.getSchedule();
  }

}
