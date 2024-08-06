import React, { Component } from 'react'

class Reference extends Component {
    constructor(props) {
      super(props)
    
      this.myRef = React.createRef();
      }

    componentDidMount() {
        // Accessing the DOM node using ref
        this.myRef.current.focus();
        console.log(this.myRef)
    }
    clickhandler = ()=>{
        alert(this.myRef.current.value)
        console.log(this.myRef.current.value)
    };

  render() {
    return (
        <div>
      <input type="text" ref={this.myRef}/>
      <button onClick={this.clickhandler}> Click here</button>
      </div>    )
  }
}

export default Reference;