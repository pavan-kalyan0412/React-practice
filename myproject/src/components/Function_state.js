// // 
// import React, { useState } from 'react';

// const InputField = () => {
//     const [inputValue, setInputValue] = useState('');

//     const handleInputChange = (e) => {
//         setInputValue(e.target.value);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         alert(`Submitted value: ${inputValue}`);
//         setInputValue('');
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input
//                 type="text"
//                 value={inputValue}
//                 onChange={handleInputChange}
//                 placeholder="Enter text..."
//             />
//             <button type="submit">Submit</button>
//         </form>
//     );
// };

// export default InputField;

// import React, { useState } from 'react';

// const Counter = () => {
//     // Using useState hook to initialize a state variable 'counter' with initial value 0
//     const [counter, setCounter] = useState(0);

//     const increment = () => {
//         setCounter(counter + 1); // Updating the 'counter' state
//     };

//     return (
//         <div>
//             <p>Counter: {counter}</p>
//             <button onClick={increment}>Increment</button>
//         </div>
//     );
// };

// export default Counter;

// import React, { useState } from 'react';

// const DarkModeToggle = () => {
//     const [isDarkMode, setIsDarkMode] = useState(false);

//     const toggleMode = () => {
//         setIsDarkMode(!isDarkMode);
//     };

//     return (
//         <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
//             <h1>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</h1>
//             <button onClick={toggleMode}>{isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}</button>
//         </div>
//     );
// };

// export default DarkModeToggle;


