import React, { Component } from 'react'

export default class Api extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts : [],

             isLoading : false,
             isError : false
        }
    }
   

    async componentDidMount (){
        this.setState({isLoading : true})
        const responce = await fetch('https://jsonplaceholder.typicode.com/posts')
        if (responce.ok){
            const posts = await responce.json()
            this.setState({posts,isLoading:false})
        }
        else{
            this.setState({isError : true,isLoading : false})
        }
    }

    
    renderTableHeader = () =>{
        return Object.keys(this.state.posts [0]).map(attr =><th key={attr}>{attr.toUpperCase ()}</th>

        )
    }

    renderTableRows = () =>{
        return this.state.posts.map(post => {
            return(
                <tr key={post.id}>
                    <td>{post.userId}</td>
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    <td>{post.body}</td>
                </tr>
            )
        })
    }
    
    render() {
        const {posts, isLoading,isError} = this.state
        if(isLoading){
            return <div>loading...</div>
        }
        if (isError){
            return <div>Error...</div>
        }
      return posts.length > 0 ?(
          <table border="1">
              <thead>
                  <tr>
                      {this.renderTableHeader()}
                  </tr>
              </thead>
              <tbody>
                  {this.renderTableRows()}
              </tbody>
          </table>
      ) :(
          <div>
              posts
          </div>
      )
    }
}
