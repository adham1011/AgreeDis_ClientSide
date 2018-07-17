import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import MyDebatesList from './MyDebatesList';
import {fetchMyDashBoard} from '../actions/mainActions';




class Dashboard extends Component{

componentDidMount(){
    this.props.fetchMyDashBoard(this.props.user.id);
}

render(){
    return(
        <div className="container">
            <h1 className="title is-4" style={{marginTop:"2rem"}}>Recent Debates</h1>
                 <MyDebatesList/> 
        </div>
    )
}

}

Dashboard.propTypes = {
    debates: PropTypes.array.isRequired,
    users: PropTypes.array.isRequired,
    fetchMyDashBoard: PropTypes.func.isRequired
}

function mapStateToProps(state){
    return{
        debates: state.debates,
        users: state.users,
        user : state.auth.user
    }
}
export default connect(mapStateToProps, { fetchMyDashBoard })(Dashboard);