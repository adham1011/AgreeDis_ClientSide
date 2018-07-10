import React, {Component} from 'react'
import NewDebateForm from './NewDebateForm'





class NewDebatePage extends Component {
    render(){
        return(
            <section className="section is-dark">
                <div className="container">
                    <h1 className="title">Create new debate</h1>
                    <NewDebateForm/>
                </div>
            </section>
        );
    }

}



export default NewDebatePage;