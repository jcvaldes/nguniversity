import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../../users/user.service';
import { Subject } from '../subject.model';
import { HttpService } from '../../../../services/http.service';

@Injectable({
  providedIn: 'root'
})
export class SubjectSingleResolverGuard implements Resolve<Subject>  {
  constructor(private httpService: HttpService, private userService: UserService) {
    this.httpService.url = `/api/subject`;
  }
  // tslint:disable-next-line: max-line-length
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Subject | Observable<Subject> | Promise<Subject> {
    const id: number = +route.paramMap.get('id');
    return this.httpService.getSingle(id);
  }
}
