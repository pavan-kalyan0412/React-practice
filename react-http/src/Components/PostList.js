import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts:[],
         error:''
      }
    }
    componentDidMount (){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response =>{
            console.log(response)
            this.setState({posts:response.data})
        })
        .catch(error =>{
            console.error(error);
            this.setState({error:'error retriving the data'})
        })
    }
  render() {
    const {posts, error}=this.state
    return (
      <div>Lists of Posts
        {
            posts.length?
            posts.map(post => <div key={post.id}> 
            <h2> Id:{post.id}</h2>
            <p>Title:{post.title}</p> 
            <p>body:{post.body}</p>
            <hr />
            </div>):null
        }
        {error? <div>{error}</div>:null }
      </div>
    )
  }
}

export default PostList