import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageChangeComponent } from './languageChange.component';
import { MaterialModule } from '../../material/material.module';

@NgModule({
  exports: [
    LanguageChangeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    LanguageChangeComponent,
  ]
})
export class LanguageChangeModule { }
