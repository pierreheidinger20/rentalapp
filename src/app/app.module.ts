import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input'; 
import {MatDialogModule} from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MonthlyRentalComponent } from './monthly-rental/monthly-rental.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { NavbarComponent } from './monthly-rental/navbar/navbar.component';
import { RentalListComponent } from './monthly-rental/rental-list/rental-list.component';
import { RentalComponent } from './monthly-rental/rental/rental.component';
import { UsersRentalComponent } from './monthly-rental/users-rental/users-rental.component';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './app.reducer';
import { RentalAddComponent } from './monthly-rental/rental-add/rental-add.component';

@NgModule({
  declarations: [
    AppComponent,
    MonthlyRentalComponent,
    NavbarComponent,
    RentalListComponent,
    RentalComponent,
    UsersRentalComponent,
    RentalAddComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    StoreModule.forRoot(appReducer),
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
