import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import {saveDebate} from '../actions/mainActions';
// import _unionBy from 'lodash';
// import router from '../router/router';
import axios from 'axios';



class NewDebateForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            title:'',
            img:'',
            collaborator:'',
            end_time:0,
            query:'',
            loading:false,
            options:[],
        }


        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.onSearchChange = this.onSearchChange.bind(this);
        this.fetchOptions = this.fetchOptions.bind(this);
        this.eachOption = this.eachOption.bind(this);
        this.optionClick = this.optionClick.bind(this);


    }



    onChange(e){
        this.setState({[e.target.name]: e.target.value});
        
    }


    onSubmit(e){
        e.preventDefault();
        this.props.saveDebate({
            collaborator:Number(this.state.query),
            img:this.state.img,
            title:this.state.title,
            end_time: this.state.end_time
        }).then(
            res=>{
                this.context.router.history.push('/debates/myDebates');
            },
            err =>{
                console.log(`err : ${err}`);
            }
        );
}

    fetchOptions(){
        if(!this.state.query) return;
        this.setState({loading:true});
        axios.get(`http://agree-dis.herokuapp.com/profile/searchFriendList/${this.state.query}`)
        .then(res=>{
            if(res.data){
                this.setState({options:res.data});
                console.log(this.state.options);
                this.setState({loading:false});
            }
        })
    }

    onSearchChange(e){
        this.setState({
            query:e.target.value,
        });
        console.log(this.state.query);
        setTimeout(this.fetchOptions(),2000);
    }
    optionClick(e){
        e.preventDefault();
        console.log(`vale=${e.target.value}`);
    }

    eachOption(usr){
        return(
            <option key={usr.id} index={usr.id} value={usr.id} onChange={this.optionClick}>{usr.name}</option>
        )
    }

    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <div className="field">
                    <label className="label">Debate Title</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Title.." name="title" onChange={this.onChange} required/>
                    </div>
                </div>

                <div className="field">
                    <label className="label">collaborator Name</label>
                    <div className={this.state.loading ? 'control is-loading' : 'control'}>
                        <input className="input" type="text" list="friendList" name="collaborator" placeholder="ex:Dan" autoComplete="off"  onChange={this.onSearchChange} required/>
                        <datalist name="collaborator" id='friendList'>
                        {this.state.options.map(this.eachOption)}
                        </datalist>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Debate Time</label>
                    <div className="control">
                        <input className="input" type="Number" placeholder="time by minutes" name="end_time" onChange={this.onChange}/>
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




        // <div className="field">
        //             <Dropdown  
        //                 search
        //                 fluid
        //                 placeholder="Search Friend"
        //                 value={this.state.query}
        //                 onSearchChange={this.onSearchChange}
        //                 options = {this.state.options}
        //                 loading = {this.state.loading}

        //             />
        //         </div>







