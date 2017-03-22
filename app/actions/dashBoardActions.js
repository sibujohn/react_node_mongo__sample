import alt from '../config/alt';

class DashBoardActions {
	constructor() {
		this.generateActions(
			'getDashBoardListSuccess',
			'getDashBoardListFailure'
		);
	}

	getDashBoardList() {
		$.ajax({
			type: 'GET',
			url: '/dashboard/getDashboardList',
		})
		.done((res) => {
			if(res.status === 1){
				this.actions.getDashBoardListSuccess(res.dashboardList);
			}
			else{
				this.actions.getDashBoardListFailure(res.message);
			}
		})
		.fail((error) => {
			this.actions.getDashBoardListFailure(error.statusText);
		});
	}
}

export default alt.createActions(DashBoardActions);
