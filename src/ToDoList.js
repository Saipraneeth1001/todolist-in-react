
import React , { Component } from 'react';
import './ToDoList.css';
export class ToDoList extends React.Component{
    constructor(props){
        super(props);

        this.createTasks = this.createTasks.bind(this);
    }
    createTasks(item)  {
        return( <li onClick = {() => this.delete(item.key)}
             key = {item.key}>{item.text}</li>)
    } 
    delete(key){
        this.props.delete(key);
    }
    render(){
        var entries = this.props.entries;
        var list = entries.map(this.createTasks);
        return(
            <ul className="theList">
               {list} 
            </ul>
        );
    }   
}