import React, { Component } from "react";
import TodoForm from "./todos/components/TodoForm";
import TodoList from "./todos/components/TodoList";

class Todos extends Component {
  state = {
    newTodo: "Achet",
    todos: [
      {
        id: 123,
        title: "Acheter du pain",
        completed: false
      },
      {
        id: 456,
        title: "Utiliser React",
        completed: true
      }
    ]
  };

  handleTodoChange = newTodo => {
    this.setState({
      newTodo
    });
  };

  handleTodoAdd = todo => {
    this.setState({
      newTodo: '',
      todos: [todo, ...this.state.todos]
    });
  };

  handleTodoDelete = todoToDelete => {
    const i = this.state.todos.indexOf(todoToDelete);
    this.setState({
      todos: [...this.state.todos.slice(0, i), ...this.state.todos.slice(i + 1)]
    });
  };

  render() {
    const { newTodo, todos } = this.state;
    return (
      <div className="Todos">
        <TodoForm
          newTodo={newTodo}
          onTodoChange={this.handleTodoChange}
          onTodoAdd={this.handleTodoAdd}
        />
        <TodoList todos={todos} onTodoDelete={this.handleTodoDelete} />
      </div>
    );
  }
}

export default Todos;
