import { environment } from './../../../../../environments/environment';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { fromEvent, merge } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';

import Swal from 'sweetalert2';
import { CourseDetailComponent } from '../course-detail/course-detail.component';
import { Course } from '../course.model';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../../../services/http.service';
import { UserService } from '../../users/user.service';
import { NotificationService } from '../../../../services/notification.service';
import { SelectionModel } from '@angular/cdk/collections';
import { validRoles } from '../../../../utils/enums';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit, AfterViewInit {
  @Input() role;
  @Output() coursesEnrolled: EventEmitter<Course[]> = new EventEmitter<Course[]>();
  dataSource: MatTableDataSource<Course>;
  selected: Course[] = [];
  url: string;
  displayedColumns: string[] = [

    'name',
    'period',
    'capacity',
    'active',

  ];
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild('input', { static: true }) input: ElementRef;
  filter: string;
  selection = new SelectionModel<Course>(true, []);
  constructor(
    private dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private notificationService: NotificationService,
    private _httpService: HttpService,
  ) {
    this.url = `${environment.apiUrl}/api/user`;
    this.role = this.role || 1;
    debugger
    if (this.role === validRoles.Admin) {
      this.displayedColumns.push('actions');
    }
    if (this.role === validRoles.Alumno) {
      this.displayedColumns.unshift('select');
    }

    // this.route.data.subscribe((data: { courses: TableDataSource<Course> }) => {
    //   this.dataSource = data.courses;
    // });
  }

  ngOnInit() {
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
   // const numRows = this.dataSource.payloadSubject.value.length;
   // return numSelected === numRows;
  }
  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    // this.isAllSelected() ?
    //   this.selection.clear() :
     //  this.dataSource.payloadSubject.value.forEach(row => this.selection.select(row));
  }

  addElement(element) {
    if (!this.isChecked(element)) {
      this.selected.push(element);
    } else {
      this.selected.splice(this.selected.indexOf(element), 1);
    }
  }
  isChecked(element) {
    return this.selected.includes(element);
  }

  enroll() {
    this.coursesEnrolled.emit(this.selected);
  }
  onCreate() {
    const dialogRef = this.dialog.open(
      CourseDetailComponent,
      this.dialogConfig(),
    );
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadPage('asc');
      }
    });
  }
  onEdit(row) {
    const dialogRef = this.dialog.open(
      CourseDetailComponent,
      this.dialogConfig(row),
    );
    dialogRef.afterClosed().subscribe((result) => {
      this.loadPage(this.sort.direction);
    });
  }
  onDelete(id) {
    // Swal.fire({
    //   title: '¿Está seguro?',
    //   text: 'Estás a punto de desactivar un Rol',
    //   icon: 'warning',
    //   showCancelButton: true,
    //   confirmButtonText: 'Sí, Desactivar!',
    //   cancelButtonText: 'No',
    // }).then((result) => {
    //   if (result.value) {
    //     this._httpService.delete<Course>(id).subscribe(
    //       (resp: any) => {
    //         this.notificationService.success(
    //           'El rol seleccionado ha sido Eliminado',
    //         );
    //         this.loadPage();
    //       },
    //       (err) => {
    //         console.log(err);
    //         Swal.fire({
    //           title: 'Reglas de Validación',
    //           text: err,
    //           icon: 'error',
    //           showConfirmButton: false,
    //           timer: 2000,
    //           animation: false,
    //         });
    //       },
    //     );
    //   }
    // });
  }


  ngAfterViewInit() {
  }
  loadPage(direction = this.sort.direction) {
  
  }

  dialogConfig(data?) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '700px';
    dialogConfig.data = data || null;
    return dialogConfig;
  }

}
