import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students.component';
import { SharedModule } from '../../../../shared/shared.module';
import { MaterialModule } from '../../../../shared/material/material.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule
  ],
  declarations: [StudentsComponent]
})
export class StudentsModule { }
