import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginGuard } from '../services/guards/login.guard';
import { VerifyTokenGuard } from '../services/guards/verify-token.guard';
import { AdminGuard } from '../services/guards/admin.guard';
import { StudentGuard } from '../services/guards/student.guard';
import { TeacherGuard } from '../services/guards/teacher.guard';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [VerifyTokenGuard],
    data: { titulo: 'Dashboard' }
  }, {
    path: 'users',
    canActivate: [AdminGuard],
    loadChildren: () => import('./admin/users/users.module').then(m => m.UsersModule)
  }, {
    path: 'courses',
    canActivate: [AdminGuard],
    loadChildren: () => import('./admin/courses/courses.module').then(m => m.CoursesModule)
  },
  {
    path: 'students',
    canActivate: [AdminGuard],
    loadChildren: () => import('./admin/students/students.module').then(m => m.StudentsModule)
  },
  {
    path: 'inscription',
    canActivate: [StudentGuard],
    loadChildren: () => import('./student/inscriptions/inscriptions.module').then(m => m.InscriptionsModule)
  },
  {
    path: 'teacher-courses',
    canActivate: [TeacherGuard],
    loadChildren: () => import('./teacher/teacher-courses/teacher-courses.module').then(m => m.TeacherCoursesModule)
  },
  { path: '**', component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
