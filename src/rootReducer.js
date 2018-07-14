import {combineReducers} from 'redux';
import debates from './reducers/debates';
import users from './reducers/users';
import auth from './reducers/auth';



export default combineReducers({
    auth,
    debates,
    users
})