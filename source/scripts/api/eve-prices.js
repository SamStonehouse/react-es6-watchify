import request from 'superagent';

class EvePricesApi {

	constructor() {
		this.apiUrl = 'http://192.168.56.4:7000/api/'
		this.apiTable = 

		this.apiMasks = {"created":1,"date":2,"num_orders":4,"price_average":8,"price_high":16,"price_low":32,"quantity":64,"region_id":128,"type_id":256}
	}

	getPrices(typeID) {
		console.log("Price request for: " typeID);
		var reqPromise = new Promise(function(resolve, reject) {
			
			request
				.get(apiUrl + '/db/items_history/type_id/' + typeID)
				.end(function(err, res) {
					if (typeof err !== "undefined") {
						reject(err);
					}

					if (res.error) {
						reject(new Error("API Error");
					}
					
					resolve(res.body);
				});
		});

		return reqPromise;
	}

}


export default new EvePricesApi();
