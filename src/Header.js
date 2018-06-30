import React, { Component } from "react"
import { NavLink } from "react-router-dom"
import { Icon } from 'react-icons-kit'
import {plusCircle} from 'react-icons-kit/fa/plusCircle'


// export const plusCircle () => <Icon icon={plusCircle} />

class Header extends Component {
    active = {
        backgroundColor: "#212F3D",
        color: "white",
        fontWeight: "bold"
    };
    header = {
        listStyle: "none",
        display: "flex",
        justifyContent: "space-evenly"
    };
    render() {
        return (
            <nav className="navbar is-warning">
                <div className="navbar-brand">
                    <a className="navbar-item" href="#">
                    <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
                    </a>
                </div>
                <div className="navbar-start">
                    <div className="navbar-item">
                        <div className="field has-addons">
                            <div className="control">
                                <input className="input" type="text" name="search" placeholder="Search"/>
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
                                <img src="https://www.shareicon.net/data/2016/08/05/806962_user_512x512.png"/>
                            </figure>
                         </a>
                        <div className="navbar-dropdown is-right ">
                            <a className="navbar-item" href="#">
                                Modifiers
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

);}}

export default Header;




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