import { Component, OnInit, Input } from '@angular/core';
import { Rental } from '../rental.model';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

  @Input() rental:Rental;

  constructor() { }

  ngOnInit(): void {
  }

}
