import React,{ Component } from 'react'
class FinishedItems extends Component{
    createTask = item => {
        return (
            <li key={item.key} className="list"><p className="list1">{item.text}</p></li>
        )
    }

    render() {
        const todoEntries = this.props.entries;
        const finishItems = todoEntries.map(this.createTask);
        var arr = [<h2 className="title">Finished</h2>,<ul className="theList">{finishItems}</ul>];
        return arr;
    }
}

export default FinishedItems