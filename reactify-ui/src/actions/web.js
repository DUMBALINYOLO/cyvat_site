import axios from 'axios';
import {
    GET_PORTFOLIOS,
    GET_GALLERY,
    GET_GALLERIES,
    GET_PERSONELS, 
    GET_BOARD_MEMBERS,
    GET_PARTNERS,
    GET_NEWSLETTER,
    GET_NEWSLETTERS,
    GET_FINISHED_PROJECT,
    GET_FINISHED_PROJECTS,
    GET_ONGOING_PROJECT, 
    GET_ONGOING_PROJECTS,
    GET_PRINCIPLES

    
} from "./types";




import { 
	faqsURL,
	principlesURL,
	portfoliosURL,
	galleriesURL,
	personelsURL,
	boardmembersURL,
	partnersURL,
	newslettersURL,
    ongoingProjectsURL,
    finishedProjectsURL,
	
} from '../constants';


export const getPrinciples = () => dispatch => {
    axios.get(principlesURL)
        .then(res => {
            dispatch({
                type: GET_PRINCIPLES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getPortFolios = () => dispatch => {
    axios.get(portfoliosURL)
        .then(res => {
            dispatch({
                type: GET_PORTFOLIOS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const getPersonels = () => dispatch => {
    axios.get(personelsURL)
        .then(res => {
            dispatch({
                type: GET_PERSONELS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const getBoardMembers = () => dispatch => {
    axios.get(boardmembersURL)
        .then(res => {
            dispatch({
                type: GET_BOARD_MEMBERS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const getPartners = () => dispatch => {
    axios.get(partnersURL)
        .then(res => {
            dispatch({
                type: GET_PARTNERS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const getNewsLetters = () => dispatch => {
    axios.get(newslettersURL)
        .then(res => {
            dispatch({
                type: GET_NEWSLETTERS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const getOngoingProjects = () => dispatch => {
    axios.get(ongoingProjectsURL)
        .then(res => {
            dispatch({
                type: GET_ONGOING_PROJECTS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const getFinishedProjects = () => dispatch => {
    axios.get(finishedProjectsURL)
        .then(res => {
            dispatch({
                type: GET_FINISHED_PROJECTS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}




export const getNewsLetter = id => dispatch =>{
      axios.get(`http://127.0.0.1:8000/api/pages/newsletters/${id}`)
        .then(res => {
            dispatch({
                type: GET_NEWSLETTER,
                payload: res.data
            });
        }).catch(err => console.log(err))

}


export const getOngoingProject = id => dispatch =>{
      axios.get(`http://127.0.0.1:8000/api/pages/ongoing-projects/${id}`)
        .then(res => {
            dispatch({
                type: GET_ONGOING_PROJECT,
                payload: res.data
            });
        }).catch(err => console.log(err))

}


export const getFinishedProject = id => dispatch =>{
      axios.get(`http://127.0.0.1:8000/api/pages/finished-projects/${id}`)
        .then(res => {
            dispatch({
                type: GET_ONGOING_PROJECT,
                payload: res.data
            });
        }).catch(err => console.log(err))

}









