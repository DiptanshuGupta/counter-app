import React from 'react';
import './App.css';
import ClassCounter from './ClassCounter';
import FunctionCounter from './FunctionCounter';

function App() {
  return (
    <div className="app-container">
      <h1 className="main-heading">Assignment-2 Counter Application</h1>
      <div className="counter-row">
        <ClassCounter />
        <FunctionCounter />
      </div>
    </div>
  );
}

export default App;