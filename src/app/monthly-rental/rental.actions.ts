import { createAction , Action } from '@ngrx/store';
import { Rental } from './rental.model';

export const LIST_RENTALS = '[Rental Component List]'

export class ListRentalsAction implements Action{
    readonly type = LIST_RENTALS;
    constructor(public rentals:Rental[]){};
}

export type actions = ListRentalsAction;