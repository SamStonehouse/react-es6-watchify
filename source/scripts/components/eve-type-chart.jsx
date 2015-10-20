import React from 'react';

import d3Chart from './d3chart';

import EveChartActions from '../actions/EveChartActions';
import EveStore from '../stores/EveStore';
import EveType from './eve-type';

class EveTypePriceChart extends React.Component {

	constructor(props) {
		console.log(props);
		super(props);
	}

	componentDidMount() {
		EveStore.listen(this._changeState);
		//var el = this.getDOMNode();
		//var chart = d3Chart.create(el, {
		//	width: '100%',
		//	height: '300px',
		//}, this.getChartState());
	}
	
	componentdidUpdate() {
		
	}

	componentWillUnmount() {
		
	}

	render() {
		return (
			<div><EveType onUpdate={this._typeChange} defaultType={EveStore.getState().type} /></div>
		);
	}

	_typeChange(type) {
		EveChartActions.eveTypeChange(type);
	}

	_changeState() {
		console.log("State Changed");
	}
}

export default EveTypePriceChart;
