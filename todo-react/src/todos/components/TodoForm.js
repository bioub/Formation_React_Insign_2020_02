import React from 'react';

function TodoForm({ newTodo, onTodoChange, onTodoAdd }) {
  function handleSubmit(event) {
    event.preventDefault();
    onTodoAdd({
      id: Date.now(),
      title: newTodo,
      completed: false,
    });
    onTodoChange('');
  }

  function handleChange(event) {
    onTodoChange(event.target.value);
  }

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input value={newTodo} onChange={handleChange} />
      <button>+</button>
    </form>
  );
}

export default TodoForm;
