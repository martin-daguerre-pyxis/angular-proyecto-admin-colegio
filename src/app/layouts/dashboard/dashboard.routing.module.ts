import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'students',
        loadChildren: () => import('./pages/students/students.module').then(m => m.StudentsModule),
      },
      {
        path: 'courses',
        loadChildren: () => import('./pages/courses/courses.module').then(m => m.CoursesModule),
      },
      {
        path: 'teachers',
        loadChildren: () => import('./pages/teachers/teachers.module').then(m => m.TeachersModule),
      },
      {
        path: 'schedules',
        loadChildren: () => import('./pages/schedules/schedules.module').then(m => m.SchedulesModule),
      },
      {
        path: 'config',
        loadChildren: () => import('./pages/config/config.module').then(m => m.ConfigModule),
      },
      {
        path: 'documents',
        loadChildren: () => import('./pages/documents/documents.module').then(m => m.DocumentsModule),
      },
      {
        path: 'reports',
        loadChildren: () => import('./pages/reports/reports.module').then(m => m.ReportsModule),
      },
      { path: '**', redirectTo: 'home' },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})

export class DashboardRoutesModule { }

