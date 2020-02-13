import React from 'react';
import TodoItem from './TodoItem';
import { Todo } from '../Todo';

interface Props {
  todos: Todo[];
}

function TodoList({ todos }: Props) {
  const itemsJsx = todos.map((t) => <TodoItem key={t.id} todo={t} />);
  return <div className="TodoList">
    {itemsJsx}
  </div>;
}

export default TodoList;
