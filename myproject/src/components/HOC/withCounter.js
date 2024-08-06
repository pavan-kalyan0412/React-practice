import React, { Component } from 'react';

const withCounter = (WrappedComponent, incrementValue) => {
  class WithCounter extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }

    updateCount = () => {
      this.setState((prevState) => ({
        count: prevState.count + incrementValue,
      }));
    };

    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          updateCount={this.updateCount}
          {...this.props}
        />
      );
    }
  }

  return WithCounter;
};

export default withCounter;
