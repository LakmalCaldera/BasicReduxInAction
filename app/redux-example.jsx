var redux = require('redux');

console.log('Starting redux example');
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
