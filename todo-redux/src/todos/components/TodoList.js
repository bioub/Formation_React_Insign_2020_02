import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos = [], onTodoDelete }) {
  const itemsJsx = todos.map((t) => <TodoItem key={t.id} todo={t} onTodoDelete={onTodoDelete} />);
  return <div className="TodoList">
    {itemsJsx}
  </div>;
}

export default TodoList;
