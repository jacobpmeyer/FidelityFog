import {
  createStore, 
  applyMiddleware
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const RootReducer = {}

const configureStore = (preloadedState = {}) => (
  createStore(RootReducer, preloadedState, applyMiddleware(thunk, logger))
)

export default configureStore;