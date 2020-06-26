import { InscriptionsComponent } from './inscriptions.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VerifyTokenGuard } from '../../../services/guards/verify-token.guard';

const routes: Routes = [
  {
    path: '',
    component: InscriptionsComponent,
    canActivateChild: [VerifyTokenGuard],
    data: { titulo: 'Inscripción de Materias' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InscriptionsRoutingModule { }
