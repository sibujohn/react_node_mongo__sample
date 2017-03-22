import {assign} from 'underscore';
import 	alt from '../config/alt';
import 	AddNewActions from '../actions/addNewActions';

class AddNewStore {
  	constructor() {
		this.bindActions(AddNewActions);
		this.name = '';
		this.scientificName = '';
		this.speciesName = '';
		this.category = 'animal';
		this.lifespan = 0;
		this.weight = 0;
		this.height = 0;
  	}

  	onGetAddNewSuccess(data) {
		
  	}

  	onGetAddNewFail(error) {
		
  	}

  	onUpdateName(event) {
		this.name = event.target.value;
		this.nameValidationState = '';
		this.nameError = '';
	}
	onInvalidName() {
		this.nameValidationState = 'has-error';
		this.nameError = 'Please enter name.';
	}

	onUpdateScientificName(event) {
		this.scientificName = event.target.value;
		this.scientificNameValidationState = '';
		this.scientificNameError = '';
	}
	onInvalidScientificName() {
		this.scientificNameValidationState = 'has-error';
		this.scientificNameError = 'Please enter scientific name.';
	}

	onUpdateSpecies(event) {
		this.speciesName = event.target.value;
		this.speciesValidationState = '';
		this.speciesError = '';
	}
	onInvalidSpecies() {
		this.speciesValidationState = 'has-error';
		this.speciesError = 'Please enter species.';
	}

	onUpdateCategory(event) {
		this.category = event.target.value;
		this.categoryValidationState = '';
		this.categoryError = '';
	}
	onInvalidCategory() {
		this.categoryValidationState = 'has-error';
		this.categoryError = 'Please enter category.';
	}

	onUpdateLifespan(event) {
		this.lifespan = event.target.value;
		this.lifespanValidationState = '';
		this.lifespanError = '';
	}
	onInvalidLifespan() {
		this.lifespanValidationState = 'has-error';
		this.lifespanError = 'Please enter lifespan.';
	}

	onUpdateWeight(event) {
		this.weight = event.target.value;
		this.weightValidationState = '';
		this.weightError = '';
	}
	onInvalidWeight() {
		this.weightValidationState = 'has-error';
		this.weightError = 'Please enter weight.';
	}
	
	onUpdateHeight(event) {
		this.height = event.target.value;
		this.heightValidationState = '';
		this.heightError = '';
	}
	onInvalidHeight() {
		this.heightValidationState = 'has-error';
		this.heightError = 'Please enter height.';
	}
}

export default alt.createStore(AddNewStore);