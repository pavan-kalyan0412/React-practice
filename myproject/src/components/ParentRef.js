import React, { Component } from 'react'
import InputRef from './InputRef'

class ParentRef extends Component {
    constructor(props) {
      super(props)
      this.componentRef = React.createRef();
      }

    clickHandler = ()=>{
        this.componentRef.current.focusInput()
    }

  render() {
    return (
      <div>
        <InputRef ref={this.componentRef} />
        <button onClick = {this.clickHandler}>Focus Input</button>
        </div>
    )
  }
}

export default ParentRef