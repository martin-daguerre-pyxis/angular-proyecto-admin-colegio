import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageChangeComponent } from './languageChange.component';


@NgModule({
  exports: [
    LanguageChangeComponent
  ],
  imports: [
    CommonModule
  ],
  declarations: [
    LanguageChangeComponent,
  ]
})
export class LanguageChangeModule { }
