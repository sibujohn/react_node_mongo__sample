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

	addNewPost() {
		$.ajax({ url: '/api/stats' })
		.done((data) => {
			this.actions.getAddNewSuccess(data);
		})
		.fail((error) => {
			this.actions.getAddNewFail(error);
		});
	}
}

export default alt.createActions(AddNewActions);