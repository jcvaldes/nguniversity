import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './courses.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { VerifyTokenGuard } from '../../../services/guards/verify-token.guard';

const routes: Routes = [
  {
    path: '',
    component: CoursesComponent,
    canActivateChild: [VerifyTokenGuard],
    data: { titulo: 'Gestión de Materias' },
    children: [
      {
        path: '',
        component: CourseListComponent,
      },
      { path: 'new', component: CourseDetailComponent },
      { path: ':id', component: CourseDetailComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
