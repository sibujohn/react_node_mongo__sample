import alt from '../config/alt';

class AddNewActions {
	constructor() {
		this.generateActions(
			'getAddNewSuccess',
			'getAddNewFail',
			'updateName',
			'invalidName',
			'updateScientificName',
			'invalidScientificName',
			'updateSpecies',
			'invalidSpecies',
			'updateCategory',
			'invalidCategory',
			'updateLifespan',
			'invalidLifespan',
			'updateWeight',
			'invalidWeight',
			'updateHeight',
			'invalidHeight',
		);
	}

	addNewPost(data) {
		$.ajax({
			type: 'POST',
			url: '/data/addNewItem',
			data: data
		})
		.done((res) => {
			if(res.status === 1){
				this.actions.getAddNewSuccess(res.message);
			}
			else{
				this.actions.getAddNewFail(res.message);
			}
		})
		.fail((error) => {
			this.actions.getAddNewFail(error.statusText);
		});
	}
}

export default alt.createActions(AddNewActions);