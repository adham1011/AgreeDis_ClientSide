import React, {Component} from 'react';
import Debate from './DebateComponent';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { selectUser } from '../reducers/users';

// import {getMyDebates} from '../actions/getMyDebates';



class MyDebatesList extends Component{

    constructor(props) {
    super(props);
    this.state = {

    }
     // this.debatesList   = this.debatesList.bind(this);
     this.generateStatus = this.generateStatus.bind(this);
     this.voteButtonClick = this.voteButtonClick.bind(this);
     this.eachDebate = this.eachDebate.bind(this);
     this.progress = this.progress.bind(this);
  }





    voteButtonClick(e){
    console.log("ok");
    }

    generateStatus(status){
        switch(status){
            case 0:
                return (<p className="subtitle is-6 ">Pending</p>);
            case 1:
                return (<p className="subtitle is-6 has-text-danger">Rejected</p>);
            case 2:
                return(<p className="subtitle is-6 has-text-success">Running</p>)
            case 3: 
                return (<p className="subtitle is-6 has-text-danger">Closed</p>);
            default:
                return(<p></p>)
        }

    }
    progress(i){
        let debate = this.props.debates[i];
        let cVotes = debate.collaborator.collaborator_votes;
        let oVotes = debate.owner.owner_votes;

            if(cVotes>oVotes){
                let percent = ((cVotes/(oVotes+cVotes))*100);
                return <progress className="progress is-warning" value={percent} max="100">
                 `${percent}%`
                  </progress>
            }else if(cVotes === oVotes){
               return <progress className="progress is-danger" value='100' max="100">
                </progress>
            }else{
                 let percent = ((oVotes/(oVotes+cVotes))*100);
                return <progress className="progress is-info" value={percent} max="100">
                 `${percent}%`
                </progress> 
            }
    }

    eachDebate(debate,i){
        return(
                <div className="column is-6-desktop is-12-mobile" key={i+debate._id}>          
                <div className="card">
                <Debate key={debate._id} index={i}>
                    <h2 className="title has-text-white is-4">{debate.basic_info.title}</h2>
                    <div className="card-image">
                        <figure className="image is-5by4">
                            <img src={debate.basic_info.img}/>
                        </figure>
                    </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-left">
                            <figure className="image avatar is-96x96">
                                <img src={selectUser(this.props.users, debate.owner.owner_id).profile.imgSrc} alt="owner" style={{'maxHeight':'96px','maxWidth':'96px'}}/>
                            </figure>
                            <h4 className="subtitle has-text-centered">{selectUser(this.props.users,debate.owner.owner_id).profile.name.first}</h4>
                        </div>
                        <div className="media-content has-text-centered" style={{'marginTop':'2.5rem'}}>
                            {this.progress(i)}
                            <div>{this.generateStatus(debate.basic_info.status)}</div>

                        </div>
                        <div className="media-right">
                            <figure className="image avatar is-96x96">
                                <img src={selectUser(this.props.users, debate.collaborator.collaborator_id).profile.imgSrc} alt="collabrator" style={{'maxHeight':'96px','maxWidth':'96px'}}/>
                            </figure>
                            <h4 className="subtitle has-text-centered">{selectUser(this.props.users, debate.collaborator.collaborator_id).profile.name.first}</h4>
                        </div>
                    </div>
                </div>
                </Debate>
            </div>
        </div>
        );
    }



    render(){
        return(
            <div className="columns is-multiline is-desktop is-mobile">
                {this.props.debates.length > 0 ? this.props.debates.map(this.eachDebate): ''}
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

export default connect(mapStateToProps)(MyDebatesList);





    