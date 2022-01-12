import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name :'',
             age : '',
             friends :[
                 {
                     name :"bit",
                     age : "25"
                 }
             ]
        }
    }
    changeData =(e) =>{
        this.setState({
            [e.target.name] : e.target.value
        });
    }
    addObj = () =>{
        this.setState({
            friends:[...this.state.friends,{
                name :this.state.name, age :this.state.age
            }],
            name :'',
            age :''
        }

        )
    }
    
    render() {
        return (
            <div>
                <input type ="text" name="name" value={this.state.name}  onChange={this.changeData}/>
                <input type ="text" name="age" value={this.state.age}  onChange={this.changeData} />
                <button onClick={this.addObj}>Add</button>

                <table border={1}>
                    <tr>
                        <th>s.no</th>
                        <th>name</th>
                        <th>age</th>
                    </tr>
                   {this.state.friends.map((friends,i) => {
                               return(
                                   <tr>
                                       <td>{i + 1}</td>
                                       <td>{friends.name}</td>
                                       <td>{friends.age}</td>
                                   </tr>
                               )
                   })}
                </table>
                
            </div>
        )
    }
}
