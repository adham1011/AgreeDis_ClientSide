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
            <div className="columns is-multiline content">
                <div className="column is-12">
                    <h1 className="title is-4">My Debates</h1>
                </div>
                <MyDebatesList debates={this.props.debates}/>
            </div>
        </div>
    )
}

}

MyDebatesPage.propTypes = {
    debates: PropTypes.array.isRequired,
    fetchMyDebates: PropTypes.func.isRequired
}

function mapStateToProps(state){
    return{
        debates: state.debates,
        user : state.auth.user
    }
}
export default connect(mapStateToProps, { fetchMyDebates })(MyDebatesPage);