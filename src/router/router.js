import React from "react";
import { Route } from "react-router-dom";
// import Dashboard from "../Components/Dashboard";
// import DebateList from "../Components/DebateList";
import LoginPage from "../Components/LoginPage";
import Header from "../Header";

const ReactRouter =()=>{
    return (
        <React.Fragment>
            <Header />
            <Route exact path="/" component={LoginPage} />
        </React.Fragment>
    );}

export default ReactRouter;
