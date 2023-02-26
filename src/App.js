import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';

function App() {
  return (
    // BEM convention naming App -> app
    <div className="app">
      <Header/>
      <Home />
    </div>
  );
}

export default App;
