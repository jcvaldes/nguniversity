import { environment } from './../../../../environments/environment';
import { HttpService } from './../../../services/http.service';
import {
  Component,
  OnInit,
} from '@angular/core';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-inscriptions',
  templateUrl: './inscriptions.component.html'
})
export class InscriptionsComponent implements OnInit {
  url: string;
  constructor(public _httpService: HttpService) {
    this.url = `${environment.apiUrl}/api/inscription`;
  }
  ngOnInit() {}
  coursesEnrolled(evt) {
    const courses = evt.map(c => c.id);
    this._httpService.post(this.url, courses).subscribe(data => {
      Swal.fire(
        'Inscripción',
        'Felicitaciones, se ha aprobado tu inscripción',
        'success'
      );
    }, err => {
      Swal.fire(
        'Error',
        err,
        'error'
      );
    });
  }
}
