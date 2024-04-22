import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students.component';
import { SharedModule } from '../../../../shared/shared.module';
import { StudentAbmComponent } from './components/student-abm/student-abm.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [StudentsComponent, StudentAbmComponent]
})
export class StudentsModule { }
