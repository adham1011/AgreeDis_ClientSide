import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import MyDebatesList from './MyDebatesList';
import {fetchMyDebates} from '../actions/mainActions';




class MyDebatesPage extends Component{

componentDidMount(){
    this.props.fetchMyDebates(this.props.user.id);
}

render(){
    return(
        <div className="container">
            <h1 className="title is-4" style={{marginTop:"2rem"}}>My Debates</h1>
                <MyDebatesList />
        </div>
    )
}

}

MyDebatesPage.propTypes = {
    debates: PropTypes.array.isRequired,
    users: PropTypes.array.isRequired,
    fetchMyDebates: PropTypes.func.isRequired
}

function mapStateToProps(state){
    return{
        debates: state.debates,
        user : state.auth.user,
        users: state.users
    }
}
export default connect(mapStateToProps, { fetchMyDebates })(MyDebatesPage);