import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './students.component';

const routes: Routes = [
  {
    path: '',
    component: StudentsComponent,
  },
  {
    path: ':studentId',
    loadChildren: () => import('./students.module').then(m => m.StudentsModule),
  },
];

export const StudentsRoutes = RouterModule.forChild(routes);
