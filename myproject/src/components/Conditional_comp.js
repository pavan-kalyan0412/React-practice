// import {useState} from "react";

// export default function ConditionalComp (){
//     const [diaplay, setDisplay] = useState(true);

//     if(diaplay){
//         return (
//             <div>
//                 <h3> This is Conditional statement</h3>
//             </div>
//         )
//     } else {
//         return (
//             <div>
//                 <h3>
//                     Nothing to see here
//                 </h3>
//             </div>
//         );;
//     }

// }


// import React, { useState } from 'react';

// const Greeting = () => {
//   const [showGreeting, setShowGreeting] = useState(true);

//   const toggleGreeting = () => {
//     setShowGreeting(!showGreeting);
//   };

//   return (
//     <div>
//       <button onClick={toggleGreeting}>Toggle Greeting</button>
//       {showGreeting ? <h2>Welcome to React!</h2> : <h3>React is great and most important</h3>}
//     </div>
//   );
// };

// export default Greeting;

// import {useState}  from "react";
// function Element (){
//     const [display, setDisplay] = useState(false);

//     let output;
//     if(display){
//         output = <h3> This is elements variable example</h3>
//     } else {
//         output = <h2> this is null</h2>
//     };
//     return <div>{output}</div>
// };

// export default Element;


import React, { useState } from 'react';

const ConditionalRender = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    let content;
    if (isLoggedIn) {
        content = (
            <div>
                <h1>Welcome, Pavan!</h1>
                <button onClick={handleLogout}>Logout</button>
            </div>
        );
    } else {
        content = (
            <div>
                <h1>Please log in</h1>
                <button onClick={handleLogin}>Login</button>
            </div>
        );
    }

    return (
        <div>
            {content}
        </div>
    );
};

export default ConditionalRender;
