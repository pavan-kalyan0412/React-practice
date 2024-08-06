import React, { Component } from 'react';

class MyComponent extends Component {
    handleClick = () => {
        console.log('Button clicked!');
    };

    render() {
        return (
            <div>
                {/* Event handling in a class component */}
                <button onClick={this.handleClick}>Click Me</button>
            </div>
        );
    }
}

export default MyComponent;

