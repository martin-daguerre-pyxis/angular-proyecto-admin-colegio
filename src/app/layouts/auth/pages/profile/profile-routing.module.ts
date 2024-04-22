import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigComponent } from './config/config.component';

const routes: Routes = [
  {
    path: '',
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
