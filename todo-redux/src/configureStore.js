import { createStore, combineReducers } from "redux";
import { todosReducer } from "./todos/reducers";

const rootReducer = combineReducers({
  todos: todosReducer
})

export function configureStore() {
  const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  // plugins

  return store;
}
