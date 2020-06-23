import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginGuard } from '../services/guards/login.guard';
import { VerifyTokenGuard } from '../services/guards/verify-token.guard';
import { AdminGuard } from '../services/guards/admin.guard';

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
    path: 'roles',
    canActivate: [AdminGuard],
    loadChildren: () => import('./admin/roles/roles.module').then(m => m.RolesModule)
  }, {
    path: 'subjects',
    canActivate: [AdminGuard],
    loadChildren: () => import('./admin/subjects/subjects.module').then(m => m.SubjectsModule)
  },
  { path: '**', component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
