import axios from 'axios';
import {
        ADD_SCALE,
        GET_SCALES,
        GET_SCALE,
        EDIT_SCALE,
        GET_SCALE_INPUT_METHODS,
        GET_SERIAL_PORT_CHOICES
    } from '../types/scaleTypes';
import { scalesURL, scaleinputmethodsURL,serialportschoicesURL } from '../constants';


// Get
export const getScales = () => dispatch => {
    axios.get(scalesURL)
        .then(res => {
            dispatch({
                type: GET_SCALES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


// Add
export const addScale = (scale) => dispatch => {
    axios.post(scalesURL, scale)
        .then(res => {
            dispatch({
                type: ADD_SCALE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//get
export const getScale = id => dispatch =>{
      axios.get(`http://127.0.0.1:8000/api/scale/scales/${id}`)
        .then(res => {
            dispatch({
                type: GET_SCALE,
                payload: res.data
            });
        }).catch(err => console.log(err))

}

// Edit
export const editScale = (id, scale) => dispatch => {
    JSON.stringify(id, null, 3)
    axios.patch(`http://127.0.0.1:8000/api/scale/scales/${id}/`, scale)
        .then(res => {
            dispatch({
                type: EDIT_SCALE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}



export const getScaleInputMethods = () => dispatch => {
    axios.get(scaleinputmethodsURL)
        .then(res => {
            dispatch({
                type: GET_SCALE_INPUT_METHODS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const getSerialPortChoices = () => dispatch => {
    axios.get(serialportschoicesURL)
        .then(res => {
            dispatch({
                type: GET_SERIAL_PORT_CHOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}



