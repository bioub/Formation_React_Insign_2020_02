import { createStore } from "redux";

const initialState = {
  newTodo: "Achet",
  todos: [
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

// Fonction pure
// - prédictive, si on l'appelle avec des params identiques
// elle retourne toujours le même résultat
// - ne doit pas modifier ses paramètres d'entrées
// - ne doit pas avoir de side-effects (requete Ajax, accès
// au localStorage)
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "TODO_CHANGE":
      return {
        ...state, // pour conserver les anciennes valeurs
        newTodo: action.payload
      };
    case "TODO_ADD":
      return {
        ...state, // pour conserver les anciennes valeurs
        newTodo: "",
        todos: [action.payload, ...state.todos]
      };
    case "TODO_DELETE":
      return {
        ...state, // pour conserver les anciennes valeurs
        todos: state.todos.filter((t) => t.id !== action.payload.id)
      };
    default:
      return state;
  }
}

export function configureStore() {
  const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  // plugins

  return store;
}
