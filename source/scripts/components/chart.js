import d3Chart from './d3Chart';
import React from 'react';
import ChartStore from '../stores/ChartStore';

var Chart = React.createClass({

	// statics: {
	// 	storeListeners: {
			
	// 		_onChange: ChartStore
	// 	}
	// },

	componentDidMount: function() {
		ChartStore.listen(this._onChange);
		var el = this.getDOMNode();
		d3Chart.create(el, {
			width: '100%',
			height: '300px',
		}, this.getChartState());
	},

	componentDidUpdate: function() {
		var el = this.getDOMNode();
		d3Chart.update(el, this.getChartState());
	},

	getChartState: function() {
		return {
			data: ChartStore.getState().chartData,
			domain: { x: [0, ChartStore.getState().chartData.length ], y: [0, 100]}
		};
	},

	componentWillUnmount: function() {
		ChartStore.unlisten(this._onChange);
		var el = this.getDOMNode();
		d3Chart.destroy();
	},

	render: function() {
		return (
			<div className="chart"></div>
		);
	},

	_onChange: function() {
		this.setState(this.getChartState());
	}
});

module.exports = Chart;
