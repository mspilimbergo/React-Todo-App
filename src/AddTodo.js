import React from 'react'
import {Component} from 'react'


class AddTodo extends Component {

    state = {
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodoFunction(this.state);
        this.setState({
            content: ''
        })
    }

    render() {
        return (
            <div className="form-group">
                <form onSubmit={this.handleSubmit}>
                    <input id="todo-input" className="form-control text-center" placeholder="Add new todo" onChange={this.handleChange} value={this.state.content}/>
                </form>
            </div>
        )
    }
}

export default AddTodo;