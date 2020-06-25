import { TeacherCourseListResolverGuard } from './teacher-course-list/teacher-course-list-resolver.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerifyTokenGuard } from '../../../services/guards/verify-token.guard';
import { TeacherCoursesComponent } from './teacher-courses.component';
import { TeacherCourseListComponent } from './teacher-course-list/teacher-course-list.component';


const routes: Routes = [
  {
    path: '',
    component: TeacherCoursesComponent,
    canActivateChild: [VerifyTokenGuard],
    data: { titulo: 'Gestión de Materiasddd' },
    children: [
      {
        path: '',
        component: TeacherCourseListComponent,
        runGuardsAndResolvers: 'always',
        resolve: { courses: TeacherCourseListResolverGuard }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherCoursesRoutingModule { }
