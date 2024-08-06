import React, { Component } from 'react'

class Form extends Component {
    state = {
        firstname: " ",
        lastname:'',
        bio:'',
    }

    handlefirstChange = (event)=>{
        this.setState({
            firstname:event.target.value,
            
        })
    };


    handlelastChange = (event)=>{
        this.setState({
            lastname:event.target.value,
            
        })
    };
    handlebioChange = (event)=>{
        this.setState({
           bio:event.target.value,
            
        })
    };
    handletopicChange = (event)=>{
        this.setState({
            topic:event.target.value,
            
        })
    };
  render() {
    return (
        <form>
            <div>
                <label>Firstname:</label> <br></br>
            <input type="text" value={this.state.firstname} onChange={this.handlefirstChange}></input>
            </div>
            <div>
                <label> lastname: </label> <br></br>
                <input type="text" value={this.state.lastname} onChange={this.handlelastChange}></input>
            </div>
            <div>
                <label>Bio</label><br></br>
                <textarea type="text" value={this.state.bio} onChange={this.handlebioChange}></textarea>
            </div>
            <div>
                <label>Select a Topic:</label><br></br>
                <select value={this.state.topic} onChange={this.handletopicChange}>
                    <option value="react" >React</option>
                    <option value="Node.js" >Node.js</option>
                    <option value="Express.js" >Express.js</option>
                </select>
                <p>Selected option: {this.state.topic}</p>
            </div>
         </form>
     
    )
  }
}

export default Form;