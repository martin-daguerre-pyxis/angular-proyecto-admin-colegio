import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigRoutingModule } from './config-routing.module';
import { ConfigComponent } from './config.component';
import { CoreModule } from '../../../../core/core.module';
import { SharedModule } from '../../../../shared/shared.module';


@NgModule({
  declarations: [
    ConfigComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    ConfigRoutingModule
  ],
  exports: [
    ConfigComponent
  ]
})
export class ConfigModule { }
