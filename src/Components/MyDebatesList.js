import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { selectUser } from '../reducers/users';
// import {getMyDebates} from '../actions/getMyDebates';



class MyDebatesList extends Component{

    constructor(props) {
    super(props);
    this.state = {
        showTools:'none'
    }
     this.debatesList   = this.debatesList.bind(this);
     this.generateStatus = this.generateStatus.bind(this);
     this.voteButtonClick = this.voteButtonClick.bind(this);
     // this.getUser   = this.getUser.bind(this);

    // this.update     = this.update.bind(this);
    // this.delete     = this.delete.bind(this);
    // this.add        = this.add.bind(this)
    // this.nextID     = this.nextID.bind(this)
  }

    // const emptyMessage = (
    //     <p>You Don't Have any Debate Yet</p>
    // );

    // getUser(id){
    //    this.state.user = selectUser(this.props.users,id);
    // }

    voteButtonClick(e){
        e.preventDefault();
        let main = e.target.parentNode.parentNode.parentNode.parentNode;
        let target = main.children[1];
        console.log(target);

        if(target.children[1] == 'flex'){
            this.setState({showTools:'none'});
        }else{
            this.setState({showTools:'flex'}) 
        }
    }

    generateStatus(status){
        switch(status){
            case 0:
                return (<p className="subtitle is-6 has-text-success">Pending</p>);
                break;
            case 1:
                return (<p className="subtitle is-6 has-text-danger">Rejected</p>);
                break;
            case 3: 
                return (<p className="subtitle is-6 has-text-danger">Closed</p>);
                break;
        }

    }



    debatesList () {
        return (
            this.props.debates.map(debate =>
            <div className="column is-6" key={debate._id}>          
                <div className="card">
                    <h2 className="title has-text-white is-4">{debate.basic_info.title}</h2>
                    <div className="card-image">
                        <figure className="image is-5by4">
                            <img src={debate.basic_info.img}/>
                        </figure>
                    </div>
                    <div className="vote-tools level has-background-white-ter" style={{display:`${this.state.showTools}`}}>
                        <div className="level-left">
                            <div className="level-item">
                                <button className="button is-info">Agree</button>
                            </div>
                        </div>

                        <div className="level-right">
                            <div className="level-item">
                                <button className="button is-warning">DisAgree</button>
                            </div>
                        </div>
                    </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-left">
                            <figure className="image avatar is-96x96">
                                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
                            </figure>
                            <h4 className="subtitle has-text-centered">Natalie</h4>
                        </div>
                        <div className="media-content has-text-centered" style={{'marginTop':'-2.7rem'}}>
                            <button className="button is-success is-rounded " style={{'marginBottom':"15px"}} onClick={this.voteButtonClick}>DESIDE</button>
                            <progress className="progress is-info" value="90" max="100">
                            </progress>

                            <div>{this.generateStatus(debate.basic_info.status)}</div>
                        </div>
                        <div className="media-right">
                            <figure className="image avatar is-96x96">
                                <img src={selectUser(this.props.users, debate.collaborator.collaborator_id).profile.imgSrc} alt="Placeholder image"/>
                            </figure>
                            <h4 className="subtitle has-text-centered">{selectUser(this.props.users, debate.collaborator.collaborator_id).profile.name.first}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )

        );
    };

    render(){
        return(
            <div className="columns is-multiline">
                {this.props.debates.length === 0 ? "ok": this.debatesList()}
            </div>

        );
    }

}


MyDebatesList.propTypes = {
    debates : PropTypes.array.isRequired,
    users : PropTypes.array.isRequired
}

function mapStateToProps(state){
    return{
        debates: state.debates,
        user : state.auth.user,
        users: state.users
    }
}

export default connect(mapStateToProps) (MyDebatesList);

// LoginForm.contextTypes = {
//     router: PropTypes.object.isRequired
// }






