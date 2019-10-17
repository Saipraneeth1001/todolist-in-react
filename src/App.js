import React from 'react';
//import { Navigation } from './Navigation';
import './App.css';
import { ToDoList } from './ToDoList';

class App extends React.Component {
  constructor(props){
    super(props);
  
    this.state = {
      ToDoList : [],
  }
  
  this.addItem = this.addItem.bind(this);
  this.deleteItem = this.deleteItem.bind(this);
}
addItem(e){

  if (this._inputElement.value!=""){
    var priority = document.getElementById("priority");
    var value = priority.options[priority.selectedIndex].value;
    var newItem = {
      key:Date.now(),
      text : this._inputElement.value,
      color: value,
    }

    this.setState((prevState) =>{
      return{
        ToDoList : prevState.ToDoList.concat(newItem)
      }
    });
  }
  this._inputElement.value ="";
  e.preventDefault();
//<Navigation clickHandler = { this.handleClick } />
}
deleteItem(key){
  var filtered_items = this.state.ToDoList.filter(function (item){
    return(item.key!==key)
  })
  this.setState({
    ToDoList:filtered_items
  })
}
  render(){
    return (
      <div>
       
      <div className="todoListMain">
          <div className="header">
          <form onSubmit={this.addItem}>
            <input ref={(a)=>this._inputElement = a}
             placeholder="enter text" />
             <select id="priority">
               <option value="red">High</option>
               <option value="yellow">Medium</option>
               <option value="green">Low</option>
             </select>
            <button type="submit" className="btn btn-success">Submit</button>
          </form>
          </div>
          <ToDoList entries = {this.state.ToDoList}
                    delete = {this.deleteItem}/>
        </div>
      </div>
    );
  }
 
}

export default App;
