function FunctionEvent(){
    function HandlerClick (){
        console.log("button clicked");
    }

    return (
        <div>
            Functional Component:
            <button onClick={HandlerClick}> Click here</button>
        </div>
    )
}

export default FunctionEvent;