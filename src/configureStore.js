import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import throttle from 'lodash/throttle';
import rootReducer from './reducers/rootReducer';
import { loadState, saveState } from './localStorage';

const addLoggingToDispatch = store => {
  const rawDispatch = store.dispatch;
  if (!console.group) return rawDispatch;

  return action => {
    console.group(action.type);
    console.log('%c prev state: ', 'color: gray', store.getState());
    console.log('%c action: ', 'color: blue', action);
    const returnValue = rawDispatch(action);
    console.log('%c next state: ', 'color: green', store.getState());
    console.groupEnd(action.type);

    return returnValue;
  };
};

const configureStore = () => {
  // const persistedState = loadState();
  const initialState = {};
  const middleware = [thunk];

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

  // if (process.env.NODE_ENV !== 'production') {
  //   store.dispatch = addLoggingToDispatch(store);
  // }

  // store.subscribe(
  //   throttle(() => {
  //     saveState({
  //       todos: store.getState().todos
  //     });
  //   })
  // );

  return store;
};

export default configureStore;
