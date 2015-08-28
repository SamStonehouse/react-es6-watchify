import alt from '../alt';
import ChartActions from '../actions/ChartActions';

var chartStore = alt.createStore(class ChartStore {
	constructor() {
		this.bindActions(ChartActions);

		this.chartData = [
		  {id: '5fbmzmtc', x: 7, y: 41, z: 6},
		  {id: 's4f8phwm', x: 11, y: 45, z: 9},
		];
	}


	onUpdateChart(data) {
		this.chartData = data;
	}
});

export default chartStore;