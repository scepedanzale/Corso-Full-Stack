import { applyMiddleware, combineReducers, createStore } from "redux";
import {thunk} from 'redux-thunk'
import jobs from "../reducers/jobs";
import favourites from "../reducers/favourites";

const state = {
    favourites: [],
    jobs: {
        results: [],
        loading: false,
        errMsg: false
    }
}

const bigReducer = combineReducers({
    favourites: favourites,
    jobs: jobs
})

export const store = createStore(bigReducer, state, applyMiddleware(thunk))