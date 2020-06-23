import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubjectsComponent } from './subjects.component';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { SubjectDetailComponent } from './subject-detail/subject-detail.component';
import { SubjectListResolverGuard } from './subject-list/subject-list-resolver.guard';
import { SubjectSingleResolverGuard } from './subject-detail/subject-single-resolver.guard';
import { VerifyTokenGuard } from '../../../services/guards/verify-token.guard';

const routes: Routes = [
  {
    path: '',
    component: SubjectsComponent,
    canActivateChild: [VerifyTokenGuard],
    data: { titulo: 'Gestión de Materias' },
    children: [
      {
        path: '',
        component: SubjectListComponent,
        runGuardsAndResolvers: 'always',
        resolve: { categories: SubjectListResolverGuard }
      },
      { path: 'new', component: SubjectDetailComponent },
      { path: ':id', component: SubjectDetailComponent, resolve: { Subject: SubjectSingleResolverGuard } },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectsRoutingModule { }
