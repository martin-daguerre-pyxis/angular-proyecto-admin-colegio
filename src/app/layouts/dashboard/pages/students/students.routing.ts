import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './students.component';
import { NgModule } from '@angular/core';
import { AbmComponent } from './components/abm/abm.component';

const routes: Routes = [
  {
    path: '',
    //component: StudentsComponent,
    //loadChildren: () => import('./students.module').then(m => m.StudentsModule),
    /* children: [
      {
        path: 'abm',
        component: AbmComponent,
        loadChildren: () => import('./components/abm/abm.module').then(m => m.AbmModule),
      },
      
    ] */
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})

export class StudentsRoutesModule { }

