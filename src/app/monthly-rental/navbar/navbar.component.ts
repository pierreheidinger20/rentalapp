import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { UsersRentalComponent } from '../users-rental/users-rental.component';
import { RentalAddComponent } from '../rental-add/rental-add.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public _dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onClickOpenListUsers()
  {
    this._dialog.open(UsersRentalComponent,{
      width:'550px'
    });
  }

  onClickOpenNewPay()
  {
    this._dialog.open(RentalAddComponent,{
      width:'80%',
      maxHeight: '90vh' 
    });
  }

}
