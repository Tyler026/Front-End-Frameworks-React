import React from 'react';
import ReactDOM from 'react-dom';

// Producing JSX from collections (Arrays)
// const items = ["Bread", "Milk", "Eggs", "Tea"];

const listItems = [];

for (let i = 0; i < items.length; i++) {
  listItems.push(<li key={i}>{items[i]}</li>)
};

const List = (props) => (
  <ul>
    {props.items}
  </ul>
);

ReactDOM.render(<List items={listItems}/>, document.getElementById('root'));

// Recomended to use (.map()) to create a new array
const items = ["Bread", "Milk", "Eggs", "Tea"];

const listItems = items.map(items => (<li>{items}</li>));
// We can now plug in our variable listItems into our component and our list will be displayed.
const List = (props) => (
  <ul>
    {props.items}
  </ul>
);

ReactDOM.render(<List items={listItems}/>, document.getElementById('root'));

// Tip! Notice the curly braces {} surrounding our props.items and listItems? This is how let React know we are going to be inserting JavaScript which includes variables, expressions, and calling functions.

// Iterate over an array of objects
const items = [
  {
    id: 1,
    name: "Monday Special",
    imageSource: "tacos.png",
    price: 10.35
  },
  {
    id: 2,
    name: "Tuesday Special",
    imageSource: "burrito.png",
    price: 8.17
  }
];

// This is not a component, it's a regular function that takes a JavaScript object and returns JSX
const showItems = items =>
  (
    <div key={items.id}>
      <img src={item.imageSource} />
      <span>{item.name}: {item.price}</span>
    </div>
  );

const itemsAsJSX = items.map(showItem);

ReactDOM.render(<div>{itemsAsJSX}</div>, document.getElementById('root'));
