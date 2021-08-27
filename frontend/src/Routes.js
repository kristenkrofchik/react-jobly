import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';

import Home from './Home';
import CompanyList from './CompanyList';
import FilterCompanyDetails from './FilterCompantDetails';
import JobList from './JobList';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import Profile from './Profile';

function Routes() {

    const[currentUser, updateCurrentUser] = useState();
    const [companies, updateCompanies] = useState();
    const [jobs, updateJobs] = useState();

    <BrowserRouter>
        <Switch>
            <Route exact path='/'>
                <Home currentUser={currentUser} />
            </Route>
            <Route exact path='/companies'>
                <CompanyList companies={companies} />
            </Route>
            <Route path='/companies/:company'>
                <FilterCompanyDetails companies={companies} />
            </Route>
            <Redirect to='/companies' />
            <Route exact path='/jobs'>
                <JobList jobs={jobs} />
            </Route>
            <Route exact path='/login' >
                <LoginForm />
            </Route>
            <Route exact path='/signup' >
                <SignUpForm />
            </Route>
            <Route exact path='/profile' >
                <Profile currentUser={currentUser} />
            </Route>
        </Switch>
    </BrowserRouter>
}

export default Routes;