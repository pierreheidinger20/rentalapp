import { Component, OnInit } from '@angular/core';
import { RentalService } from '../rental.service';
import { AppState } from 'src/app/app.reducer';
import { Store } from '@ngrx/store';
import { Rental } from '../rental.model';

@Component({
  selector: 'app-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.css']
})
export class RentalListComponent implements OnInit {

  rentals:Rental[] = [];
  constructor(private _store:Store<AppState>,
              private _rentalService:RentalService) { }

  ngOnInit(): void {
    this._rentalService.getRentals();
    this._store.select('rentals').subscribe(rentals => this.rentals = rentals);
  }

}
