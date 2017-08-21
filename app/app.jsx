var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');
import Demo from 'Demo';
import Coordinates from 'Coordinates';

var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(() => {
  var state = store.getState();
  console.log('New state', state);
});

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Demo}/>
        <IndexRoute component={Coordinates}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
