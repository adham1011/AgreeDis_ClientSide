import axios from 'axios';

/* this files is made to set a Token access for 
* every action in this app
*/

export default function setAuthorizationToken (token){
    if(token){
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }else{
        delete axios.defaults.headers.common['Authorization'];
    }
}