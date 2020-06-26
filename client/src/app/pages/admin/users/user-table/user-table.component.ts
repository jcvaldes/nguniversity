import { validRoles } from './../../../../utils/enums';
import { AfterViewInit, Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { UserDetailComponent } from '../user-detail/user-detail.component';
import { NotificationService } from '../../../../services/notification.service';
import { User } from '../user.model';
import { HttpService } from '../../../../services/http.service';
import { environment } from '../../../../../environments/environment';
import { MatTableDataSource } from '@angular/material/table';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {
  @Input() role: number;
  dataSource: MatTableDataSource<User>;
  displayedColumns: string[] = [
    'img',
    'firstname',
    'lastname',
    'email',
    'roles',
    'actions',
  ];
  url: string;
  constructor(
    private dialog: MatDialog,
    public notificationService: NotificationService,
    public _httpService: HttpService,
  ) {
    this.url = `${environment.apiUrl}/api/user`;
  }
  ngOnInit() {
    this.loadTable();
  }

  loadTable() {
    this._httpService.get(this.url, [
      validRoles.Admin,
      validRoles.Profesor,
      validRoles.Alumno
    ]).subscribe(users => {
      this.dataSource = users;
    });
  }

  onEdit(row) {
    // const dialogRef = this.dialog.open(
    //   UserDetailComponent,
    //   this.dialogConfig(row),
    // );
    // dialogRef.afterClosed().subscribe((result) => {
    //   this.userTable.loadTable();
    // });
  }
  onDelete(id) {
    Swal.fire({
      title: '¿Está seguro?',
      text: 'Estás a punto de desactivar un Usuario?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, Desactivar!',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.value) {
        this._httpService.delete(`${this.url}/${id}`).subscribe(
          () => {
            this.notificationService.success(
              'El usuario seleccionado ha sido Eliminado',
            );
            this.loadTable();
          },
          (err) => {
            console.log(err);
          },
        );
      }
    });
  }
}
