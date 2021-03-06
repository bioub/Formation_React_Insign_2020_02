import React from 'react';

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

export default TodoForm;