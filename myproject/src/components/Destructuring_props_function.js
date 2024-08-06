function Prof (props){
    const {name, lastname} = props;
    console.log(name, lastname);

    return (
        <h1>
            Name: {props.name} {props.lastname}
        </h1>
    )
}

// import React, { Component } from 'react';

// // Class-based component
// class MyClassComponent extends Component {
//     render() {
//         const { prop1, prop2 } = this.props; // Destructuring props in the render method
//         return (
//             <div>
//                 <p>Prop 1: {prop1}</p>
//                 <p>Prop 2: {prop2}</p>
//             </div>
//         );
//     }
// }

// export default MyClassComponent;
export default Prof;