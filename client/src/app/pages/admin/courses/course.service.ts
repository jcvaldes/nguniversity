import { Injectable } from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { HttpClient } from '@angular/common/http';
import urljoin from 'url-join';
import { environment } from '../../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CourseService extends HttpService{
  constructor(
    public http: HttpClient
  ) {
    super(http);
    this.url = urljoin(environment.apiUrl, '/api/course');
  }
}
