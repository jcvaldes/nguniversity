import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import * as _ from 'lodash';
import urlJoin from 'url-join';
import { Subscription } from 'rxjs';
import { Subject } from '../subject.model';
import { NotificationService } from '../../../../services/notification.service';
import { SubjectService } from '../subject.service';

declare var $: any;
@Component({
  selector: 'app-subject-detail',
  templateUrl: './subject-detail.component.html',
  styleUrls: ['./subject-detail.component.scss']
})
export class SubjectDetailComponent implements OnInit, OnDestroy {
  Subject: Subject;
  SubjectSubscription: Subscription = new Subscription();
  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl(null, Validators.required),
    period: new FormControl(null, Validators.required),
    capacity: new FormControl(30, Validators.required),
    active: new FormControl(true),
  });
  constructor(
    private notificationService: NotificationService,
    private dialogRef: MatDialogRef<SubjectDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _httpService: SubjectService,
  ) {
    if (data) {
      this.populateForm(data);
    }
  }
  ngOnDestroy() {
    this.SubjectSubscription.unsubscribe();
  }
  ngOnInit() {}
  onClear() {
    this.onClose();
  }
  onClose(refresh?) {
    this.dialogRef.close(refresh);
  }
  onSubmit() {
    if (this.form.valid) {
      if (!this.form.get('id').value) {
        this._httpService.add<Subject>(this.form.value).subscribe(
          (resp: any) => {
            this.onClose(true);
            this.notificationService.success(':: La especialidad ha sido creado');
          },
          (err) => {
            this.notificationService.error(`:: ${err}`);
          },
        );
      } else {
        this._httpService.update<Subject>(this.form.value).subscribe(
          (Subject) => {
            this.onClose(true);
            this.notificationService.success(
              ':: La especialidad ha sido actualizado',
            );
          },
          (err) => {
            this.notificationService.error(`:: ${err}`);
          },
        );
      }
    }
  }
  initializeFormGroup() {
    this.form.setValue({
      id: null,
      description: '',
      active: true,
    });
  }
  populateForm(data) {
    this.SubjectSubscription = this._httpService
      .getSingle<Subject>(data.id)
      .subscribe((res: any) => {
        this.Subject = res.payload;
        this.form.get('id').setValue(this.Subject.id);
        this.form.get('name').setValue(this.Subject.name);
        this.form.get('active').setValue(this.Subject.active);
      }, err => this.notificationService.error(`:: ${err}`));
  }
}
