import React from 'react';
import './App.css';
import { Hello } from './Hello';
import { Clock } from './Clock';
import { UncontrolledCounter } from './UncontrolledCounter';
import { MultiStateButton, MultiStateButtonParent } from './MultiStateButton';
import { HideableClock } from './HideableClock';

function App() {
  return (
    <div className="App">
      <Hello name="Romain" />
      <Clock />
      <UncontrolledCounter />
      <MultiStateButton values={['A', 'B', 'C']} />
      <HideableClock />
      <MultiStateButtonParent />
    </div>
  );
}

export default App;
