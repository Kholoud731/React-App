import React, { Component } from 'react';
import AddForm from './AddForm';
import ToDoItem from './ToDoItems';


class ToDo extends React.Component {
    constructor(){
        super()
        this.state = {
            items : [
                {
                    text : 'kholoud1',
                    done : false,
                    delete: false
                },
                {
                    text : 'kholoud2',
                    done : false,
                    delete: false
                },
                {
                    text : 'kholoud3',
                    done : false,
                    delete: false
                }
            ]
        }
    }
    addItem = (item) => {
console.log(item)
        this.state.items.push(item)

        this.setState({items : this.state.items})
    }

    deleteItem = (ind) => {
        this.state.items[ind].delete = true

    console.log(this.state.items[ind].delete)
        this.setState({items : this.state.items})
        console.log(this.state.items)

    }


    doneItem = (ind) => {
        this.state.items[ind].done = !this.state.items[ind].done
        this.setState({items : this.state.items})
        console.log(this.state.items)

    }
    render() { 
        return <div className='back'>
            <div className='cont'>
                <h2 style={{color: 'white'}}>Please find Your TO DO list</h2>

            {
                this.state.items.map((el,ind) =>  <ToDoItem key = {ind} index = {ind} item = {el} task = {el.text} deleteItem = {this.deleteItem} doneItem = {this.doneItem}/>)

            }

            <AddForm addItem = {this.addItem}/> 
            </div>
        </div>;
    }
}
 
export default ToDo;