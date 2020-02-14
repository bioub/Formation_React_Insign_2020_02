// Pour optimiser les selecteurs avec memoization -> reselect
// https://github.com/reduxjs/reselect

export function selectNewTodo(state) {
  return state.todos.inputValue;
}

export function selectTodos(state) {
  return state.todos.items;
}

export function selectTodosCompleted(state) {
  return selectTodos(state).filter(t => t.completed);
}

export function selectTodosUnompleted(state) {
  return selectTodos(state).filter(t => !t.completed);
}
