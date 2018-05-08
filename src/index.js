import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    React.createElement(
      'div',
      null,
      React.createElement('h1', null, 'Hello')
    ),
    document.getElementById('root')
  );

// This is JSX
ReactDOM.render(
    <div>
      <h1>Hello</h1>
    </div>,
    document.getElementById('root'));

// React.createElement Method
ReactDOM.render(
  React.createElement(
        'ul',
        null,
        React.createElement( 'li', null, 'Apples' ),
        React.createElement( 'li', null, 'Oranges' )
      ),
      document.getElementById('root'));
    
// Translating HTML To JSX
ReactDOM.render(
  <ul>
    <li>Apples</li>
    <li>Oranges</li>
  </ul>,

  document.getElementById('root'));

// The {} in JSX signify we are going to be inserting JavaScript which includes variables, JavaScript expressions, and calling functions. 

const item1 = "Apples";
const item2 = "Oranges";

ReactDOM.render(
  <ul>
    <li>{item1}</li>
    <li>{item2}</li>
  </ul>,
  document.getElementById('root'))
  
// Assigning Variables using JSX
const groceryList = (
  <ul>
    <li>Apples</li>
    <li>Oranges</li>
  </ul>
);

ReactDOM.render(
  groceryList, 
  document.getElementById('root'));

// You can create functions that produce React elements
function groceryList(item1, item2) { 
  return (
    <ul>
      <li>{item1}</li>
      <li>{item2}</li>
    </ul>
  );
}

ReactDOM.render(
  groceryList("Apples", "Oranges"),
  document.getElementById('root'));

function GroceryList(item1, item2) { // this will not be compatible with below
  return (
    <ul>
      <li>{item1}</li>
      <li>{item2}</li>
    </ul>
  );
}

ReactDOM.render(
  <GroceryList item1 = "Apples" item2 = "Oranges"></GroceryList>,
  document.getElementById('root'));

// This object is called props and corresponds to the 2nd parameter of the React.createElement function.
function GroceryList(props) {
  return (
    <ul>
      <li>{props.item1}</li>
      <li>{props.item2}</li>
    </ul>
  );
}

ReactDOM.render(
  <GroceryList item1 = "Apples" item2 = "Oranges" />, document.getElementById('root'));