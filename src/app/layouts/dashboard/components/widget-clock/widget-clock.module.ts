import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { WidgetClockComponent } from './widget-clock.component';

@NgModule({
  imports: [
    CommonModule,
    DatePipe
  ],
  declarations: [WidgetClockComponent],
  exports: [WidgetClockComponent]
})
export class WidgetClockModule { }
