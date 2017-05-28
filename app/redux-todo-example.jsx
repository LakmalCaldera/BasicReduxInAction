var redux = require('redux');

console.log('Starting todo redux app...');


var stateDefault = {
  searchText: '',
  showCompleted: false,
  todos: []
};
var reducer = (state = stateDefault, action) => {
  console.log('New Action ', action);

  switch(action.type){
    case 'CHANGE_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.searchText
      }
    break;
    default:
    return state;
  }
};

var store = redux.createStore(reducer);
var currentState = store.getState();
console.log('Current Todo App State: ', currentState);

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Go to Sleep'
});

console.log('New Todo App State: ', store.getState());
