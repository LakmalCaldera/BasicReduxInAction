var redux = require('redux');

console.log('Starting todo redux app...');

var nextTodoId = 1;
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
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: nextTodoId++,
            text: state.text
          }
        ]
      };
    break;
    default:
    return state;
  }
};

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Subscribe to Changes in state
var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('After Subscribe - State: ', state);
  $('#app').text(state.searchText);
});


var currentState = store.getState();
console.log('Current Todo App State: ', currentState);

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Go to Sleep'
});

//unsubscribe();

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Study Redux'
});

store.dispatch({
  type: 'ADD_TODO',
  text: 'Do some meditation'
});
