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
