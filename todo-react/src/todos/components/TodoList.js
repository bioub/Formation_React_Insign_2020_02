import React, { PureComponent } from "react";
import TodoItem from "./TodoItem";

// class TodoList extends Component {
//   shouldComponentUpdate(nextProps) {
//     return this.props.todos !== nextProps.todos;
//   }
//   render() {
//     const { todos, onTodoDelete } = this.props;
//     const itemsJsx = todos.map(t => (
//       <TodoItem key={t.id} todo={t} onTodoDelete={onTodoDelete} />
//     ));
//     return <div className="TodoList">{itemsJsx}</div>;
//   }
// }

// class TodoList extends PureComponent {
//   render() {
//     const { todos, onTodoDelete } = this.props;
//     const itemsJsx = todos.map(t => (
//       <TodoItem key={t.id} todo={t} onTodoDelete={onTodoDelete} />
//     ));
//     return <div className="TodoList">{itemsJsx}</div>;
//   }
// }

function TodoList({ todos, onTodoDelete }) {
  const itemsJsx = todos.map(t => (
    <TodoItem key={t.id} todo={t} onTodoDelete={onTodoDelete} />
  ));
  return <div className="TodoList">{itemsJsx}</div>;
}

export default React.memo(TodoList);
