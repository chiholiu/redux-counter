import React, { Component } from 'react';
// hook into redux and pull out the entire state
import { connect } from 'react-redux';
import './App.css';


class Counter extends Component {
  increment = () => {
    this.props.dispatch({ type: 'INCREMENT'})
  }

  decrement = () => {
    this.props.dispatch({ type: 'DECREMENT'});
  }
  render() {
    return (
      <div className="Counter">
       <h1>Counter</h1>
       <div>
         <button onClick={this.decrement}>-</button>
         <span>{this.props.count}</span>
         <button onClick={this.increment}>+</button>
       </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.count
});

export default connect(mapStateToProps)(Counter);