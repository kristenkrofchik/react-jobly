import './App.css';
import React, { useState, useEffect } from 'react';

import Nav from './Nav';
import Routes from './Routes';


function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
    </div>
  );
}

export default App;
