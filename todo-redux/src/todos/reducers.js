import { TODO_ADD, TODO_DELETE, TODO_CHANGE } from "./constants";
import { combineReducers } from "redux";

const initialState = {
  inputValue: "Achet",
  items: [
    {
      id: 1,
      title: "Acheter du pain",
      completed: false
    },
    {
      id: 2,
      title: "Aller au sport",
      completed: true
    },
    {
      id: 3,
      title: "Utiliser Redux",
      completed: false
    }
  ]
};

export function inputValueReducer(state = initialState.inputValue, action) {
  switch (action.type) {
    case TODO_CHANGE:
      return action.payload;
    case TODO_ADD:
      return "";
    default:
      return state;
  }
}

export function itemsReducer(state = initialState.items, action) {
  switch (action.type) {
    case TODO_ADD:
      return [action.payload, ...state];
    case TODO_DELETE:
      return state.filter(t => t.id !== action.payload.id);
    default:
      return state;
  }
}

export const todosReducer = combineReducers({
  inputValue: inputValueReducer,
  items: itemsReducer
});
