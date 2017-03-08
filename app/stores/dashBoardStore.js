import alt from '../alt';
import DashBoardActions from '../actions/dashBoardActions';

class DashBoardStore {
	constructor() {
		this.bindActions(DashBoardActions);
		this.dashBoardList = [];
	}

	onGetDashBoardListSuccess(data) {
		this.dashBoardList = data;
	}

	onGetDashBoardListFailure() {
		this.dashBoardList = [];
	}
}

export default alt.createStore(DashBoardStore);