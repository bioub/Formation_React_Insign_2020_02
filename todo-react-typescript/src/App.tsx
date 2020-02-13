import React, { Component } from 'react';
import { Todo } from './todos/Todo';
import TodoForm from './todos/components/TodoForm';
import TodoList from './todos/components/TodoList';

interface State {
  newTodo: string;
  todos: Todo[];
}

class App extends Component {
  state: State = {
    newTodo: 'Achet',
    todos: [
      {
        id: 123,
        title: 'Acheter du pain',
        completed: false,
      },
      {
        id: 456,
        title: 'Utiliser React',
        completed: true,
      },
    ],
  };

  handleTodoChange = (newTodo: string) => {
    this.setState({
      newTodo,
    });
  };

  handleTodoAdd = (todo: Todo) => {
    this.setState({
      todos: [todo, ...this.state.todos],
    });
  };

  render() {
    const { newTodo, todos } = this.state;
    return (
      <div className="App">
        <TodoForm
          newTodo={newTodo}
          onTodoChange={this.handleTodoChange}
          onTodoAdd={this.handleTodoAdd}
        />
        <TodoList todos={todos} />
      </div>
    );
  }
}

export default App;
