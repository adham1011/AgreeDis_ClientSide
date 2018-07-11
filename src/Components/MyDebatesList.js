import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
// import {getMyDebates} from '../actions/getMyDebates';

export default function MyDebatesList({ debates }){

    const emptyMessage = (
        <p>You Don't Have any Debate Yet</p>
       
    );

    const debatesList = (
        <p>my list</p>
    );

    return(
        <div className="column is-6">
            {debates.length === 0 ? emptyMessage : debatesList }
        </div>
    )
}


MyDebatesList.propTypes = {
    debates : PropTypes.array.isRequired
}

// LoginForm.contextTypes = {
//     router: PropTypes.object.isRequired
// }
