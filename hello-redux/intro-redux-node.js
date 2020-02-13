const { createStore } = require('redux');

const initialState = {
    count: 0,
};

// recoit le state précédent + event retourne le state suivant
function reducer(previousState, action) {
    if (action.type === 'INCREMENT_COUNT') {
        return {
            count: previousState.count + 1,
        }
    }

    return previousState;
}

const store = createStore(reducer, initialState);

store.subscribe(() => {
   console.log(store.getState());
});

store.dispatch({ type: 'INCREMENT_COUNT' });
store.dispatch({ type: 'INCREMENT_COUNT' });
store.dispatch({ type: 'INCREMENT_COUNT' });