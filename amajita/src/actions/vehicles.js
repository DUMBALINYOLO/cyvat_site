import axios from 'axios';
import {vehiclesURL, vehicletypechoicesURL } from '../constants';
import {
    ADD_VEHICLE,
    EDIT_VEHICLE,
    GET_VEHICLES,
    GET_VEHICLE_TYPE_CHOICES

} from '../types/vehicleTypes';


export const getVehicles = () => dispatch => {
    axios.get(vehiclesURL)
        .then(res => {
            dispatch({
                type: GET_VEHICLES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const getVehicleTypeCchoices = () => dispatch => {
    axios.get(vehicletypechoicesURL)
        .then(res => {
            dispatch({
                type: GET_VEHICLE_TYPE_CHOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}





// Add
export const addVehicle = (vehicle) => dispatch => {
    axios.post(vehiclesURL, vehicle)
        .then(res => {
            dispatch({
                type: ADD_VEHICLE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const editVehicle = (id, vehicle) => dispatch => {
    axios.patch(`http://127.0.0.1:8000/api/vehicles/vehicles/${id}/`, vehicle)
        .then(res => {
            dispatch({
                type: EDIT_VEHICLE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


