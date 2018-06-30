import {combineReducers} from 'redux';
import debates from './reducers/debates'
import auth from './reducers/auth'



export default combineReducers({
    auth,
    debates
})