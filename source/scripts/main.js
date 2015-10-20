import React from 'react';

//import ChartStore from './stores/ChartStore';
//import ChartActions from './actions/ChartActions';

import EveChart from './components/eve-type-chart';

/*setInterval(function() {
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
*/
React.render(React.createElement(EveChart), document.body);
