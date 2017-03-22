import React from 'react';
import AddNewStore from '../stores/addNewStore'
import AddNewActions from '../actions/addNewActions';

class AddNew extends React.Component {
	constructor(props) {
		super(props);
		this.state = AddNewStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		AddNewStore.listen(this.onChange);
	}
	componentWillUnmount() {
		AddNewStore.unlisten(this.onChange);
	}
	onChange(state) {
		this.setState(state);
	}

	handleAddNew(event) {
		event.preventDefault();
		var successFlag = true;

		var name = this.state.name.trim();
		if (!name) {
			AddNewActions.invalidName();
			this.refs.nameTextField.focus();
			successFlag = false;
			return;
		}

		var scientificName = this.state.scientificName.trim();
		if (!scientificName) {
			AddNewActions.invalidScientificName();
			this.refs.scientificNameTextField.focus();
			successFlag = false;
			return;
		}

		var species = this.state.speciesName.trim();
		if (!species) {
			AddNewActions.invalidSpecies();
			this.refs.speciesTextField.focus();
			successFlag = false;
			return;
		}

		var category = this.state.category.trim();
		if (!category || category === 'Select..') {
			AddNewActions.invalidCategory();
			this.refs.categoryTextField.focus();
			successFlag = false;
			return;
		}

		var lifespan = parseInt(this.state.lifespan);
		if (!lifespan || lifespan<=0) {
			AddNewActions.invalidLifespan();
			this.refs.lifespanTextField.focus();
			successFlag = false;
			return;
		}

		var weight = parseInt(this.state.weight);
		if (!weight || weight<=0) {
			AddNewActions.invalidWeight();
			this.refs.weightTextField.focus();
			successFlag = false;
			return;
		}

		var height = parseInt(this.state.height);
		if (!height || height<=0) {
			AddNewActions.invalidHeight();
			this.refs.heightTextField.focus();
			successFlag = false;
			return;
		}

		if (successFlag) {
			var addNewModel = {
				name: name,
				scientificName: scientificName,
				species: species,
				category: category,
				lifespan: lifespan,
				weight: weight,
				height: height,
			};
			AddNewActions.addNewPost(addNewModel);
		}
	}

	render() {
		return (
			<div className='container'>
				<div className='panel panel-default'>
					<div className='panel-heading'>						
						<span className='col-md-4'>You are adding a new item</span>
						<div className={'form-group ' + this.state.addSuccesState} >
							<span className={'col-md-8 help-block ' + this.state.addSuccesState} >
								{this.state.addSuccessMessage}
							</span>							
						</div>
					</div>
					<div className='panel-body'>
						<form onSubmit={this.handleAddNew.bind(this)}>
							<div className={'form-group ' + this.state.nameValidationState}>
								<div className='row'>
									<div className='col-md-4'>
										<label className='control-label pull-right'>Enter the name</label>
									</div>
									<div className='col-md-4'>
										<input type='text' className='form-control' ref='nameTextField' value={this.state.name} onChange={AddNewActions.updateName} autoFocus/>
										<span className='help-block'>{this.state.nameError}</span>
									</div>
									<div className='col-md-4'>
									</div>
								</div>
							</div>
							<div className={'form-group ' + this.state.scientificNameValidationState}>
								<div className='row'>
									<div className='col-md-4'>
										<label className='control-label pull-right'>Enter the scientific name</label>
									</div>
									<div className='col-md-4'>
										<input type='text' className='form-control' ref='scientificNameTextField' value={this.state.scientificName} onChange={AddNewActions.updateScientificName} />
										<span className='help-block'>{this.state.scientificNameError}</span>
									</div>
									<div className='col-md-4'>
									</div>
								</div>
							</div>
							<div className={'form-group ' + this.state.speciesValidationState}>
								<div className='row'>
									<div className='col-md-4'>
										<label className='control-label pull-right'>Enter the species</label>
									</div>
									<div className='col-md-4'>
										<input type='text' className='form-control' ref='speciesTextField' value={this.state.speciesName} onChange={AddNewActions.updateSpecies} />
										<span className='help-block'>{this.state.speciesError}</span>
									</div>
									<div className='col-md-4'>
									</div>
								</div>
							</div>
							<div className={'form-group ' + this.state.categoryValidationState}>
								<div className='row'>
									<div className='col-md-4'>
										<label className='control-label pull-right'>Enter the category</label>
									</div>
									<div className='col-md-4'>
										<select className='form-control' ref='categoryTextField' value={this.state.category} onChange={AddNewActions.updateCategory}>
											<option>Select..</option>
											<option>animal</option>
											<option>bird</option>
											<option>fish</option>
											<option>plant</option>
										</select>
										<span className='help-block'>{this.state.categoryError}</span>
									</div>
									<div className='col-md-4'>
									</div>
								</div>
							</div>
							<div className={'form-group ' + this.state.lifespanValidationState}>
								<div className='row'>
									<div className='col-md-4'>
										<label className='control-label pull-right'>Enter the life span</label>
									</div>
									<div className='col-md-4'>
										<input type='text' className='form-control' ref='lifespanTextField' value={this.state.lifespan} onChange={AddNewActions.updateLifespan} />
										<span className='help-block'>{this.state.lifespanError}</span>
									</div>
									<div className='col-md-4'>
									</div>
								</div>
							</div>
							<div className={'form-group ' + this.state.weightValidationState}>
								<div className='row'>
									<div className='col-md-4'>
										<label className='control-label pull-right'>Enter the weight</label>
									</div>
									<div className='col-md-4'>
										<input type='text' className='form-control' ref='weightTextField' value={this.state.weight} onChange={AddNewActions.updateWeight} />
										<span className='help-block'>{this.state.weightError}</span>
									</div>
									<div className='col-md-4'>
									</div>
								</div>
							</div>
							<div className={'form-group ' + this.state.heightValidationState}>
								<div className='row'>
									<div className='col-md-4'>
										<label className='control-label pull-right'>Enter the height</label>
									</div>
									<div className='col-md-4'>
										<input type='text' className='form-control' ref='heightTextField' value={this.state.height} onChange={AddNewActions.updateHeight} />
										<span className='help-block'>{this.state.heightError}</span>
									</div>
									<div className='col-md-4'>
									</div>
								</div>
							</div>
							<button type='submit' className='btn btn-primary pull-right'>Submit</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default AddNew;