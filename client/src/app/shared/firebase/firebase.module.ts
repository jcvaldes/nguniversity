import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AngularFireModule } from 'angularfire2';

import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { UploadFirebaseComponent } from './upload/upload-firebase.component';
import { environment } from '../../../environments/environment.prod';

@NgModule({
  declarations: [
    UploadFirebaseComponent
  ],
  imports: [
    CommonModule,

    FormsModule,

    ReactiveFormsModule,

    RouterModule,

    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
  ],
  exports: [UploadFirebaseComponent],
  providers: [AngularFireAuth, AngularFirestore]
})
export class FirebaseModule {}
