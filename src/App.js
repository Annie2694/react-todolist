import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList'
import TodoItems from "./components/TodoItems";
import FinishedItems from "./components/FinishedItems";

class App extends Component {
  constructor(){
      super()
      this.state={
          items:[],
          currentItem:{text:'',key:''},
          finishItems:[],
      }
  }
  handleInput = e => {
      const itemText = e.target.value
      const currentItem = {text:itemText,key:Date.now()}
      this.setState({currentItem})
  }
  addItem = e => {
      e.preventDefault();
      const newItem = this.state.currentItem;
      if(newItem.text !== ''){
          const items = [...this.state.items,newItem];
          this.setState({
              items:items,
              currentItem:{text:'',key:''},
          })
      }else{
        alert('Please enter the task!');
      }
  }
  deleteItem = key => {
      const filteredItems = this.state.items.filter(item => {
        return item.key !== key
      });
      const finishItem = this.state.items.filter(item => item.key === key);
      this.setState({
          items:filteredItems,
          finishItems:this.state.finishItems.concat(finishItem),
      })
  }
  render() {
    return (
      <div className="App">
        <TodoList addItem={this.addItem}
                  inputElement={this.inputElement}
                  handleInput={this.handleInput}
                  currentItem={this.state.currentItem}
        />
          <div className="content">
              <TodoItems entries={this.state.items} deleteItem={this.deleteItem} />
              <FinishedItems entries={this.state.finishItems} />
          </div>
      </div>
    );
  }
  inputElement=React.createRef()
}

export default App;
