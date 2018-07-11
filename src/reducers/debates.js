import { SET_DEBATES } from '../actions/types';

export default function debates(state = [], action = {}){
    switch(action.type){
        case SET_DEBATES:
            return action.debates;
        default: return state;
    }
}