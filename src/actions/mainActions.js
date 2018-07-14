import axios from 'axios';
import { SET_DEBATES } from './types';
import { SET_DEBATES_USERS } from './types';

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

export function fetchMyDebates(userId){
    return dispatch =>{
        axios.get(`http://agree-dis.herokuapp.com/debates/userDebate/${userId}`)
        .then(res => {
            console.log(res.data.docs);
            dispatch(setDebatesUsers(res.data.users));
            dispatch(setDebates(res.data.docs));
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