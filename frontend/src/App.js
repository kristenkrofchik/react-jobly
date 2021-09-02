import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import useLocalStorage from '/useLocalStorage';

import Nav from './Nav';
import Routes from './Routes';
import JoblyApi from './api';
import UserContext from './UserContext';
import jwt from 'jsonwebtoken';

export const TOKEN_STORAGE_ID = 'jobly-token';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);
  const [applicationIds, setApplicationIds] = useState(new Set([]));

  useEffect(function loadUserInfo() {
    
    async function getCurrentUser() {
      if(token) {
        try {
          let {username} = jwt.decode(token);
          JoblyApi.token = token;
          let currentUser = await JoblyApi.getCurrentUser(username);
          setCurrentUser(currentUser);
          setApplicationIds(new Set(currentUser.applications));
        } catch(err) {
          console.error('Problem loading', err);
          setCurrentUser(null);
        }
      }
  }}, [token]);

    function logout() {
      setCurrentUser(null);
      setToken(null);
    }

    async function signUp(signupData) {
      try {
        let token = await JoblyApi.signup(signupData);
        setToken(token);
        return { success: true };
      } catch (err) {
        console.error('Signup failed', err);
        return { success: false, err};
      }
    }

    async function login(loginData) {
      try {
        let token = await JoblyApi.loginUser(loginData);
        setToken(token);
        return { success: true };
      } catch (err) {
        console.error('Login failed', err);
        return { success: false, err};
      }
    }

    function hasAppliedToJob(id) {
      return applicationIds.has(id);
    }

    function applyToJob(id) {
      if(hasAppliedToJob(id)) return;
      JoblyApi.applyToJob(currentUser.username, id);
      setApplicationIds(new Set([...applicationIds, id]));
    }

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ currentUser, setCurrentUser, hasAppliedToJob, applyToJob}}>
        <div className='App'>
          <Nav logout={logout} />
          <Routes login={login} signup={signup} />
        </div>
      </UserContext.Provider>
    </BrowserRouter>
}

export default App;
