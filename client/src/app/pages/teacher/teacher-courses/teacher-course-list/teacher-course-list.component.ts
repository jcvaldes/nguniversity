import { AfterViewInit, Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Course } from '../course.model';

@Component({
  selector: 'app-teacher-course-list',
  templateUrl: './teacher-course-list.component.html',
  styleUrls: ['./teacher-course-list.component.scss']
})
export class TeacherCourseListComponent implements OnInit, AfterViewInit {
  @Output() coursesEnrolled: EventEmitter<Course[]> = new EventEmitter<Course[]>();

  constructor() {
    debugger
  }

  ngOnInit() {

  }


  ngAfterViewInit() {

  }



}
