import React, { Component } from 'react'

class Forms extends Component {
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

    handleSubmit = (event) =>{
        
        // console.log({
        //     FIRSTNAME: this.state.firstname,
        //     LASTNAME: this.state.lastname,
        //     BIO: this.state.bio,
        //     Topic: this.state.topic
        // })
        alert(`${this.state.firstname} ${this.state.lastname} ${this.state.bio} ${this.state.topic}`)
        event.preventDefault();
    }
  render() {
    return (
        <form onSubmit={this.handleSubmit}>
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
            <button type="submit"> Submit </button>
         </form>
     
    )
  }
}

export default Forms;