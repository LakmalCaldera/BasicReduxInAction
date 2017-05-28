export var searchTextReducer = (state = '', action) => {
  switch(action.type){
    case 'CHANGE_SEARCH_TEXT':
      return action.searchText;
    break;
    default:
      return state;
    break;
  }
};


var nextTodoId = 1;
export var todosReducer = (state = [], action) => {
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

export var mapReducer = (state = {isFetching: false, url: undefined}, action) => {
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
