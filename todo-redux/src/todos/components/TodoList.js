import React from 'react';
import TodoItem from './TodoItem';
import { connect } from 'react-redux';

function TodoList({ todos = [], onTodoDelete }) {
  const itemsJsx = todos.map((t) => <TodoItem key={t.id} todo={t} onTodoDelete={onTodoDelete} />);
  return <div className="TodoList">
    {itemsJsx}
  </div>;
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onTodoDelete(payload) {
      dispatch({ type: 'TODO_DELETE', payload })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
