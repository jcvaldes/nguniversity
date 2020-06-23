import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve, Router } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';
import { TableDataSource } from '../../../../shared/datasource.component';
import { Subject } from '../subject.model';
import { SubjectService } from '../subject.service';

@Injectable({
  providedIn: 'root'
})
export class SubjectListResolverGuard implements Resolve<TableDataSource<Subject>>  {
  private dataSource: TableDataSource<Subject>;
  constructor(private _categoryService: SubjectService, private router: Router) { }
  // tslint:disable-next-line: max-line-length
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): TableDataSource<Subject> | Observable<TableDataSource<Subject>> | Promise<TableDataSource<Subject>> {
    this.dataSource = new TableDataSource(this._categoryService);
    const filter: string = route.queryParamMap.get('filter') || '';
    const pageIndex: number = +route.queryParamMap.get('pageIndex') || 0;
    const pageSize: number = +route.queryParamMap.get('pageSize') || 10;
    return this.dataSource.load(
      filter,
      'id',
      'asc',
      pageIndex,
      pageSize
    ).then((data) => {
        return this.dataSource;
      });
  }
}
