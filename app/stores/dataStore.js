import  alt from '../config/alt';
import  DataActions from '../actions/dataActions';

class DataStore {
	constructor() {
		this.bindActions(DataActions);
		this.list = [];
	}

	onGetDataListSuccess(response) {
		if(response && response.length>0){
			this.list = response;
		}
		else{
			this.list = [];
			this.noItemMessage = "No item found";
			this.noItemState = "has-error";
		}
	}
	onGetDataListFailure(errorMessage) {
		this.list = [];
		this.noItemMessage = errorMessage;
		this.noItemState = "has-error";
	}
}

export default alt.createStore(DataStore);