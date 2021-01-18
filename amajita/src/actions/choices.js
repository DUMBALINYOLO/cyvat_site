import axios from 'axios';
import {
    GET_PRODUCT_STATUS_CHOICES,
    GET_HAULIER_STATUS_CHOICES,
    GET_CUSTOMER_STATUS_CHOICES,
    GET_TRANSACTION_TYPE_CHOICES,
    GET_TRANSACTION_STATUS_CHOICES,

} from '../types/choiceTypes';
import { 
    productstatuschoicesURL,
    haulierstatuschoicesURL,
    customerstatuschoicesURL,
    transactionstatuschoicesURL,
    transactiontypechoicesURL,

} from '../constants';

export const getTransactionStatusChoices = () => dispatch => {
    axios.get(transactionstatuschoicesURL)
    .then(res => {
        dispatch({
            type: GET_TRANSACTION_STATUS_CHOICES,
            payload: res.data
        });
    }).catch(err => console.log(err))
}

export const getTransactionTypeChoices = () => dispatch => {
    axios.get(transactiontypechoicesURL)
    .then(res => {
        dispatch({
            type: GET_TRANSACTION_TYPE_CHOICES,
            payload: res.data
        });
    }).catch(err => console.log(err))
}


export const getProductStatusChoices = () => dispatch => {
    axios.get(productstatuschoicesURL)
    .then(res => {
        dispatch({
            type: GET_PRODUCT_STATUS_CHOICES,
            payload: res.data
        });
    }).catch(err => console.log(err))
}

export const getHaulierStatusChoices = () => dispatch => {
    axios.get(haulierstatuschoicesURL)
    .then(res => {
        dispatch({
            type: GET_HAULIER_STATUS_CHOICES,
            payload: res.data
        });
    }).catch(err => console.log(err))
}




export const getCustomerStatusChoices = () => dispatch => {
    axios.get(customerstatuschoicesURL)
    .then(res => {
        dispatch({
            type: GET_CUSTOMER_STATUS_CHOICES,
            payload: res.data
        });
    }).catch(err => console.log(err))
}



