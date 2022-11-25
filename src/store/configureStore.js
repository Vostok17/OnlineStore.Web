import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import initialState from './initialState';
import rootReducer from './rootReducer';

const configureStore = () => createStore(rootReducer, initialState, applyMiddleware(thunk));

export default configureStore;
