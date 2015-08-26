import TodoApp from './components/TodoApp.react';
import React from 'react';

React.render(
  React.createElement(TodoApp, {}),
  document.getElementById('todoapp')
);
