import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import throttle from "lodash/throttle";
import rootReducer from "./reducers/rootReducer";
import { loadState, saveState } from "./localStorage";

const configureStore = () => {
  const persistedState = loadState();
  const middleware = [thunk];

  const store = createStore(
    rootReducer,
    persistedState,
    compose(
      applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

  store.subscribe(
    throttle(() => {
      saveState({
        todos: store.getState().todos
      });
    })
  );

  return store;
};

export default configureStore;
