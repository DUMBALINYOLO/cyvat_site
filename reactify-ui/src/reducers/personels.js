import { GET_PERSONELS } from '../actions/types.js';

const initialState = {
   personels: [],
}


export default function(state = initialState, action){
    switch(action.type){
        case GET_PERSONELS:
            return {
                ...state,
                personels: action.payload
            };
        default:
            return state;
    }
}
