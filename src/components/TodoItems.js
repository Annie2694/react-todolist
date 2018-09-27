import React,{ Component } from 'react'
class TodoItems extends Component{
    createTasks = item => {
        return (
            <li key={item.key} className="list"><p className="list1">{item.text}</p>
                <button className="list2" onClick={() => this.props.deleteItem(item.key)}>Finished</button></li>
        )
    }

    render() {
        const todoEntries = this.props.entries;
        const listItems = todoEntries.map(this.createTasks);
        var arr = [<h2 className="title">Undo</h2>,<ol className="theList">{listItems}</ol>];
        return arr;
    }
}

export default TodoItems