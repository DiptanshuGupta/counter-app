import React, { Component } from 'react';
import './App.css';

class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  render() {
    return (
      <div className="counter-box">
        <h2 className="counter-heading">Class Component</h2>
        <div className="counter-value">{this.state.count}</div>
        <div className="counter-buttons">
          <button className="increment" onClick={this.increment}>+</button>
          <button className="decrement" onClick={this.decrement}>-</button>
        </div>
      </div>
    );
  }
}

export default ClassCounter;