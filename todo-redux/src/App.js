import React from "react";
import TodoForm from "./todos/components/TodoForm";
import TodoList from "./todos/components/TodoList";

function App() {
  return (
    <div className="App">
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
