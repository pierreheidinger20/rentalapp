import * as fromUsersReducer from './monthly-rental/users-rental/users.reducer';
import * as fromRentalReducer from './monthly-rental/rental.reducer';
import { UserRental } from './monthly-rental/users-rental/user-rental.model';
import { ActionReducer, ActionReducerMap } from '@ngrx/store';
import { Rental } from './monthly-rental/rental.model';

export interface AppState {
    usersRental: UserRental[];
    rentals: Rental[]
}

export const appReducer:ActionReducerMap<AppState> = {
    usersRental: fromUsersReducer.usersRentalReducer,
    rentals:fromRentalReducer.rentalReducer
}