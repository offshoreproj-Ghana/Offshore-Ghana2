import { GET_PERSONS, DELETE_PERSON, ADD_PERSON } from '../actions/personAction.js';



const initialState = {
    persons: []
}


export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PERSONS:
            return {
                ...state,
                persons: action.payload
            };
        case DELETE_PERSON:
            return {
                ...state,
                persons: state.persons.filter(person => person.id !== action.payload)
            };

        case ADD_PERSON:
            return {
                ...state,
                persons: [state.persons, action.payload]
            }

        default:
            return state;

    }
}