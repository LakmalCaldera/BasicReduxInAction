var redux = require('redux');

console.log('Starting redux example');

var stateDefault = {
  name: 'Anonyous'
};
var reducer = (state = stateDefault, action) => {
  console.log('New Action ', action);

  switch(action.type){
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      }
    break;
    default:
    return state;
  }
};

var store = redux.createStore(reducer);
var currentState = store.getState();
console.log('currentState of todo App: ', currentState);

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Lakmal'
});

console.log('Name should be andrew: ', store.getState());































/*
// Pure function, No Side effects and always return the same value for same arguments
function add(a, b){
  return a + b;
}

var a = 3;
function add(b){
  return a + b;
}

var result;
function add(a, b){
  result = a + b;
  return result; //Side effect
}

function add(a, b){
  return a + b + new Date().getSeconds();
}

function changeProps(obj){
  return {
    ...obj,
    name: 'Jen'
  }
  // obj.name = 'Jen';
  // return obj;
}

var startingValue = {
  name: 'Andrew',
  age: 25
}

var res = changeProps(startingValue);
console.log(startingValue);
console.log(res);
*/
