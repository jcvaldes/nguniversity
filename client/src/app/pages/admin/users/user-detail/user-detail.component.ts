import { AngularFireStorage } from 'angularfire2/storage';
import { environment } from './../../../../../environments/environment';
import { Component, OnInit, OnDestroy, Inject, Output, EventEmitter, Injector } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as _ from 'lodash';

import { Subscription, throwError } from 'rxjs';
import { User } from '../user.model';
import { NotificationService } from '../../../../services/notification.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs/internal/Observable';
import { finalize, catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})

export class UserDetailComponent implements OnInit, OnDestroy {
  user: User;
  role: any;
  loading = false;
  url: string;
  file: File;
  isAdmin = false;
  uploadPercent: Observable<number>;
  urlImage: Observable<string>;
  userSubscription: Subscription = new Subscription();
  form: FormGroup;
  constructor(
    private notificationService: NotificationService,
    private _userService: UserService,
    private dialogRef: MatDialogRef<UserDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router,
    private storage: AngularFireStorage
  ) {
    this.url = `${environment.apiUrl}/api/user`;
    if (data) {
      this.isAdmin = data.isAdmin;
    }
    this.role = _userService.getRole();
    this.form = new FormGroup({
      id: new FormControl(null),
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      confirmPassword: new FormControl(null, Validators.required),
      role: new FormControl(this.isAdmin ? 1 : null, Validators.required)
    });
  }
  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
  ngOnInit() { }
  onClear() {
    this.onClose();
  }
  onClose(refresh?) {
    this.dialogRef.close(refresh);
  }
  onSubmit() {
    this.loading = true;
    this.upload((img) => {
      if (this.form.valid) {
        if (!this.form.get('id').value) {
          this._userService.post(this.url, {
            ...this.form.value,
            img
          }).subscribe(
            () => {
              this.loading = false;
              this.onClose(true);
              this.notificationService.success(':: El usuario ha sido creado');
            },
            (err) => {
              this.notificationService.error(`:: ${err}`);
            },
          );
        } // else {
        //   this._userService.update<User>(this.form.value).subscribe(
        //     () => {
        //       this.onClose(true);
        //       this.notificationService.success(
        //         ':: El usuario ha sido actualizado',
        //       );
        //     },
        //     (err) => {
        //       this.notificationService.error(`:: ${err}`);
        //     },
        //   );
        // }
      }
    });

  }
  initializeFormGroup() {
    this.form.setValue({
      id: null,
      description: '',
      active: true,
    });
  }
  populateForm(data) {
    // this.userSubscription = this._userService
    //   .getSingle<User>(data.id)
    //   .subscribe((res: any) => {
    //     this.user = res.payload;
    //   });
  }
  onChange(e) {
    this.file = e.target.files[0];
  }
  upload(cb) {
    // console.log('subir', e.target.files[0]);
    const id = Math.random().toString(36).substring(2);
    const file = this.file;
    const filePath = `uploads/profile_${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges()
      .pipe(finalize(() => {
        debugger
        this.urlImage = ref.getDownloadURL();
        this.urlImage.subscribe(data => {
          cb(data);
        });
      })).subscribe();
  }
}
