import { FETCH_USERS_SUCCESS,/*, FETCH_USERS_FAILURE*/
DELETE_USER_SUCCESS, FETCH_USERS_LOADING} from './actions/actionTypes';
import axios from 'axios';

export const fetchUsersLoad = () => ({
    type: FETCH_USERS_LOADING
});

export const fetchUsersSuccess = users => ({
    type: FETCH_USERS_SUCCESS,
    payload: { users }
});

export const deleteUserSuccess = (id) => ({
    type: DELETE_USER_SUCCESS,
    payload: id
})

/*export const fetchUsersFailure = error => ({
    type: FETCH_USERS_FAILURE,
    payload: { error }
});*/

export const fetchUsers = () => {
    return dispatch => {
        dispatch(fetchUsersLoad());
        return axios.get("/user")
        .then( response => {
            dispatch(fetchUsersSuccess(response.data));
        });
    };
}

export const deleteUser = (id) => {
    return dispatch => {
       return axios.delete(`/user/${id}`)
       .then(dispatch(deleteUserSuccess(id))) 
    }
}

export const newUser = () => {

}

/*export const addUser = ({id, name, surname, job}) => {
    return(dispatch) => {
        return axios.post('/user', {})
    }
}*/

