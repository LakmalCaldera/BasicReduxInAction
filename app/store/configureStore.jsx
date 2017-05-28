var redux = require('redux');
var thunk = require('redux-thunk').default;

var {searchTextReducer, todosReducer, mapReducer} = require('./../reducers/index');
export var configure = () => {
  var reducer = redux.combineReducers({
    searchText: searchTextReducer,
    todos: todosReducer,
    map: mapReducer
  });

  var store = redux.createStore(reducer, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
}
