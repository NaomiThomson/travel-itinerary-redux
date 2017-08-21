var redux = require('redux');
import thunk from 'redux-thunk';



import {nameReducer} from 'reducers';
import {locationReducer} from 'reducers';

export var configure = (initalState = {}) => {
  var reducer = redux.combineReducers({
    currentName: nameReducer,
    currentLocation: locationReducer
  });

  var store = redux.createStore(reducer, initalState, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};