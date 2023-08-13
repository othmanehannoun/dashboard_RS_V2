import React, {useState} from 'react'
import { Redirect, Switch, Route } from "react-router-dom";
import ErrorPage from '../screens/404';

import Login from '../screens/Login'

function AuthNavigation() {
    
    return (
        // <Router>
            <div className="login">
                <Switch>
                    <Route exact path={"/login"}> <Login /> </Route>
                    <Route exact path="*"> <ErrorPage /> </Route>
                </Switch>
            </div>
        // </Router>
    )
}

export default AuthNavigation