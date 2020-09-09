import { GET_ONGOING_PROJECTS, GET_ONGOING_PROJECT } from '../actions/types.js';

const initialState = {
    ongoingprojects: [],
    ongoingproject: [],
}


export default function(state = initialState, action){
    switch(action.type){
        case GET_ONGOING_PROJECTS:
            return {
                ...state,
                ongoingprojects: action.payload
            };
        case GET_ONGOING_PROJECT:
            return {
                ...state,
                ongoingproject: action.payload
            };
        default:
            return state;
    }
}
