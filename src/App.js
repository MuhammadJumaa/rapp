import React from 'react';
import './App.css';
import User from './components/User';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <hr/>
      <User
      name = "fatih"
      salary = "10000"
      department ="bilişim"
      />
      <User
      />
    </div>
  );
}

export default App;
