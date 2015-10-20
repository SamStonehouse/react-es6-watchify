import alt from '../alt';
import EveChartActions from '../actions/EveChartActions';
import evePriceAPI from '../api/eve-prices';

class EvePriceStore {

	constructor() {
		this.bindActions(EveChartActions);
		this.type = 100;
		this.priceData = 'LOADING';

		this.priceDataCache = [];
	}

	onEveTypeChange(type) {
		this.type = type;

		if (this.priceDataCache.hasOwnProperty(type)) {
			this.priceData = this.priceDataCache[type];
		} else {
			this.priceData = 'LOADING';
			
			var pricePromise = evePriceAPI.getPrices();

			pricePromise.then((response) => {
				this.priceDataCache[type] = response.data;
				this.priceData = response.data;
				console.log("Data loaded for type");
			});

			pricePromise.catch(() => {
				console.log("ErrorW");
			});
		}
	}

}

export default alt.createStore(EvePriceStore);
