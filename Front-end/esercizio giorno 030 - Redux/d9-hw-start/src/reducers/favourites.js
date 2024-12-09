import { ADD_FAVOURITE, REMOVE_FAVOURITE } from "../actions";

export default function favourites(state= [], action) {
    switch(action.type){
        case ADD_FAVOURITE:
            return [...state, action.payload]
            
            
        case REMOVE_FAVOURITE:
            return state.filter(a => a.company_name !== action.payload.company_name)
            
            
        default:
            break;
    }
    return state
}
