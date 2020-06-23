import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../shared/material.module';
import { SubjectsRoutingModule } from './subjects-routing.module';
import { SubjectsComponent } from './subjects.component';
import { SubjectDetailComponent } from './subject-detail/subject-detail.component';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { SharedModule } from '../../../shared/shared.module';
import { SubjectSearchComponent } from './subject-search/subject-search.component';
import { SubjectService } from './subject.service';
import { SubjectListResolverGuard } from './subject-list/subject-list-resolver.guard';
import { UsersModule } from '../users/users.module';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SubjectsRoutingModule,
    SharedModule
  ],
  declarations: [
    SubjectsComponent,
    SubjectDetailComponent,
    SubjectListComponent,
    SubjectSearchComponent
  ],
  exports: [
    SubjectSearchComponent,
  ],
  providers: [SubjectService, SubjectListResolverGuard],
  entryComponents: []
})
export class SubjectsModule {}
