import axios from 'axios';
import { GET_PERSONS, DELETE_PERSON, ADD_PERSON } from './personAction';


// Grab persons from backend


export const getPersons = () => dispatch => {
    axios.get('/aboutuser/Person/')
        .then(response => {
            dispatch({
                type: GET_PERSONS,
                payload: response.data
            })
        }).catch(err => console.log(err));
};


//DELETE A USER INFO
export const deletePerson = (id) => dispatch => {
    axios.delete(`/aboutuser/Person/${id}/`)
        .then(response => {
            dispatch({
                type: DELETE_PERSON,
                payload: id
            })
        }).catch(err => console.log(err));
}


//CREATE A NEW USER INFO

export const createPersons = (person) => dispatch => {
    axios.post('/aboutuser/Person/', person)
        .then(response => {
            dispatch({
                type: ADD_PERSON,
                payload: response.data
            })
        }).catch(err => console.log(err));
};