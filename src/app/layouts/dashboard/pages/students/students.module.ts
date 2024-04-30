import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students.component';
import { SharedModule } from '../../../../shared/shared.module';
import { CoreModule } from '../../../../core/core.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    RouterModule,
  ],
  declarations: [StudentsComponent],
  exports: [StudentsComponent]
})
export class StudentsModule { }
