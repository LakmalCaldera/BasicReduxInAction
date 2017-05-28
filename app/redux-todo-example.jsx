var redux = require('redux');
var axios = require('axios');

console.log('Starting todo redux app...');

var actions = require('./actions/index');
var store = require('./store/configureStore').configure();

var unsubscribe = store.subscribe(() => {
var state = store.getState();

  console.log('After Subscribe - State: ', state);
  if(state.map.isFetching){
    $('#app').text('Loading...');
  }else if(state.map.url){
    $('#app').html('<a target="_blank" href="' + state.map.url + '" target="_blank">View Your Location</a>');
  }
});
//unsubscribe();

var currentState = store.getState();
console.log('Current Todo App State: ', currentState);

// Dispatch Events...
// -------------

store.dispatch(actions.fetchLocation());

store.dispatch(actions.changeSearchText('Go to sleep'));

store.dispatch(actions.changeSearchText('Study Redux'));

store.dispatch(actions.addTodo('Do some meditation'));

store.dispatch(actions.addTodo('Sleep Early...zzz'));

store.dispatch(actions.removeTodo(1));

store.dispatch(actions.changeSearchText('Being Awesome!!'));
