import alt from '../alt';

class ChartActions {
	updateChart(data) {
		return data;
	}
}

var chartActions = alt.createActions(ChartActions);

setInterval(function() {

	var val1 = Math.random() * 10;
	var val2 = Math.random() * 10;

	chartActions.updateChart([
		{id: '5fbmzmtc', x: 7, y: 41, z: val1},
		{id: 's4f8phwm', x: 11, y: 45, z: val2}
	]);
}, 1000);

export default chartActions;