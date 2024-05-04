import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { SharedModule } from '../../shared/shared.module';
import { AuthRoutingModule } from './auth.routing';
import { RouterModule } from '@angular/router';
import { LoginModule } from './pages/login/login.module';
import { AuthService } from '../../core/services/auth.service';

 @NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    AuthRoutingModule,
    LoginModule
  ],
  providers: [AuthService],
  declarations: [AuthComponent]
})
export class AuthModule { }
