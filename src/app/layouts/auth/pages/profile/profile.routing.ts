import { Routes, RouterModule } from '@angular/router';
import { ConfigComponent } from './config/config.component';

const routes: Routes = [
  { 
    path: '', 
    children: [
      { path: 'config', component: ConfigComponent , loadChildren: () => import('./config/config.module').then(m => m.ConfigModule)}, 
      { path: '**', redirectTo: 'profile' },
    ]
   },
];

export const ProfileRoutes = RouterModule.forChild(routes);
