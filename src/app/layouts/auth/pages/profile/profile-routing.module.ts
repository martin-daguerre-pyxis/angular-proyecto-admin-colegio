import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigComponent } from './config/config.component';
import { authGuard } from '../../../../core/guards/auth.guard';
import { ProfileComponent } from './profile.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    loadChildren: () => import('./profile.module').then(m => m.ProfileModule),
    canActivate: [authGuard],
    children: [
      {
        path: 'config',
        component: ConfigComponent,
        loadChildren: () => import('./config/config.module').then(m => m.ConfigModule)
      },
      { path: '**', redirectTo: 'login' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
