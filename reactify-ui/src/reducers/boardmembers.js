import { GET_BOARD_MEMBERS } from '../actions/types.js';

const initialState = {
   boardmembers: [],
}


export default function(state = initialState, action){
    switch(action.type){
        case GET_BOARD_MEMBERS:
            return {
                ...state,
                boardmembers: action.payload
            };
        default:
            return state;
    }
}
