import axios from "axios";
import {
    GET_ONETIER_TRANSACTIONS_ADMIN_VIEW,
    GET_ONETIER_TRANSACTION_ADMIN_VIEW,
    EDIT_ONETIER_TRANSACTION_ADMIN_VIEW,
    ADD_ONETIER_TRANSACTION_ADMIN_VIEW,
    GET_TWOTIER_TRANSACTIONS_ADMIN_VIEW,
    GET_TWOTIER_TRANSACTION_ADMIN_VIEW,
    EDIT_TWOTIER_TRANSACTION_ADMIN_VIEW,
    ADD_TWOTIER_TRANSACTION_ADMIN_VIEW,
    GET_CANCELLED_TRANSACTIONS_ADMIN_VIEW,
    GET_ARCHIVED_TRANSACTIONS_ADMIN_VIEW,
    GET_CANCELLED_TRANSACTION_ADMIN_VIEW,
    GET_ARCHIVED_TRANSACTION_ADMIN_VIEW,
    GET_LOADING_POINTS,
    ADD_LOADING_POINT,
    EDIT_LOADING_POINT,
} from '../types/transactionTypes';

import {
    loadingpointsURL,
    adminarchivedtransactionsURL,
    admincancelledtransactionsURL,
    admintwotiertransactionsURL,
    adminonetiertransactionsURL,

} from '../constants';


export const getOneTierTransactionsAdminView = () => dispatch => {
    axios.get(adminonetiertransactionsURL)
        .then(res => {
            dispatch({
                type: GET_ONETIER_TRANSACTIONS_ADMIN_VIEW,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const addOneTierTransactionAdminView = (transaction) => dispatch => {
    axios.post(adminonetiertransactionsURL, transaction)
        .then(res => {
            dispatch({
                type: ADD_ONETIER_TRANSACTION_ADMIN_VIEW,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//get
export const getOneTierTransactionAdminView = id => dispatch =>{
      axios.get(`http://127.0.0.1:8000/api/transactions/admin-onetier-transactions/${id}`)
        .then(res => {
            dispatch({
                type: GET_ONETIER_TRANSACTION_ADMIN_VIEW,
                payload: res.data
            });
        }).catch(err => console.log(err))

}

//Edit
export const editOneTierTransactionAdminView = (id, transaction) => dispatch => {
    axios.patch(`http://127.0.0.1:8000/api/transactions/admin-onetier-transactions/${id}`, transaction)
        .then(res => {
            dispatch({
                type: EDIT_ONETIER_TRANSACTION_ADMIN_VIEW,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const getTwoTierTransactionsAdminView = () => dispatch => {
    axios.get(admintwotiertransactionsURL)
        .then(res => {
            dispatch({
                type: GET_TWOTIER_TRANSACTIONS_ADMIN_VIEW,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const addTwoTierTransactionAdminView = (transaction) => dispatch => {
    axios.post(admintwotiertransactionsURL, transaction)
        .then(res => {
            dispatch({
                type: ADD_TWOTIER_TRANSACTION_ADMIN_VIEW,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//get
export const getTwoTierTransactionAdminView = id => dispatch =>{
      axios.get(`http://127.0.0.1:8000/api/transactions/admin-twotier-transactions/${id}`)
        .then(res => {
            dispatch({
                type: GET_TWOTIER_TRANSACTION_ADMIN_VIEW,
                payload: res.data
            });
        }).catch(err => console.log(err))

}

//Edit
export const editTwoTierTransactionAdminView = (id, transaction) => dispatch => {
    axios.patch(`http://127.0.0.1:8000/api/transactions/admin-twotier-transactions/${id}/`, transaction)
        .then(res => {
            dispatch({
                type: EDIT_TWOTIER_TRANSACTION_ADMIN_VIEW,
                payload: res.data
            });
        }).catch(err => console.log(err))
}




//get

export const getCancelledTransactionsAdminView = () => dispatch => {
    axios.get(admincancelledtransactionsURL)
        .then(res => {
            dispatch({
                type: GET_CANCELLED_TRANSACTIONS_ADMIN_VIEW,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const getCancelledTransactionAdminView = id => dispatch =>{
    axios.get(`http://127.0.0.1:8000/api/transactions/admin-cancelled-transactions/${id}`)
      .then(res => {
          dispatch({
              type: GET_CANCELLED_TRANSACTION_ADMIN_VIEW,
              payload: res.data
          });
      }).catch(err => console.log(err))

}


export const getArchivedTransactionsAdminView = () => dispatch => {
    axios.get(adminarchivedtransactionsURL)
        .then(res => {
            dispatch({
                type: GET_ARCHIVED_TRANSACTIONS_ADMIN_VIEW,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const getArchivedTransactionAdminView = id => dispatch =>{
    axios.get(`http://127.0.0.1:8000/api/transactions/admin-archived-transactions/${id}`)
      .then(res => {
          dispatch({
              type: GET_ARCHIVED_TRANSACTION_ADMIN_VIEW,
              payload: res.data
          });
      }).catch(err => console.log(err))

}


export const getLoadingPoints = () => dispatch => {
    axios.get(loadingpointsURL)
        .then(res => {
            dispatch({
                type: GET_LOADING_POINTS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const addLoadingPoint = (point) => dispatch => {
    axios.post(loadingpointsURL, point)
        .then(res => {
            dispatch({
                type: ADD_LOADING_POINT,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


//Edit
export const editLoadingPoint= (id, point) => dispatch => {
    JSON.stringify(id, null, 3)
    axios.patch(`http://127.0.0.1:8000/api/transactions/loading-points/${id}/`,point)
        .then(res => {
            dispatch({
                type: EDIT_LOADING_POINT,
                payload: res.data
            });
        }).catch(err => console.log(err))
}





