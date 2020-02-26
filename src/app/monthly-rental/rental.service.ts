import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Rental } from './rental.model';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { ListRentalsAction } from './rental.actions';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  constructor(private _firestore: AngularFirestore,
              private _store: Store<AppState>) { }

  getRentals(){

    this._firestore.collection('rentals').valueChanges().subscribe((rentals:any) => {

      const action = new ListRentalsAction(rentals);
      this._store.dispatch(action);

    })
  }

  addRental(rental:Rental)
  {
    var number = Math.round((Math.random() * 1000));
    var documentName = `${rental.name}${rental.month}${rental.year}${number}`;


    var obj = {
      name:rental.name,
      month:rental.month,
      year:rental.year,
      registerDate: rental.registerDate,
      rentalPayments:rental.rentalPayments.map((obj)=> {return Object.assign({}, obj)}),
      fullPaymentRental:rental.fullPaymentRental,
      otherPayments:rental.otherPayments.map((obj)=> {return Object.assign({}, obj)}),
      fullPaymentsOthers:rental.fullPaymentsOthers,
      usersPayments : rental.usersPayments.map((obj)=> {return Object.assign({}, obj)}),
    }
    console.log(obj);
    return this._firestore.collection('rentals').add({...obj});
  };

}
