import React from "react";
import { Route } from "react-router-dom";
import Dashboard from "../Components/Dashboard";
import LoginPage from "../Components/LoginPage";
import NewDebatePage from "../Components/NewDebatePage";
import Header from "../Header";

import requireAuth from '../utils/requireAuth'

const ReactRouter =()=>{
    return (
        <React.Fragment>
            <Header />
            <Route exact path="/" component={LoginPage} />
            <Route export path="/dashboard" component={requireAuth(Dashboard)}/>
            <Route export path="/createDebate" component={requireAuth(NewDebatePage)}/>
        </React.Fragment>
    );}

export default ReactRouter;
