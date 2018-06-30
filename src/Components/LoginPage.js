import React, {Component} from 'react'
import LoginForm from './LoginForm'





class LoginPage extends Component {
    render(){
        return(

            <section className="hero is-light is-fullheight">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="column is-4 is-offset-4">
                            <h1 className="title has-text-grey">Login</h1>
                            <h2 className="subtitle has-text-grey">Please login to proceed.</h2>
                            <div className="box is-white">
                                <figure className="avatar">
                                    <img src="https://placehold.it/128x128"/>
                                </figure>
                                <LoginForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

}



export default LoginPage;