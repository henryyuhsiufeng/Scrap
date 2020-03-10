import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

// Components
import Header from './components/Header/Header.js';
import {ScrapMenu} from './components/Menu/ScrapMenu'

function App() {
  const [scraps, setScraps] = useState([]);

  // async await does dont work in useEffect
  useEffect(() => {
    fetch('/scrape').then(response => 
      response.json().then(data =>
        setScraps(data.events)));
  }, []);

  return (
    <div className="App">
      <Header/>
      <div>
        <ScrapMenu scraps={scraps} />
      </div>
    </div>
  );
}

export default App;
