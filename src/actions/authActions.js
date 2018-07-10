import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwtDecode from 'jwt-decode'
import { SET_CURRENT_USER } from './types'


export function setCurrentUser(user){
    return{
        type: SET_CURRENT_USER ,
        user
    };
}


export function login(data){
    return dispatch =>{
        return axios.post('http://agree-dis.herokuapp.com/profile/signIn',data).then(res =>{
                console.log(res.Error);
                const token = res.data.token
                localStorage.setItem('jwtToken',token);
                setAuthorizationToken(token);
                dispatch(setCurrentUser(jwtDecode(token)));
            },err=>{
                
            })
    }

}

export function logout(){
    return dispatch =>{
        localStorage.removeItem('jwtToken');
        setAuthorizationToken(false);
        dispatch(setCurrentUser({}));
    }
}

//http://agree-dis.herokuapp.com/profile/signIn