import React, { ChangeEvent, FormEvent } from 'react';
import { Todo } from '../Todo';

interface Props {
  newTodo: string;
  onTodoChange: (value: string) => void;
  onTodoAdd: (todo: Todo) => void;
}

function TodoForm({ newTodo, onTodoChange, onTodoAdd }: Props) {
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    onTodoAdd({
      id: Date.now(),
      title: newTodo,
      completed: false,
    });
    onTodoChange('');
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
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
