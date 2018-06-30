import {SET_CURRENT_USER} from '../actions/types';
// import isEmpty from 'loadash/isEmpty';
const initialState = {
    isAuthenticated: false,
    user: {}

}

export default function auth(state = initialState, action = {}){
    switch(action.type){
        case SET_CURRENT_USER:
            return{
                isAuthenticated: true,
                user: action.user
            }
        default: return state;
    }
}