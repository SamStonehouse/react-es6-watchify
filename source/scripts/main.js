// import TodoApp from './components/TodoApp.react';
// import React from 'react';

// React.render(
//   React.createElement(TodoApp, {}),
//   document.getElementById('todoapp')
// );

import Chart from './components/chart';
import React from 'react';

var App = React.createClass({

	render: function() {
		return (
			<div className="app">
				<Chart />
			</div>
		);
	}
});

React.render(React.createElement(App), document.body);