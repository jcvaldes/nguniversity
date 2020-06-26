import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { MaterialModule } from '../../../shared/material.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UsersComponent } from './users.component';
import { PipesModule } from '../../../pipes/pipes.module';
import { CoursesModule } from '../courses/courses.module';
import { UserTableComponent } from './user-table/user-table.component';


@NgModule({
  declarations: [
    UsersComponent,
    UserTableComponent,
    UserListComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    UsersRoutingModule,
    PipesModule,
    RouterModule,
    CoursesModule,

  ],
  exports: [],

})
export class UsersModule {}
