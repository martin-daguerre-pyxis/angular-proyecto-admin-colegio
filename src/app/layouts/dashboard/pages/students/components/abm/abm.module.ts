import {NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbmRoutingModule } from './abm-routing.module';
import { AbmComponent } from './abm.component';
import { SharedModule } from '../../../../../../shared/shared.module';

@NgModule({
  declarations: [
    AbmComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AbmRoutingModule
  ]
})
export class AbmModule { }
