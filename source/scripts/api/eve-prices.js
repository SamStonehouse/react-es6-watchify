

class EvePricesApi {

	constructor() {
		this.apiUrl = 'http://192.168.56.4:7000/api/'
		this.apiTable = 

		this.apiMasks = {"created":1,"date":2,"num_orders":4,"price_average":8,"price_high":16,"price_low":32,"quantity":64,"region_id":128,"type_id":256}
	}

	getPrices(type) {
		var reqPromise = new Promise(function(resolve, reject) {
		
			
		});

		return reqPromise;
	}

}


export default new EvePricesApi();
