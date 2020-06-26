import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { fromEvent, merge } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';

import Swal from 'sweetalert2';
import { UserDetailComponent } from '../user-detail/user-detail.component';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../../../../services/notification.service';
import { UserService } from '../user.service';

import { User } from '../user.model';
import { MatTableDataSource } from '@angular/material/table';
import { validRoles } from '../../../../utils/enums';
import { UserTableComponent } from '../user-table/user-table.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, AfterViewInit {
  @ViewChild(UserTableComponent, { static: true }) userTable: UserTableComponent;
  role =  validRoles.Admin;
  dataSource: MatTableDataSource<User>;
  displayedColumns: string[] = [
    'img',
    'firstname',
    'lastname',
    'email',
    'roles',
    'active',
    'actions',
  ];
  constructor(
    private dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    public notificationService: NotificationService,
    public _userService: UserService,
  ) {
    // _userService.url = '/api/user';
    // this.dataSource = this.route.snapshot.data['users'];
    // this.route.data.subscribe((data: {users: TableDataSource<User>}) => {
    //   this.dataSource = data.users;
    // });
  }

  ngOnInit() {
  }
  onCreate() {
    const dialogRef = this.dialog.open(
      UserDetailComponent,
      this.dialogConfig({isAdmin: false}),
    );
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.userTable.loadTable();
      }
    });
  }
  onCreateAdmin() {
    const dialogRef = this.dialog.open(
      UserDetailComponent,
      this.dialogConfig({isAdmin: true}),
    );
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.userTable.loadTable();
      }
    });
  }

  ngAfterViewInit() {}


  dialogConfig(data?) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '700px';
    dialogConfig.data = data || null;
    return dialogConfig;
  }

}
