import React, { Component } from 'react';

class ToDoItem extends React.Component {
    deleteTask = () => {
    
        this.props.deleteItem(this.props.index)

    }

    doneTask = () => {
    
        this.props.doneItem(this.props.index)

    }


    
    render() { 
        return (



        


<div className="input-group input-group-lg" style = {{display:this.props.item.delete?'none':'flex'}}>
<span className="input-group-text" id="inputGroup-sizing-lg" style={{background:'green'}}>
    <button onClick={this.doneTask} style={{background:'green', border:'none', width:'100%', display:'inline-block'}}>Done</button>
    </span>
<span className="input-group-text" id="inputGroup-sizing-lg" style={{background:'red'}}>
    <button onClick={this.deleteTask} style={{background:'red', border:'none', width:'100%', display:'inline-block'}}>Delete</button>
    </span>
<input type="text" 
className="form-control" 
aria-label="Sizing example input" 
aria-describedby="inputGroup-sizing-lg"
style = {{backgroundColor:this.props.item.done?'green':'white', textAlign:'right'}}
disabled
value={this.props.task}/>
</div>
        )

    }
}
 
export default ToDoItem;