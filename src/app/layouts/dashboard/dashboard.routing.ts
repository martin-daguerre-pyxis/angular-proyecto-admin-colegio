import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: 'students',
    loadChildren: () => import('./pages/students/students.component').then(m => m.StudentsComponent),
  },
  {
    path: 'students:studentId',
    loadChildren: () => import('./pages/students/students.component').then(m => m.StudentsComponent),
  },
  {
    path: 'courses',
    loadChildren: () => import('./pages/courses/courses.component').then(m => m.CoursesComponent),
  },
  {
    path: 'courses/:courseId',
    loadChildren: () => import('./pages/students/students.component').then(m => m.StudentsComponent),
  },
  {
    path: 'teachers',
    loadChildren: () => import('./pages/courses/courses.component').then(m => m.CoursesComponent),
  },
  {
    path: 'teachers/:teacherId',
    loadChildren: () => import('./pages/teachers/teachers.component').then(m => m.TeachersComponent),
  },
];

export const DashboardRoutes = RouterModule.forChild(routes);
