import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';

import Home from './Home';
import CompanyList from './CompanyList';
import JobList from './JobList';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import Profile from './Profile';
import PrivateRoute from './PrivateRoute';

function Routes({ loginUser, signUpUser }) {


return (
    <BrowserRouter>
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>

            <Route exact path='/login' >
                <LoginForm loginUser={loginUser}/>
            </Route>

            <Route exact path='/signup' >
                <SignUpForm signUpUser={signUpUser}/>
            </Route>

            <PrivateRoute exact path='/companies'>
                <CompanyList />
            </PrivateRoute>

            <PrivateRoute path='/companies/:handle'>
                <CompanyDetails />
            </PrivateRoute>

            <PrivateRoute exact path='/jobs'>
                <JobList />
            </PrivateRoute>

            <PrivateRoute exact path='/profile' >
                <Profile />
            </PrivateRoute>

            <Redirect to='/'></Redirect>
        </Switch>
    </BrowserRouter>
    );
};

export default Routes;