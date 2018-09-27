import React, { Component } from 'react'
class TodoList extends Component {
    componentDidUpdate(){
        this.props.inputElement.current.focus()
    }
    render(){
        return (
            <div className="todoListMain">
                <div className="banner">Annie - todolist</div>
                <div className="header">
                    <form onSubmit={this.props.addItem}>
                        <input className="text-input" placeholder="Task" ref={this.props.inputElement}
                                value={this.props.currentItem.text} onChange={this.props.handleInput}/>
                        <button type="submit" className="add">Add</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default TodoList