import React from 'react';
import ReactDOM from 'react-dom';

// Stateless Components - Always have a single parameter (props)
// Props are to components what parameters are to functions

// Traditional function
function Hello(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
    </div>
  );
}

// ES2015 syntax 
const Hello = (props) => {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
    </div>
  );
}

// ES2015 shorthand
const Hello = (props) => (
  <div>
    <h1>Hello, {props.name}!</h1>
  </div>
);

// Now we can render it directly or as a child, even multiple times.
ReactDOM.render(
  <div>
    <Hello name = "Tyler" />
    <Hello name = "James" />
    <Hello name = "Fuqua" />
  </div>,
  document.getElementById('root'));