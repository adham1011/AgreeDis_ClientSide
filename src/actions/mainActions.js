import axios from 'axios';




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