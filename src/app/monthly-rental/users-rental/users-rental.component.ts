import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from './users.service';
import { UserRental } from './user-rental.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users-rental',
  templateUrl: './users-rental.component.html',
  styleUrls: ['./users-rental.component.css']
})
export class UsersRentalComponent implements OnInit, OnDestroy {

  usersSubscription:Subscription;
  users:UserRental[]=[];

  constructor(private _store:Store<AppState>,
              private _usersService :UsersService) { }

  ngOnInit(): void {

    this.usersSubscription = this._store.select('usersRental').subscribe( users => this.users = users);
    this._usersService.getUsers();
  }

  ngOnDestroy():void{
    this.usersSubscription.unsubscribe();
  }

}
