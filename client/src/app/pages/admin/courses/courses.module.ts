import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../shared/material.module';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CourseListComponent } from './course-list/course-list.component';
import { SharedModule } from '../../../shared/shared.module';
import { CourseSearchComponent } from './course-search/course-search.component';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CoursesRoutingModule,
    SharedModule
  ],
  declarations: [
    CoursesComponent,
    CourseDetailComponent,
    CourseListComponent,
    CourseSearchComponent
  ],
  exports: [
    CourseSearchComponent,
    CourseListComponent
  ],
  providers: [],
  entryComponents: []
})
export class CoursesModule {}
