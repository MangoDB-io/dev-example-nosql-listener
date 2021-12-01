import React from 'react';
import './App.css';
import logo from './images/logo.png';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <div>
          <img className="float-left" src={logo} alt="logo" />
          <div className="float-right center padding-10">
            <p className="title-text align-left">TODO</p>
            <p className="sub-title-text align-left">A Simple FerretDB CRUD Demo</p>
          </div>
          <div style={{clear: "both"}} />
        </div>
      </header>
      <Dashboard />
    </div>
  );
}

export default App;
