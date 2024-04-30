import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { CoreModule } from '../../../../core/core.module';
import { SharedModule } from '../../../../shared/shared.module';
import { ComingSoonModule } from '../../components/coming-soon/coming-soon.module';
import { CoursesRoutingModule } from './courses.routing';

@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    ComingSoonModule,
    CoursesRoutingModule,
  ],
  exports: [
    CoursesComponent
  ]
})
export class CoursesModule { }
