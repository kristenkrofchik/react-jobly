import './App.css';
import React, { useState, useEffect } from 'react';
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

  useEffect(function loadUserInfo() {
    if(token) {
      try {
        let {username} = jwt.decode(token);
        JoblyApi.token = token;
        let currentUser = await JoblyApi.getCurrentUser(username);
      }
    }
  })

  return (
    <div className="App">
      <Nav />
      <Home />
    </div>
  );
}

export default App;
