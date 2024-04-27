import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { DashboardRoutesModule } from './dashboard.routing.module';
import { CoreModule } from '../../core/core.module';
@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    RouterModule,
    DashboardRoutesModule,
  ],
  declarations: [DashboardComponent],
})
export class DashboardModule { }