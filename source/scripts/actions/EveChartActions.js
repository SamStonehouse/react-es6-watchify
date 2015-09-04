import alt from '../alt';

class EveChartActions {

	eveTypeChange(type) {
		console.log("Eve Type Change Action Fired: " + type);
		return type;
	}

}

export default alt.createActions(EveChartActions);
