import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavAccountRoutingModule } from './nav-account-routing.module';
import { SharedModule } from '../../shared.module';
import { UserInfoService } from '../../services/auth/user-info.service';


@NgModule({
  declarations: [],
  providers: [UserInfoService],
  imports: [
    CommonModule,
    SharedModule,
    NavAccountRoutingModule
  ]
})
export class NavAccountModule { }
