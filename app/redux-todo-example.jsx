var redux = require('redux');
var axios = require('axios');

console.log('Starting todo redux app...');

// SearchText Reducer and action generators
// -------------

var searchTextReducer = (state = '', action) => {
  switch(action.type){
    case 'CHANGE_SEARCH_TEXT':
      return action.searchText;
    break;
    default:
      return state;
    break;
  }
};

var changeSearchText = (searchText) => {
  return {
    type: 'CHANGE_SEARCH_TEXT',
    searchText
  }
};

// Todos Reducer and action generators
// -------------

var nextTodoId = 1;
var todosReducer = (state = [], action) => {
  switch(action.type){
    case 'ADD_TODO':
      return [
          ...state,
          {
            id: nextTodoId++,
            text: action.text
          }
        ];
    break;
    case 'REMOVE_TODO':
    return state.filter((todo) => todo.id !== action.id);
    break;
    default:
      return state;
    break;
  }
};

var addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    text
  }
};

var removeTodo = (id) => {
  return {
    type: 'REMOVE_TODO',
    id
  }
};


// Todos Reducer and action generators
// -------------

var mapReducer = (state = {isFetching: false, url: undefined}, action) => {
  switch(action.type){
    case 'START_LOCATION_FETCH':
    return {
      isFetching: true,
      url: undefined
    }
    case 'COMPLETE_LOCATION_FETCH':
    return {
      isFetching: false,
      url: action.url
    }
    default:
    return state;
  }
};

var startLocationFetch = () => {
  return {
    type: 'START_LOCATION_FETCH'
  }
}

var completeLocationFetch = (url) => {
  return {
    type: 'COMPLETE_LOCATION_FETCH',
    url
  }
}

var fetchLocation = () => {
  store.dispatch(startLocationFetch());
  axios.get('/json').then(function(res){
    var loc = res.data.loc;
    var baseUrl = 'http://map.google.com?q=';
    store.dispatch(completeLocationFetch(baseUrl + loc));
  });
};

// Combining Reducers
// -------------

var reducer = redux.combineReducers({
  searchText: searchTextReducer,
  todos: todosReducer,
  map: mapReducer
});

// Creating Store
// -------------

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Subscribe to changes in state
// -------------

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

fetchLocation();

store.dispatch(changeSearchText('Go to sleep'));

store.dispatch(changeSearchText('Study Redux'));

store.dispatch(addTodo('Do some meditation'));

store.dispatch(addTodo('Sleep Early...zzz'));

store.dispatch(removeTodo(1));

store.dispatch(changeSearchText('Being Awesome!!'));
