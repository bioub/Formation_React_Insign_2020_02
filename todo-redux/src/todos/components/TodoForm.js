import React from 'react';
import { connect } from 'react-redux';

function TodoForm({ newTodo = '', onTodoChange, onTodoAdd }) {
  function handleSubmit(event) {
    event.preventDefault();

    if (!newTodo) {
      return;
    }

    onTodoAdd({
      id: Date.now(),
      title: newTodo,
      completed: false,
    });
  }

  function handleChange(event) {
    onTodoChange(event.target.value);
  }
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input value={newTodo} onChange={handleChange} />
      <button disabled={!newTodo}>+</button>
    </form>
  );
}

function mapStateToProps(state) {
  return {
    newTodo: state.newTodo
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onTodoChange(payload) {
      dispatch({ type: 'TODO_CHANGE', payload })
    },
    onTodoAdd(payload) {
      dispatch({ type: 'TODO_ADD', payload })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
