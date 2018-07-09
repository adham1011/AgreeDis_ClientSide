import React, { Component } from "react"
import { NavLink } from "react-router-dom"
import { Icon } from 'react-icons-kit'
import {plusCircle} from 'react-icons-kit/fa/plusCircle'
import {signOut} from 'react-icons-kit/fa/signOut'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import {logout} from './actions/authActions'



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
            <nav className="navbar is-warning" style={{display: this.props.auth.isAuthenticated ? 'flex' : 'none' }}>
                <div className="navbar-brand">
                    <a className="navbar-item" href="#">
                    <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
                    </a>
                </div>
                <div className="navbar-start">
                    <div className="navbar-item">
                        <div className="field has-addons">
                            <div className="control">
                                <input className="input" type="text" name="search" placeholder="Search..."/>
                            </div>
                            <div className="control">
                                <a className="button is-info">
                                    Search
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div style={{color:'#FF6B67'}}>
                            <Icon size={30} icon={plusCircle}/>
                        </div>
                    </div>
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
                            <a className="navbar-item" href="#">
                                My Debates
                            </a>
                            
                            <hr className="navbar-divider"/>
                                <button className="button is-danger  is-fullwidth" onClick={this.logout.bind(this)}>
                                Log Out&nbsp;&nbsp;<Icon icon={signOut}/>  </button>
                            
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