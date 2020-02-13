import React, { useState } from 'react';
import './App.css';
import { Hello } from './Hello';
import { Clock } from './Clock';
import { UncontrolledCounter } from './UncontrolledCounter';
import { MultiStateButton, MultiStateButtonParent } from './MultiStateButton';
import { HideableClock } from './HideableClock';
import { ControlledCounter } from './ControlledCounter';
import { UserForm } from './UserForm';

function App() {
  const [nbPersonnes, setNbPersonnes] = useState(8);
  const [i, setI] = useState(10);
  return (
    <div className="App">
      <Hello name="Romain" />
      <Clock />
      <UncontrolledCounter />
      <UncontrolledCounter />
      <MultiStateButton values={['A', 'B', 'C']} />
      <HideableClock />
      <MultiStateButtonParent />
      <ControlledCounter count={nbPersonnes} onIncrement={() => setNbPersonnes(nbPersonnes + 1)} />
      <ControlledCounter count={nbPersonnes} onIncrement={() => setNbPersonnes(nbPersonnes + 1)} />
      <ControlledCounter count={i} onIncrement={() => setI(i + 1)} />
      <UserForm />
    </div>
  );
}

export default App;
