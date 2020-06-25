import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../shared/material.module';
import { TeacherCoursesRoutingModule } from './teacher-courses-routing.module';
import { TeacherCoursesComponent } from './teacher-courses.component';

import { SharedModule } from '../../../shared/shared.module';


import { TeacherCourseListComponent } from './teacher-course-list/teacher-course-list.component';
import { CoursesModule } from '../../admin/courses/courses.module';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    TeacherCoursesRoutingModule,
    CoursesModule
  ],
  declarations: [
    TeacherCoursesComponent,
    TeacherCourseListComponent
  ],
  exports: [
    TeacherCourseListComponent
  ],
  providers: [],
  entryComponents: []
})
export class TeacherCoursesModule {}
