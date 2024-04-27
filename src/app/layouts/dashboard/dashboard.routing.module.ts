import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { StudentsComponent } from './pages/students/students.component';
import { SchedulesComponent } from './pages/schedules/schedules.component';
import { TeachersComponent } from './pages/teachers/teachers.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { ConfigComponent } from './pages/config/config.component';
import { DocumentsComponent } from './pages/documents/documents.component';
import { ReportsComponent } from './pages/reports/reports.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        component: HomeComponent,
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'students',
        component: StudentsComponent,
        loadChildren: () => import('./pages/students/students.module').then(m => m.StudentsModule),
      },
      {
        path: 'courses',
        component: CoursesComponent,
        loadChildren: () => import('./pages/courses/courses.module').then(m => m.CoursesModule),
      },
      {
        path: 'teachers',
        component: TeachersComponent,
        loadChildren: () => import('./pages/teachers/teachers.module').then(m => m.TeachersModule),
      },
      {
        path: 'schedules',
        component: SchedulesComponent,
        loadChildren: () => import('./pages/schedules/schedules.module').then(m => m.SchedulesModule),
      },
      {
        path: 'config',
        component: ConfigComponent,
        loadChildren: () => import('./pages/config/config.module').then(m => m.ConfigModule),
      },
      {
        path: 'documents',
        component:  DocumentsComponent,
        loadChildren: () => import('./pages/documents/documents.module').then(m => m.DocumentsModule),
      },
      {
        path: 'reports',
        component: ReportsComponent,
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

