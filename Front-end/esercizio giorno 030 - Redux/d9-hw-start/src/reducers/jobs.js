import { GET_JOBS, IS_LOADING, ERR_MSG } from "../actions";

export default function jobs(state=[], action) {
    switch(action.type){
        case GET_JOBS:
            return {
                ...state,
                results: action.payload
            }
        case IS_LOADING:
            return {
                ...state, 
                loading: action.payload
            }
        case ERR_MSG:
            return{
                ...state,
                errMsg: action.payload
            }
        default:
            break;
    }
    return state
}
