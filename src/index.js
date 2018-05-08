import React from 'react';
import ReactDOM from 'react-dom';

// Convert HTML into JSX
<div>
    <h1>Tips for breaking down a new concept</h1>
    <div>
        <ul>
            <li>Many concepts can't be tackled all at once</li>
            <ul>
                <li>Work with the parts you can understand</li>
                <li>Take breaks to stay fresh</li>
            </ul>
            <li>Develop a plan to learn the parts you don't know</li>
            <ul>
                <li>Start with the parts that you know</li>
                <li>Build new concepts on top</li>
            </ul>
        </ul>
    </div>
</div>

// This is JSX
const Tips = (
  <div>
    <h1>Tips for breaking down a new concept</h1>
    <div>
      <ul>
        <li>Many concepts can't be tackled all at once</li>
        <ul>
          <li>Work with the parts you can understand</li>
          <li>Take breaks to stay fresh</li>
        </ul>
        <li>Develop a plan to learn the parts you don't know</li>
        <ul>
          <li>Start with the parts you know</li>
          <li>Build new concepts on top</li>
        </ul>
      </ul>
    </div>
  </div>
);

ReactDOM.render(
  Tips, document.getElementById('root'));