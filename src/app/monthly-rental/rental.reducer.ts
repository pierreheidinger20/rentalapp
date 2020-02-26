import * as fromActions from './rental.actions'
import { Rental } from './rental.model'

const initState :Rental [] = [];

export function rentalReducer(state = initState,action:fromActions.actions):Rental[]{

    switch(action.type)
    {   
        case fromActions.LIST_RENTALS:
            return action.rentals.map(rentals =>{
                return {
                    ...rentals
                };
            });
        default:
            return state;
    }

}