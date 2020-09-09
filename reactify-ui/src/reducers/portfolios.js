import { GET_PORTFOLIOS } from '../actions/types.js';

const initialState = {
   portfolios: [],
}


export default function(state = initialState, action){
    switch(action.type){
        case GET_PORTFOLIOS:
            return {
                ...state,
                portfolios: action.payload
            };
        default:
            return state;
    }
}
