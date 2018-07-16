import React from "react";
import { Route } from "react-router-dom";
import Dashboard from "../Components/Dashboard";
import LoginPage from "../Components/LoginPage";
import NewDebatePage from "../Components/NewDebatePage";
import MyDebatesPage from "../Components/MyDebatesPage";
import MyNotification from "../Components/MyNotification";

import Header from "../Header";

import requireAuth from '../utils/requireAuth';
import AuthCheck '../utils/requireAuth';

const ReactRouter =()=>{
    return (
        <React.Fragment>
            <Header />
            <Route exact path="/" component={LoginPage} />
            <Route export path="/dashboard" component={requireAuth(Dashboard)}/>
            <Route export path="/debates/createDebate" component={requireAuth(NewDebatePage)}/>
            <Route export path="/debates/myDebates" component={requireAuth(MyDebatesPage)}/>
            <Route export path="/profile/notification" component={requireAuth(MyNotification)}/>
        </React.Fragment>
    );}

export default ReactRouter;
