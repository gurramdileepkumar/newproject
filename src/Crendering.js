import React, { Component } from 'react'

export default class Crendering extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:false
        }
    }
    
    render() {
        let myCnt;
        if(this.state.name){
            myCnt=<h1>bit technologies...</h1>
        }
        else{
            myCnt=<h1>bit</h1>
        }



        
        if(this.state.name){
        return (
            <div>
                <h1>rohith</h1>
            </div>
        )
    }
    else{
        return(
            <div>
                <h1>Thejeswi</h1>
            </div>
        )
    }
    return(
        <div>
            {this.state.name && <h1>welcome..</h1>}
            {this.state.name ? (<h1>somesh</h1>):(<h1>rohith</h1>)}
            {myCnt}
        </div>
    )
    }
}
