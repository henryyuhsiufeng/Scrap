import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

// Components
import {Menu} from './components/Menu';

function App() {
  const [menu, setMenu] = useState([]);

  // async await does dont work in useEffect
  useEffect(() => {
    fetch('/scrape').then(response => 
      response.json().then(data =>
        setMenu(data.events)));
  }, []);

  return (
    <div className="App">
      <Menu menu={menu}/>
    </div>
  );
}

export default App;
