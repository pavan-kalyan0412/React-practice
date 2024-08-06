const JSX= () => {
    var i = 5;  
    return (  
       <div>  
          <h1>{i === 1 ? 'True!' : 'False!'}</h1>  
       </div>  
    );  
 }  

 const displayMessage = ()=>{
    return "i need help"
}

// const name = "pavan kalyan"
const MSG = () => <h1> The message is: {displayMessage()}</h1>

const name = "pavan kalyan"
const Hey = () => <h1>Hello {name} </h1>

export default Hey; 

export { JSX, MSG, Hey };