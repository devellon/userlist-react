import {
    FETCH_USERS_SUCCESS,/*, FETCH_USERS_FAILURE*/
    DELETE_USER_SUCCESS, FETCH_USERS_LOADING, NEW_USER_SUCCESS
} from './actions/actionTypes';
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
});

export const newUserSuccess = (data, newUser) => ({
    type: NEW_USER_SUCCESS,
    payload: {
        id: data.id,
        message: data.message,
        newUser
    }
});

/*export const fetchUsersFailure = error => ({
    type: FETCH_USERS_FAILURE,
    payload: { error }
});*/

export const fetchUsers = () => {
    return dispatch => {
        dispatch(fetchUsersLoad());
        return axios.get("/user")
            .then(response => {
                dispatch(fetchUsersSuccess(response.data));
            });
    };
};

export const deleteUser = (id) => {
    console.log("delete");
    return dispatch => {
        return axios.delete(`/user/${id}`)
            .then(dispatch(deleteUserSuccess(id)))
    };
};

export const newUser = ({ firstName, lastName, job }) => {
    console.log({ firstName, lastName, job });
    const addedUser = {
        name: firstName,
        surname: lastName,
        job: job
    }
    console.log(addedUser);
    return dispatch => {
        return axios.post("/user", { name: firstName, surname: lastName, job: job })
            .then(response => {
                dispatch(newUserSuccess(response.data, addedUser))
            })
            .catch(error => {
                console.log(error);
                throw (error);
            });
    };
};

