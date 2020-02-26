import { UserRental } from "./user-rental.model";

import * as fromActions from './users.actions'

const initState :UserRental[] = [];

export function usersRentalReducer(state = initState,action:fromActions.actions):UserRental[]{

    switch(action.type)
    {   
        case fromActions.LIST_USERS:
            return action.usersRental.map(users =>{
                return {
                    ...users
                };
            });
        default:
            return state;
    }

}