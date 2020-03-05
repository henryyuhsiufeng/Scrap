import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {
  // async await does dont work in useEffect
  useEffect(() => {
    fetch('/scrape').then(response => 
      response.json().then(data =>
        console.log(data)));
  }, [])

  return (
    <div className="App">
    
    </div>
  );
}

export default App;
