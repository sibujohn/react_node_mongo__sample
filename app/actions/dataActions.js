import alt from '../config/alt';

class DataActions {
	constructor() {
		this.generateActions(
			'getDataListSuccess',
			'getDataListFailure'
		);
	}

	getDataList(category) {
		$.ajax({
			type: 'GET',
			url: '/data/getDataList?category='+category,
		})
		.done((res) => {
			if(res.status === 1){
				this.actions.getDataListSuccess(res.list);
			}
			else{
				this.actions.getDataListFailure(res.message);
			}
		})
		.fail((error) => {
			this.actions.getDataListFailure(error.statusText);
		});
	}
}

export default alt.createActions(DataActions);
