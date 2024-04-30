import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchedulesRoutingModule } from './schedules-routing.module';
import { SchedulesComponent } from './schedules.component';
import { CoreModule } from '../../../../core/core.module';
import { SharedModule } from '../../../../shared/shared.module';
import { SchedulesService } from './schedules.service';
import { SchedulesMockService } from './schedules-mock.service';


@NgModule({
  declarations: [
    SchedulesComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    SchedulesRoutingModule
  ],
  providers: [
    {
      provide: SchedulesService,
      useClass: SchedulesMockService
    }
  ],
  exports: [
    SchedulesComponent
  ]
})
export class SchedulesModule { }
