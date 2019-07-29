import {FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE, DELETE_USER_SUCCESS, FETCH_USERS_LOADING} from './actions/actionTypes';

const initialState = {
    items: [],
    loading: false,
    error: null
}

export default function userReducer(state = initialState, action) {
    switch(action.type){
        case FETCH_USERS_LOADING: 
            return {
                ...state,
                loading: true,
                error: null
            }
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                items: action.payload.users
            }
        case FETCH_USERS_FAILURE:
            return {
                ...state,
                error: action.payload.error,
                items: []
            }
        case DELETE_USER_SUCCESS:
            const newList = state.items.filter(user => user.id !== action.payload);
            return {
                ...state,
                error: null,
                items: newList
            }
        default: 
            return state;
    }
}