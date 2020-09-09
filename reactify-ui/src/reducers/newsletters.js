import { GET_NEWSLETTERS, GET_NEWSLETTER } from '../actions/types.js';

const initialState = {
    newsletters: [],
    newsletter: [],
}


export default function(state = initialState, action){
    switch(action.type){
        case GET_NEWSLETTERS:
            return {
                ...state,
                newsletters: action.payload
            };
        case GET_NEWSLETTER:
            return {
                ...state,
                newsletter: action.payload
            };
        default:
            return state;
    }
}
