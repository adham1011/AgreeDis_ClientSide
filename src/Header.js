import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Icon } from 'react-icons-kit';
import {plusCircle} from 'react-icons-kit/fa/plusCircle';
import {signOut} from 'react-icons-kit/fa/signOut'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {logout} from './actions/authActions';






// export const plusCircle () => <Icon icon={plusCircle} />

class Header extends Component {


    header = {
        listStyle: "none",
        display: "flex",
        justifyContent: "space-evenly"
    };

    logout(e){
        e.preventDefault();
        this.props.logout();
    }
    render() {
        // const { isAuthenticated } = this.props.auth.isAuthenticated;
        return (
            <nav className="container is-fullhd">
                <div className="columns is-mobile is-desktop">
                    <div className="column is-three-fifths-mobile is-three-fifths-desktop">
                        <form >
                            <div className="field">
                                <div className="control is-expanded">
                                    <input className="input" type="text" name="search" placeholder="Search..."/>
                                </div>
                            </div>
                        </form>
                    </div>


                        <div className="column is-2-mobile is-2-desktop ">
                            <NavLink to="/debates/createDebate">
                                <div className="plus-icon">
                                    <Icon size={30} icon={plusCircle}/>
                                </div>
                            </NavLink>
                        </div>

                        <div className="column is-2-mobile">
                            <div className="dropdown is-right is-hoverable">
                                <div className="dropdown-trigger">
                                    <figure className="image is-32x32" >
                                        <img src={this.props.auth.user.img} style={{'borderRadius':'50%'}}/>
                                    </figure>
                                    <div className="dropdown-menu" role="menu" >
                                        <div className="dropdown-content" >
                                                <NavLink className="dropdown-item" to="/debates/myDebates">
                                                    My Debates
                                                </NavLink>
                                                <NavLink className="dropdown-item" to="/profile/notification">
                                                    My notification
                                                </NavLink>
                                            <hr className="dropdown-divider"/>
                                            <button className="button is-danger is-fullwidth navbar-item" onClick={this.logout.bind(this)}>
                                                Log Out&nbsp;&nbsp;<Icon icon={signOut}/> 
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
   
            </div>
        </nav>


);}}

Header.propTypes = {
    auth : PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
}

function mapStateToProps(state){
    return{
        auth : state.auth
    }
}

export default connect(mapStateToProps,{ logout })(Header);




/*


            <div style={this.header}>
                <NavLink exact to="/" activeStyle={this.active}>
                Home
                </NavLink>
                <NavLink to="/MyIdeas" activeStyle={this.active}>
                My Ideas
                </NavLink>
            </div>
*/



/*
            <nav className="navbar is-warning" style={{display: this.props.auth.isAuthenticated ? 'flex' : 'none' }}>
                <div className="navbar-start">
                    <div className="navbar-item">

                    </div>
                </div>

                <div className="navbar-end">
                    
                        <NavLink to="/debates/createDebate" className="navbar-item">
                            <div className="plus-icon">
                                <Icon size={30} icon={plusCircle}/>
                            </div>
                        </NavLink>
                    
                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">
                            <figure className="image is-32x32">
                                <img src={this.props.auth.user.img}/>
                            </figure>
                         </a>
                        <div className="navbar-dropdown is-right" style={{marginRight: '1rem'}}>
                            <a className="navbar-item" href="#">
                                My Profile
                            </a>
                            <NavLink className="navbar-item" to="/debates/myDebates">
                                My Debates
                            </NavLink>
                            
                            <hr className="navbar-divider"/>
                                <button className="button is-danger  is-fullwidth" onClick={this.logout.bind(this)}>
                                Log Out&nbsp;&nbsp;<Icon icon={signOut}/>  </button>
                            
                        </div>
                    </div>
                </div>
            </nav>





*/



