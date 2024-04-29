import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { WidgetClockComponent } from './widget-clock.component';
import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DatePipe
  ],
  declarations: [WidgetClockComponent],
  exports: [WidgetClockComponent]
})
export class WidgetClockModule { }
