import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { createStore , applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import ReactRouter from './router/router';
import setAuthorizationToken from './utils/setAuthorizationToken'
import jwtDecode from 'jwt-decode'
import {setCurrentUser} from './actions/authActions'

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);

if(localStorage.jwtToken){
    setAuthorizationToken(localStorage.jwtToken);
    store.dispatch(setCurrentUser(jwtDecode ( localStorage.jwtToken)));
}


ReactDOM.render(
    <Router>
        <Provider store={store}>
            <ReactRouter/>
        </Provider>
    </Router>, 
    document.getElementById('root'));
registerServiceWorker();
