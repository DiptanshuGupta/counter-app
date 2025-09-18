import React, { useState } from 'react';
import './App.css';

function FunctionCounter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div className="counter-box">
      <h2 className="counter-heading">Function Component</h2>
      <div className="counter-value">{count}</div>
      <div className="counter-buttons">
        <button className="increment" onClick={increment}>+</button>
        <button className="decrement" onClick={decrement}>-</button>
      </div>
    </div>
  );
}

export default FunctionCounter;