import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { selectUser } from '../reducers/users';
// import {getMyDebates} from '../actions/getMyDebates';



export default function MyDebatesList({ debates , users }){

    const emptyMessage = (
        <p>You Don't Have any Debate Yet</p>
       
    );

    const debatesList = () => {
        return (
            debates.map(debate =>
            <div className="column is-6" key={debate._id}>          
                <div className="card">
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
                                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
                            </figure>
                            <h4 className="subtitle has-text-centered">Natalie</h4>
                        </div>
                        <div className="media-content has-text-centered" style={{'marginTop':'-1rem'}}>
                            <button className="button is-primary is-rounded is-outlined" style={{'marginBottom':"15px"}}>Clap</button>
                            <progress className="progress is-info" value="90" max="100">
                            </progress>
                        </div>
                        <div className="media-right">
                            <figure className="image avatar is-96x96">
                                <img src={(selectUser(users,debate.collaborator.collaborator_id)).profile.imgSrc} alt="Placeholder image"/>
                            </figure>
                            <h4 className="subtitle has-text-centered">Ans</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )

        );
    };


    return(
        <div className="columns is-multiline">
            {debates.length === 0 ? emptyMessage : debatesList()}
        </div>

    )
}


MyDebatesList.propTypes = {
    debates : PropTypes.array.isRequired,
    users : PropTypes.array.isRequired
}


// export default MyDebatesList;
// LoginForm.contextTypes = {
//     router: PropTypes.object.isRequired
// }






