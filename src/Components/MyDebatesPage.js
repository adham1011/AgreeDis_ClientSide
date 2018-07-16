import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import MyDebatesList from './MyDebatesList';
import {fetchMyDebates} from '../actions/mainActions';




class MyDebatesPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            fetching:false
        }
        this.loading = this.loading.bind(this);
    }

componentDidMount(){
        this.setState({fetching:true})
        this.props.fetchMyDebates(this.props.user.id)
        this.setState({fetching:false})

}
loading(){
    return(
        <button className="button is-fullwidth is-large is-loading is-info">Loading</button>
    )
}

render(){
    return(
        <div className="container">
            <h1 className="title is-4" style={{marginTop:"2rem"}}>My Debates</h1>
              {this.state.fetching ? this.loading  : <MyDebatesList/> }
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