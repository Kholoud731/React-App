import React, { Component } from 'react';

class AddForm extends React.Component {
    constructor(){
        super()
        this.state={
            text : "",
            done : false,
            delete: false
        }
    }
    getValue = (e) => {
        let task = e.target.value
        this.setState({text : task})
    }
addTask = () => {
    let item = {
        text: `${this.state.text}`,
        done: false,
        delete: false
    }
    this.props.addItem(item)
}

    
    render() { 

        return <>
        
    task: <input type= 'text' onChange={this.getValue } vlaue = {this.state.text} />
    <button onClick = {this.addTask} style={{border: 'none', background:'green'}}>Add Taks</button>
        </>;
    }
}
 
export default AddForm;