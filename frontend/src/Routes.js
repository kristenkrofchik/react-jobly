import React from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';

import Home from './Home';
import CompanyList from './CompanyList';
import CompanyDetails from './CompanyDetails';
import JobList from './JobList';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import Profile from './Profile';
import PrivateRoute from './PrivateRoute';

function Routes({ loginUser, signUpUser }) {


return (
    <div className='Routes'>
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
    </div>
    );
};

export default Routes;