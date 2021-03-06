import React from 'react';


function TodoItem({ todo = {}, onTodoDelete }) {
  return (
    <div className="TodoItem">
      <input type="checkbox" defaultChecked={todo.completed} />
      <span>{todo.title}</span>
      <button onClick={() => onTodoDelete(todo)}>-</button>
    </div>
  );
}

export default TodoItem;
