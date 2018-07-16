import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {deleteDebate} from '../actions/mainActions';




class Debate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTools:'none',
      index:this.props.index 
    }
    this.renderUI   = this.renderUI.bind(this);
    this.toggleTools = this.toggleTools.bind(this);
    this.handleDeleteDebate = this.handleDeleteDebate.bind(this);
    this.handleVote = this.handleVote.bind(this);
  }






toggleTools(){
  if(this.state.showTools === 'none'){
    this.setState({showTools:'flex'})
  }else{
    this.setState({showTools:'none'})
  }
}

handleDeleteDebate(e){
  this.props.deleteDebate(this.props.debates[this.state.index]._id);
}

handleVote(e){
  e.preventDefault();
  let data = {
      debate_id :this.props.debates[this.state.index]._id,
      side_flag :Number(e.target.value)
  }
  console.log(data);
  axios.post("http://agree-dis.herokuapp.com/debates/vote",data).then(
    res=>{
      window.location.reload();
    }
  )
}



  renderUI() {
    return (
      <div className='Debate'>
          <div>
            <div className="vote-button">
              {this.props.debates[this.state.index].basic_info.status === 2  &&
              <button className="button is-success is-rounded " style={{'bottom':"-7rem"}} onClick={this.toggleTools}>DESIDE</button>
              }
            </div>
          {this.props.children}
          </div>
            <div className="vote-tools level has-background-white-ter" style={{'display':`${this.state.showTools}`}}>
              <div className="level-left">
                <div className="level-item">
                  <button className="button is-info" value='1' onClick={this.handleVote} >Agree</button>
                </div>
              </div>

              <div className="level-right">
                <div className="level-item">
                  <button className="button is-warning" value='0' onClick={this.handleVote}>DisAgree</button>
                </div>
              </div>

            </div>
        <button className="button is-fullwidth is-danger" onClick={this.handleDeleteDebate}>DELETE</button>
      </div>
    );
  }


  render() {
      return (
        this.renderUI()
      )
  }
}


Debate.propTypes = {
    debates : PropTypes.array.isRequired,
    deleteDebate: PropTypes.func.isRequired
}

function mapStateToProps(state){
    return{
        debates: state.debates,
        user : state.auth.user,
    }
}


export default connect(mapStateToProps,{ deleteDebate  })(Debate);





