import alt from '../alt';
import EveChartActions from '../actions/EveChartActions';

class EvePriceStore {

	constructor() {
		this.bindActions(EveChartActions);
		this.type = 100;
		this.priceData = 'LOADING';

		this.priceDataCache = [];
	}

	onEveTypeChange(type) {
		this.type = type;
	}

}

export default alt.createStore(EvePriceStore);
