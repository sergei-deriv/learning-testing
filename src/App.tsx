import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Hello } from './components/Hello/Hello';
import { Counter } from './components/Counter/Counter';

function App() {
  return (
    <div>
      <Hello />
      <Counter />
    </div>
  );
}

export default App;
