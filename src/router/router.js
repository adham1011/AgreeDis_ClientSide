import React from "react";
import { Route } from "react-router-dom";
import Dashboard from "../Components/Dashboard";
// import DebateList from "../Components/DebateList";
import LoginPage from "../Components/LoginPage";
import Header from "../Header";

import requireAuth from '../utils/requireAuth'

const ReactRouter =()=>{
    return (
        <React.Fragment>
            <Header />
            <Route exact path="/" component={LoginPage} />
            <Route export path="/dashboard" component={requireAuth(Dashboard)}/>
        </React.Fragment>
    );}

export default ReactRouter;
