import {
    FETCH_USERS_SUCCESS,/*, FETCH_USERS_FAILURE*/
    DELETE_USER_SUCCESS, FETCH_USERS_LOADING,
    NEW_USER_SUCCESS, EDIT_USER_SUCCESS
} from './actionTypes';
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
                console.log(error);
                throw (error);
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
                console.log(error);
                throw (error);
            });
    };
};
