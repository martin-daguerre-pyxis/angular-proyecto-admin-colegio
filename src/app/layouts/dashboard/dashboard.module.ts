import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { SchedulesComponent } from './pages/schedules/schedules.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { TeachersComponent } from './pages/teachers/teachers.component';
import { StudentAbmComponent } from './pages/students/components/student-abm/student-abm.component';
import { StudentsComponent } from './pages/students/students.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [DashboardComponent, SchedulesComponent, CoursesComponent, TeachersComponent,StudentsComponent, StudentAbmComponent],
})
export class DashboardModule { }
