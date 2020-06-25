import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import * as _ from 'lodash';
import urlJoin from 'url-join';
import { Subscription } from 'rxjs';
import { Calification } from './calification.model';
import { NotificationService } from '../../../services/notification.service';
import { CalificationService } from './calification.service';


declare var $: any;
@Component({
  selector: 'app-calification-detail',
  templateUrl: './calification-detail.component.html',
  styleUrls: ['./calification-detail.component.scss']
})
export class CalificationDetailComponent implements OnInit, OnDestroy {
  Calification: Calification;
  CalificationSubscription: Subscription = new Subscription();
  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    califications: new FormControl([], Validators.required),
    // StudentId: new FormControl(null, Validators.required),
    // TeacherId: new FormControl(null, Validators.required),
    // CourseId: new FormControl(null, Validators.required),

  });
  constructor(
    private notificationService: NotificationService,
    private dialogRef: MatDialogRef<CalificationDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _httpService: CalificationService,
  ) {
    if (data) {
      this.populateForm(data);
    }
  }
  ngOnDestroy() {
    this.CalificationSubscription.unsubscribe();
  }
  get califications() {
    return this.form.get('califications') as FormArray;
  }
  addCalification() {
    this.califications.push(
      new FormControl(null, Validators.required)
    );
  }
  ngOnInit() { }
  onClear() {
    this.onClose();
  }
  onClose(refresh?) {
    this.dialogRef.close(refresh);
  }
  onSubmit() {
    if (this.form.valid) {
      if (!this.form.get('id').value) {
        this._httpService.add<Calification>(this.form.value).subscribe(
          (resp: any) => {
            this.onClose(true);
            this.notificationService.success(':: La materia ha sido creada');
          },
          (err) => {
            this.notificationService.error(`:: ${err}`);
          },
        );
      } else {
        this._httpService.update<Calification>(this.form.value).subscribe(
          (Calification) => {
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
    this.CalificationSubscription = this._httpService
      .getSingle<Calification>(data.id)
      .subscribe((res: any) => {
        this.Calification = res.payload;
        this.form.get('id').setValue(this.Calification.id);
 
      }, err => this.notificationService.error(`:: ${err}`));
  }
}
