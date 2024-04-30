import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './layouts/auth/auth.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { ErrorComponent } from './layouts/error/error.component';
import { authGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: 'dashboard', canActivate: [authGuard], component: DashboardComponent, loadChildren: () => import('./layouts/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'auth', component: AuthComponent, loadChildren: () => import('./layouts/auth/auth.module').then(m => m.AuthModule) },
  { path: '', component: AuthComponent, loadChildren: () => import('./layouts/auth/auth.module').then(m => m.AuthModule) },
  { path: '**', component: ErrorComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
