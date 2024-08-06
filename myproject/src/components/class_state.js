import { Component } from "react";

class Counter extends Component {
    constructor() {
        super();
        this.state ={
            counter : 0
        };
    }

    incrementCount = () =>{
        this.setState ({
            counter: this.state.counter + 1,
        });
    }

    render(){
        return(
            <div>
                <h3>Count valus is : {this.state.counter}</h3>
                <button onClick = {this.incrementCount}> increment    </button>
            </div>
        )
    }
}

export default Counter;