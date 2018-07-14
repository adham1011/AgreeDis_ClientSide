import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import {saveDebate} from '../actions/mainActions'
import router from '../router/router'
import { Redirect } from 'react-router-dom';


class NewDebateForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            title:'',
            img:'',
            collaborator:''

        }


        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }



    onChange(e){
        this.setState({[e.target.name]: e.target.value});
        
    }


    onSubmit(e){
        e.preventDefault();
        this.props.saveDebate(this.state).then(
            res=>{
                this.context.router.history.push('/dashboard')

            },
            err =>{
                console.log(`err : ${err}`);
            }
        );
    }

    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <div className="field">
                    <label className="label">Debate Title</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Title.." name="title" onChange={this.onChange}/>
                    </div>
                </div>

                <div className="field">
                    <label className="label">collaborator Name</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="ex:Dan" name="collaborator" onChange={this.onChange}/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Img Url</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="http://www.pintrest.com/img.png" name="img" onChange={this.onChange}/>
                    </div>
                </div>
                {this.state.img !== '' && 
                <figure className="image is-128x128">
                  <img src={this.state.img}/>
                </figure>
                }

                <button className="button is-info">Save</button>
            </form>
 
    )}
}

// LoginForm.propTypes = {
//     login : PropTypes.func.isRequired
// }

NewDebateForm.contextTypes = {
    router: PropTypes.object.isRequired
}

export default connect(null,{ saveDebate }) (NewDebateForm);