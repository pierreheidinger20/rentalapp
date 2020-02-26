import { createAction , Action } from '@ngrx/store';
import { UserRental } from './user-rental.model';

export const LIST_USERS = '[Users Rental Component List]'

export class ListUserAction implements Action{
    readonly type = LIST_USERS;
    constructor(public usersRental:UserRental[]){};
}

export type actions = ListUserAction;