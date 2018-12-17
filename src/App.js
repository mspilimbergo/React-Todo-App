import React, { Component } from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo'

class App extends Component {

    state = {
        todos: [
            {id: 1,content: 'Buy some milk'},
            {id: 2, content: 'Play mario kart'},
        ]
    }

    deleteTodo = (id) => {
        const newTodoArr = this.state.todos.filter(todo => {
          return todo.id !== id;
        })

        this.setState({
            todos: newTodoArr
        })
    }

    addTodoFunction = (todo) => {
        todo.id = Math.floor((Math.random() * 10) + 3);

        let newTodosArr = [...this.state.todos];
        newTodosArr.push(todo);

        this.setState({
            todos: newTodosArr
        })
    }

  render() {

    return (
      <div className="todo-app container">
          <h1 className="text-center text-primary" >Todo's</h1>
            <Todos deleteFunction={this.deleteTodo} todos={this.state.todos}></Todos>
            <AddTodo addTodoFunction={this.addTodoFunction} />
      </div>
    );
  }
}

export default App;
