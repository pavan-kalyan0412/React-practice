import React, { Component } from 'react';
import withCounter from './withCounter'; // Assuming the HOC is in a separate file

class Hover extends Component {
  render() {
    const { count, updateCount } = this.props;
    return (
      <div>
        <h2 onMouseOver={updateCount}>HOVERED {count} times</h2>
      </div>
    );
  }
}

export default withCounter(Hover, 1); // 1 is the increment value for hover
