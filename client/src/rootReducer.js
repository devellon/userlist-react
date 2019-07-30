import { combineReducers } from 'redux';
import users from './userReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    users,
    form: formReducer
});