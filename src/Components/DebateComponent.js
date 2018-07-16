import React, {Component} from 'react';
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

    // this.delete = this.delete.bind(this);
    // this.save = this.save.bind(this);
    // this.renderForm = this.renderForm.bind(this);
    this.renderUI   = this.renderUI.bind(this);
    this.generateStatus = this.generateStatus.bind(this);
    this.toggleTools = this.toggleTools.bind(this);
    this.handleDeleteDebate = this.handleDeleteDebate.bind(this);
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


toggleTools(){
  if(this.state.showTools == 'none'){
    this.setState({showTools:'flex'})
  }else{
    this.setState({showTools:'none'})
  }
}

handleDeleteDebate(e){
  this.props.deleteDebate(this.props.debates[this.state.index]._id);
}


  // delete() {
  //   alert('you can do the delete on your own')
  // }
  // save(e) {
  //   e.preventDefault();
  //   this.props.onChange(this.newIdea.value,this.props.index);
  //   this.setState({
  //     editing:false
  //   })
  // }

  // renderForm() {
  //   return (
  //      <div>
  //       <form onSubmit={this.save}>
  //         <textarea ref={
  //           (input) => {
  //             this.newIdea=input;
  //           }
  //         }/>
  //         <button><MdSave onClick={this.save}/></button>
  //       </form>
  //     </div>
  //   )
  // }

  renderUI() {
    return (
      <div className='Debate'>
          <div>
            <div className="vote-button">
              <button className="button is-success is-rounded " style={{'bottom':"-7rem"}} onClick={this.toggleTools}>DESIDE</button>
            </div>
          {this.props.children}
          </div>
            <div className="vote-tools level has-background-white-ter" style={{'display':`${this.state.showTools}`}}>
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


export default connect(mapStateToProps,{ deleteDebate })(Debate);





