import { TODO_ADD, TODO_CHANGE, TODO_DELETE } from "./constants";

// Flux Standard Action (FSA)
// https://github.com/redux-utilities/flux-standard-action

// Redux Actions pour créer ces actions creators plus rapidement
// https://github.com/redux-utilities/redux-actions
// soit Redux Toolkit
// https://redux-toolkit.js.org/

export function todoAdd(payload) {
  return { type: TODO_ADD, payload };
}

export function todoChange(payload) {
  return { type: TODO_CHANGE, payload };
}

export function todoDelete(payload) {
  return { type: TODO_DELETE, payload };
}
