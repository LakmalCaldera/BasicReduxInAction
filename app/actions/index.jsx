var store = require('./../store/configureStore').configure();
var axios = require('axios');
export var changeSearchText = (searchText) => {
  return {
    type: 'CHANGE_SEARCH_TEXT',
    searchText
  }
};


export var addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    text
  }
};

export var removeTodo = (id) => {
  return {
    type: 'REMOVE_TODO',
    id
  }
};


export var startLocationFetch = () => {
  return {
    type: 'START_LOCATION_FETCH'
  }
}

export var completeLocationFetch = (url) => {
  return {
    type: 'COMPLETE_LOCATION_FETCH',
    url
  }
}

export var fetchLocation = () => {
  return (dispatch, getState) => {
    dispatch(startLocationFetch());
    axios.get('/json').then(function(res){
      var loc = res.data.loc;
      var baseUrl = 'http://map.google.com?q=';
      dispatch(completeLocationFetch(baseUrl + loc));
    });
  }
};
