import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import rootReducer from './rootReducer';

const configureStore = initialState =>
  createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(reduxImmutableStateInvariant())));

export default configureStore;
