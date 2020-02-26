import { Component, OnInit } from '@angular/core';
import { FormControl, Form, Validators } from '@angular/forms';
import { Observable, of, from } from 'rxjs';
import { map } from 'rxjs/operators'
import 'firebase/firestore';
import { AngularFirestore } from '@angular/fire/firestore';
import { Rental } from './rental.model';

@Component({
  selector: 'app-monthly-rental',
  templateUrl: './monthly-rental.component.html',
  styleUrls: ['./monthly-rental.component.css']
})
export class MonthlyRentalComponent implements OnInit {


  constructor(private _firestore: AngularFirestore) { 
    
  }

  ngOnInit(): void {
   
  }

}
