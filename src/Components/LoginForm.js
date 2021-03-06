import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {login} from '../actions/authActions';
// import { GoogleLogin } from 'react-google-login';


class LoginForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:''
        }


        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }



    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }


    onSubmit(e){
        e.preventDefault();
        this.props.login(this.state).then(
            res=>{
                this.context.router.history.push('/dashboard')

            },
            err =>{
                console.log(`err : ${err}`);
            }
        );
    }

    render(){
        const responseGoogle = (response) => {
            console.log(response);
        }
        return(
            <form onSubmit={this.onSubmit}>
                <div className="field">
                    <div className="control">
                        <input className="input is-medium" type="email" placeholder="Your Email" 
                        required
                        value={this.state.email}
                        name="email"
                        onChange={this.onChange}/>
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <input className="input is-medium" type="password" placeholder="Your password" 
                        required
                        name="password"
                        onChange={this.onChange}/>
                    </div>
                </div>
                    <div className="field">
                       <label className="checkbox has-text-weight-light is-size-7">
                            <input type="checkbox"/> Remember me
                        </label>
                    </div>
                    <button type="submit" className="button is-block is-info is-medium is-fullwidth">Login</button>
                </form>
 
    )}
}

LoginForm.propTypes = {
    login : PropTypes.func.isRequired
}

LoginForm.contextTypes = {
    router: PropTypes.object.isRequired
}

export default connect( null , { login }) (LoginForm);


/*
                      <GoogleLogin
                        className="button is-block is-fullwidth is-medium google-button"
                        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                        buttonText="Login with Google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                    />*/