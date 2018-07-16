import axios from 'axios';
import { SET_DEBATES } from './types';
import { SET_DEBATES_USERS } from './types';
import { DELETE_DEBATE } from './types';


export function setDebates(debates){
    return {
        type: SET_DEBATES,
        debates
    }
}

export function setDebatesUsers(users){
    return{
        type: SET_DEBATES_USERS,
        users
    }
}

export function deleteDebateFromList(debate){
    return{
        type: DELETE_DEBATE,
        debate
    }
}


export function deleteDebate(debateId){
    return dispatch=>{
        axios.delete(`http://agree-dis.herokuapp.com/debates/deleteDebate/${debateId}`)
        .then(res=>{
            let debate = {_id:debateId};
            dispatch(deleteDebateFromList(debate));
        });
    }
}
export function fetchMyDashBoard(){
    return dispatch => {
        axios.get(`http://agree-dis.herokuapp.com/debates/dashBoard`)
        .then(
            res=>{
                if(res.data){
                    dispatch(setDebatesUsers(res.data.users));
                    dispatch(setDebates(res.data.debates));

                }else{
                    dispatch(setDebatesUsers([]));
                    dispatch(setDebates([]));
                }
            }
        );
    }
}

export function fetchMyDebates(userId){
    return dispatch =>{
        axios.get(`http://agree-dis.herokuapp.com/debates/userDebate/${userId}`)
        .then(res => {
            if(res.data.docs){
                dispatch(setDebatesUsers(res.data.users));
                dispatch(setDebates(res.data.docs));
            }else{
                dispatch(setDebatesUsers([]));
                dispatch(setDebates([]));

            }
        });
    }
}


export function saveDebate(data){
    return dispatch =>{
        return axios.post('http://agree-dis.herokuapp.com/debates/createDebate',data).then(res =>{
                console.log(`action: ${res._id}`);
                // console.log(res.Error);
                // const token = res.data.token
                // localStorage.setItem('jwtToken',token);
                // setAuthorizationToken(token);
                // dispatch(setCurrentUser(jwtDecode(token)));
            },err=>{
                
            })
    }
}