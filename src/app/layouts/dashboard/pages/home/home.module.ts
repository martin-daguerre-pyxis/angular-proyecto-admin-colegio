import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { WidgetClockModule } from '../../components/widget-clock/widget-clock.module';

@NgModule({
  imports: [
    CommonModule,
    WidgetClockModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
