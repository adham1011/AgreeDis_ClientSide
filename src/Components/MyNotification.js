import React, {Component} from 'react';
import axios from 'axios';
// import {connect} from 'react-redux';
// import PropTypes from 'prop-types';
// import { selectUser } from '../reducers/users';


class Notifications extends Component{

constructor(props) {
    super(props);
    this.state = {
        fetching:true,
        Notifications:[],
        err:'',

    }
     // this.debatesList   = this.debatesList.bind(this);
     //this.generateStatus = this.generateStatus.bind(this);
     //this.voteButtonClick = this.voteButtonClick.bind(this);
     //this.eachDebate = this.eachDebate.bind(this);
     // this.getUser   = this.getUser.bind(this);

    // this.update     = this.update.bind(this);
    // this.delete     = this.delete.bind(this);
    // this.add        = this.add.bind(this)
    // this.nextID     = this.nextID.bind(this)
    this.showNotification = this.showNotification.bind(this);
    this.handleResponseDebate = this.handleResponseDebate.bind(this);
  }
  componentDidMount(){

    axios.get("http://agree-dis.herokuapp.com/Notifications")
    .then(data=>{
        if(data.data.notifications){
            this.setState({
                fetching:false,
                Notifications:data.data.notifications
            })
        }else{
            this.setState({err:"empty notifications"})
        }
    })
  }


  handleResponseDebate(e){
    e.preventDefault;
    let debate_id = e.target.getAttribute("index")
    let value = e.target.value;
    axios.get(`http://agree-dis.herokuapp.com/debates/invitationResponse/${debate_id}/${value}`)
    .then(res=>{
        if(res.data){
            this.setState({Notifications:
           this.state.Notifications.filter(noti=>{
                return noti._id !== res.data.Debate
            })
       })
        }
    })

  }

  showNotification(notification,i){
    return(
            <section key={notification._id} index={i} className="hero is-light" style={{marginBottom:'1rem'}}>
              <div className="hero-body level">
                <div className="container ">
                <div className="level-left">
                  <h1 className="title level-item">
                    {notification.owner.first} {notification.owner.last}
                  </h1>
                </div>
                <div className="level-left">
                  <h2 className="subtitle level-item">
                  <pre className="tab">  Has invited you to join debate:  <strong>{notification.title}</strong> </pre>
                  </h2>
                  </div>
                  <div className="level-right">
                  <button className="button is-success is-outlined level-item" value="2" index={notification._id} onClick={this.handleResponseDebate}>Accept</button>
                  <button className="button is-danger is-outlined level-item" value="1" index={notification._id} onClick={this.handleResponseDebate}>Reject</button>
                  </div>
                </div>
              </div>
            </section>  
    )
  }

  render(){
    return(
        <div className="container">
            {!this.state.fetching ? this.state.Notifications.map(this.showNotification) : "wait" }
        </div>
        )
  }
}
export default Notifications