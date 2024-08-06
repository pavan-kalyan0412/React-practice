import React, { Component } from 'react';
import withCounter from './withCounter'; // Assuming the HOC is in a separate file

class Click extends Component {
  render() {
    const { count, updateCount } = this.props;
    return (
      <div>
        <button onClick={updateCount}>Clicked {count}</button>
      </div>
    );
  }
}

export default withCounter(Click, 1); // 1 is the increment value for click
