import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LogIn from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={LogIn} />
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profile} />
            </Switch>
        </BrowserRouter>
    );
}

