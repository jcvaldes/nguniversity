import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PagesComponent } from './pages.component';
import { AngularFireModule } from 'angularfire2';

import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../../environments/environment.prod';

@NgModule({
  declarations: [
    DashboardComponent,
 
    PagesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    PagesRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
  ],
  exports: [DashboardComponent],
  providers: [AngularFireAuth, AngularFirestore]
})
export class PagesModule { }
