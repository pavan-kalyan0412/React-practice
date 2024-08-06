// function Profile(props){
//     console.log(props)
//     return <h1>Name: Pavan kalyan</h1>
// }

// export default Profile;

function Profile(props){
    console.log(props)
    return <h1>Name: {props.name} {props.lastname} 
    <p>{props.children}</p></h1>
}

// Greeting component
const Greeting = (props) => {
    return (
        <div>
            <h1>Hello, {props.name}! {props.children}</h1>
        </div>
    );
};


export {Profile, Greeting} ;