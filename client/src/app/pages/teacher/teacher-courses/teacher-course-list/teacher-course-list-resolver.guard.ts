import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve, Router } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';
import { TableDataSource } from '../../../../shared/datasource.component';
import { Course } from '../course.model';
import { CourseService } from '../../../admin/courses/course.service';
import { validRoles } from '../../../../utils/enums';

@Injectable({
  providedIn: 'root'
})
export class TeacherCourseListResolverGuard implements Resolve<TableDataSource<Course>>  {
  private dataSource: TableDataSource<Course>;
  constructor(private _courseService: CourseService, private router: Router) { }
  // tslint:disable-next-line: max-line-length
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): TableDataSource<Course> | Observable<TableDataSource<Course>> | Promise<TableDataSource<Course>> {

    this.dataSource = new TableDataSource(this._courseService);
    const filter: string = route.queryParamMap.get('filter') || '';
    const pageIndex: number = +route.queryParamMap.get('pageIndex') || 0;
    const pageSize: number = +route.queryParamMap.get('pageSize') || 10;
    return this.dataSource.load(
      filter,
      'id',
      'asc',
      pageIndex,
      pageSize,
      [validRoles.Profesor],
      JSON.parse(localStorage.getItem('user')).id
    ).then((data) => {
        return this.dataSource;
      });
  }
}
