// import TodoApp from './components/TodoApp.react';
// import React from 'react';

// React.render(
//   React.createElement(TodoApp, {}),
//   document.getElementById('todoapp')
// );

import Chart from './components/chart';
import React from 'react';

import ChartStore from './stores/ChartStore';
import ChartActions from './actions/ChartActions';

setInterval(function() {
	var chartData = ChartStore.getState().chartData;

	chartData.shift();

	chartData.push( { val: Math.random() * 200 });

	ChartActions.updateChart(chartData);
}, 20);

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
