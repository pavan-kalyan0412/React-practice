import { Component } from 'react';

// Class-based component
class Greet extends Component {
    render() {
        return (
            <div>
                <h1>Hello, {this.props.name}!</h1>
            </div>
        );
    }
}

class Mes extends Component {
    render(){
        return(
            <div>
                <h1>
                    Message: {this.props.messageCode} and {this.props.Message}
                </h1>
            </div>
        )
    }
}
export  {Greet, Mes};