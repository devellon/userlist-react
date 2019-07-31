import {
    FETCH_USERS_SUCCESS,DELETE_USER_SUCCESS, 
    FETCH_USERS_LOADING,NEW_USER_SUCCESS, 
    EDIT_USER_SUCCESS, FETCH_USERS_FAILURE,
    DELETE_USER_FAILURE, NEW_USER_FAILURE,
    EDIT_USER_FAILURE
    } from './actionTypes';
import axios from 'axios';

export const fetchUsersLoad = () => ({
    type: FETCH_USERS_LOADING
});

export const fetchUsersSuccess = users => ({
    type: FETCH_USERS_SUCCESS,
    payload: { users }
});

export const fetchUsersFailure =  error => ({
    type: FETCH_USERS_FAILURE,
    payload: {error}
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

export const deleteUserFailure = error => ({
    type: DELETE_USER_FAILURE,
    payload: {error}
});

export const editUserFailure = error => ({
    type: EDIT_USER_FAILURE,
    payload: {error}
});

export const newUserFailure = error => ({
    type: NEW_USER_FAILURE,
    payload: {error}
});

export const editUserSuccess = (data, changedUser) => ({
    type: EDIT_USER_SUCCESS,
    payload: {
        changedUser: changedUser,
        message: data.message
    }
})

export const fetchUsers = () => {
    return dispatch => {
        dispatch(fetchUsersLoad());
        return axios.get("/user")
            .then(response => {
                dispatch(fetchUsersSuccess(response.data));
            })
            .catch(error => {
                dispatch(fetchUsersFailure(error.response.data))
                throw(error);
            });
    };
};

export const deleteUser = (id) => {
    return dispatch => {
        return axios.delete(`/user/${id}`)
            .then(dispatch(deleteUserSuccess(id)))
            .catch(error => {
                dispatch(deleteUserFailure(error.response.data))
                throw(error);
            });
    };
};

export const newUser = ({ firstName, lastName, job }) => {
    const addedUser = {
        name: firstName,
        surname: lastName,
        job: job
    }
    return dispatch => {
        return axios.post("/user", addedUser)
            .then(response => {
                dispatch(newUserSuccess(response.data, addedUser))
            })
            .catch(error => {
                dispatch(newUserFailure(error.response.data))
                throw(error);
            });
    };
};

export const editUser = (originalUser, { firstName, lastName, job }) => {
    const changedUser = {
        id: originalUser.id,
        name: firstName,
        surname: lastName,
        job: job
    }

    if (changedUser.name === undefined) changedUser.name = originalUser.name;
    if (changedUser.surname === undefined) changedUser.surname = originalUser.surname;
    if (changedUser.job === undefined) changedUser.job = originalUser.job;

    return dispatch => {
        return axios.post(`/user/${originalUser.id}`, changedUser)
            .then(response => {
                dispatch(editUserSuccess(response.data, changedUser))
            })
            .catch(error => {
                dispatch(editUserFailure(error.response.data))
                throw(error);
            });
    };
};

