import alt from '../alt';
import ChartActions from '../actions/ChartActions';

var chartStore = alt.createStore(class ChartStore {
	constructor() {
		this.bindActions(ChartActions);

		this.chartData = [
		{id: 's4f8phwm', x: 11, y: 45, val: Math.random() * 100},
		{id: 's4f8phwm', x: 11, y: 45, val: Math.random() * 100},
		{id: 's4f8phwm', x: 11, y: 45, val: Math.random() * 100},
		{id: 's4f8phwm', x: 11, y: 45, val: Math.random() * 100},
		{id: 's4f8phwm', x: 11, y: 45, val: Math.random() * 100},
		{id: 's4f8phwm', x: 11, y: 45, val: Math.random() * 100},
		{id: 's4f8phwm', x: 11, y: 45, val: Math.random() * 100},
		{id: 's4f8phwm', x: 11, y: 45, val: Math.random() * 100},
		{id: 's4f8phwm', x: 11, y: 45, val: Math.random() * 100},
		{id: 's4f8phwm', x: 11, y: 45, val: Math.random() * 100},
		{id: 's4f8phwm', x: 11, y: 45, val: Math.random() * 100},
		{id: 's4f8phwm', x: 11, y: 45, val: Math.random() * 100},
		{id: 's4f8phwm', x: 11, y: 45, val: Math.random() * 100},
		{id: 's4f8phwm', x: 11, y: 45, val: Math.random() * 100},
		{id: 's4f8phwm', x: 11, y: 45, val: Math.random() * 100},
		{id: 's4f8phwm', x: 11, y: 45, val: Math.random() * 100},
		{id: 's4f8phwm', x: 11, y: 45, val: Math.random() * 100},
		{id: 's4f8phwm', x: 11, y: 45, val: Math.random() * 100},
		{id: 's4f8phwm', x: 11, y: 45, val: Math.random() * 100},
		{id: 's4f8phwm', x: 11, y: 45, val: Math.random() * 100},
		{id: 's4f8phwm', x: 11, y: 45, val: Math.random() * 100},
		{id: 's4f8phwm', x: 11, y: 45, val: Math.random() * 100},
		{id: 's4f8phwm', x: 11, y: 45, val: Math.random() * 100},
		{id: 's4f8phwm', x: 11, y: 45, val: Math.random() * 100},
		{id: 's4f8phwm', x: 11, y: 45, val: Math.random() * 100},
		{id: 's4f8phwm', x: 11, y: 45, val: Math.random() * 100},
		{id: 's4f8phwm', x: 11, y: 45, val: Math.random() * 100},
		{id: 's4f8phwm', x: 11, y: 45, val: Math.random() * 100},
		{id: 's4f8phwm', x: 11, y: 45, val: Math.random() * 100},
		{id: 's4f8phwm', x: 11, y: 45, val: Math.random() * 100},
		{id: 's4f8phwm', x: 11, y: 45, val: Math.random() * 100},
		{id: 's4f8phwm', x: 11, y: 45, val: Math.random() * 100},
		{id: 's4f8phwm', x: 11, y: 45, val: Math.random() * 100},
		{id: 's4f8phwm', x: 11, y: 45, val: Math.random() * 100},
		{id: 's4f8phwm', x: 11, y: 45, val: Math.random() * 100},
		{id: 's4f8phwm', x: 11, y: 45, val: Math.random() * 100},
		{id: 's4f8phwm', x: 11, y: 45, val: Math.random() * 100},
		{id: 's4f8phwm', x: 11, y: 45, val: Math.random() * 100},
		{id: 's4f8phwm', x: 11, y: 45, val: Math.random() * 100},
		{id: 's4f8phwm', x: 11, y: 45, val: Math.random() * 100},
		{id: 's4f8phwm', x: 11, y: 45, val: Math.random() * 100},
		{id: 's4f8phwm', x: 11, y: 45, val: Math.random() * 100},
		{id: 's4f8phwm', x: 11, y: 45, val: Math.random() * 100},
		{id: 's4f8phwm', x: 11, y: 45, val: Math.random() * 100},
		{id: 's4f8phwm', x: 11, y: 45, val: Math.random() * 100},
		{id: 's4f8phwm', x: 11, y: 45, val: Math.random() * 100}
		];
	}


	onUpdateChart(data) {
		this.chartData = data;
	}
});

export default chartStore;
