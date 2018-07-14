import { SET_DEBATES_USERS} from '../actions/types';

export default function users(state = [],action = {}){
    switch(action.type){
        case SET_DEBATES_USERS:
            return action.users;
        default: return state;
    }
}


export const selectUser = (state, userId) =>{
    const usersList = state;
    return usersList.find(user => user.id === userId);
}