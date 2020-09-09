import { combineReducers } from 'redux';
import portfolios from "./portfolios";
import personels from "./personels";
import boardmembers from "./boardmembers";
import partners from "./partners";
import newsletters from "./newsletters";
import ongoingprojects from "./ongoingprojects";
import finishedprojects from "./finishedprojects";



export default combineReducers({
    portfolios,
    personels,
    boardmembers,
    partners,
    newsletters,
    ongoingprojects,
    finishedprojects,

});
