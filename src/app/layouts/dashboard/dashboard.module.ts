import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { DashboardRoutesModule } from './dashboard.routing.module';
import { CoreModule } from '../../core/core.module';
import { ComingSoonModule } from './components/coming-soon/coming-soon.module';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';
@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    RouterModule,
    DashboardRoutesModule
  ],
  exports: [DashboardComponent],
  declarations: [DashboardComponent],
})
export class DashboardModule { }