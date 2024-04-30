import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingService } from './services/loading.service';
import { AuthService } from './services/auth.service';
import { AlertsService } from './services/alerts.service';
@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    LoadingService, 
    AuthService, 
    AlertsService
  ]
})
export class CoreModule { }
