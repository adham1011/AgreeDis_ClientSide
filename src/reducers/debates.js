import { SET_DEBATES } from '../actions/types';
import { DELETE_DEBATE } from '../actions/types';




export default function debates(state = [], action = {}){
    switch(action.type){
        case SET_DEBATES:
            return action.debates;
        case DELETE_DEBATE:
            console.log(state);
            return state.filter(debate=> debate._id !== action.debate._id);
        default: return state;
    }
}

