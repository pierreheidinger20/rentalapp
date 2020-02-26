import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserRental } from './user-rental.model';
import { ListUserAction } from './users.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _store:Store<AppState>,
              private _firestore: AngularFirestore) { }


  getUsers()
  {
    this._firestore.collection("users")
               .snapshotChanges()
               .pipe(
                 map(data => {
                   return data.map(doc => {
                        return {
                          uid: doc.payload.doc.id,
                          data: doc.payload.doc.data()                         
                        };
                   });
                 })
               )
               .subscribe((collections:any[]) =>{
                  let users = collections.map(collection => new UserRental(collection.uid,collection.data));
                  const action = new ListUserAction(users);

                  this._store.dispatch(action);
               });
  };

}
