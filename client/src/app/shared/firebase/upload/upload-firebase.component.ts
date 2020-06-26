
import { Component, OnInit} from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-upload-firebase',
  templateUrl: './upload-firebase.component.html',
  styles: [
  ]
})
export class UploadFirebaseComponent {
  uploadPercent: Observable<number>;
  urlImage: Observable<string>;
  constructor( ) { 
    debugger
  }

  onUpload(e) {
    // console.log('subir', e.target.files[0]);
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `uploads/profile_${id}`;
    // const ref = this.storage.ref(filePath);
    // const task = this.storage.upload(filePath, file);
    // this.uploadPercent = task.percentageChanges();
    // task.snapshotChanges()
    //   .pipe(finalize(() => this.urlImage = ref.getDownloadURL() )).subscribe();
  }
}
