import { createStore } from 'redux';

const initialState = {
  count: 0,
};

// Fonction pure
// - prédictive, si on l'appelle avec des params identiques
// elle retourne toujours le même résultat
// - ne doit pas modifier ses paramètres d'entrées
// - ne doit pas avoir de side-effects (requete Ajax, accès
// au localStorage)
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT_COUNT':
      return {
        count: state.count + 1,
      };
    default:
      return state;
  }
}

export function configureStore() {
  const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

  // plugins

  return store;
}
