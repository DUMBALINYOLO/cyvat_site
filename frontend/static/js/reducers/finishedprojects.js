import { GET_FINISHED_PROJECTS, GET_FINISHED_PROJECT } from '../actions/types.js';

const initialState = {
    finishedprojects: [],
    finishedproject: [],
}


export default function(state = initialState, action){
    switch(action.type){
        case GET_FINISHED_PROJECTS:
            return {
                ...state,
                finishedprojects: action.payload
            };
        case GET_FINISHED_PROJECT:
            return {
                ...state,
                finishedproject: action.payload
            };
        default:
            return state;
    }
}
