const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

export const ADD_FAVOURITE = 'ADD_FAVOURITE'
export const REMOVE_FAVOURITE = 'REMOVE_FAVOURITE'
export const GET_JOBS = 'GET_JOBS'
export const IS_LOADING = 'IS_LOADING'
export const ERR_MSG = 'ERR_MSG'

export const addFavourite = (azienda) => {
    return {type: ADD_FAVOURITE, payload: azienda }
}

export const removeFavourite = (azienda) => {
    return {type: REMOVE_FAVOURITE, payload: azienda }
}


export const getJobs =  (query) => {
    return async (dispatch, getState) => {
        try {
            dispatch({type: IS_LOADING, payload: true})
            const response = await fetch(baseEndpoint + query + "&limit=20");
            if (response.ok) {
              const { data } = await response.json();
              dispatch({type: GET_JOBS, payload: data})
              dispatch({type: IS_LOADING, payload: false})
            } else {
              dispatch({type: IS_LOADING, payload: false})
              dispatch({type: ERR_MSG, payload: true})
            }
          } catch (error) {
            console.error(error);
            dispatch({type: IS_LOADING, payload: false})
            dispatch({type: ERR_MSG, payload: true})
          }
       
    }
}