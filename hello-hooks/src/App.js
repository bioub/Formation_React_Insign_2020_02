import React from 'react';
import logo from './logo.svg';
import './App.css';
import { UncontrolledCounter } from './UncontrolledCounter';
import { Clock } from './Clock';

function App() {
  return (
    <div className="App">
      <UncontrolledCounter />
      <Clock />
    </div>
  );
}

export default App;
