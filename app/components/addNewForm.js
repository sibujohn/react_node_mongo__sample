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

		var name = this.state.name.trim();
		if (!name) {
			AddNewActions.invalidName();
			this.refs.nameTextField.focus();
			return;
		}

		var scientificName = this.state.scientificName.trim();
		if (!scientificName) {
			AddNewActions.invalidScientificName();
			this.refs.scientificNameTextField.focus();
			return;
		}

		var species = this.state.speciesName.trim();
		if (!species) {
			AddNewActions.invalidSpecies();
			this.refs.speciesTextField.focus();
			return;
		}

		var category = this.state.category.trim();
		if (!category) {
			AddNewActions.invalidCategory();
			this.refs.categoryTextField.focus();
			return;
		}

		var lifespan = parseInt(this.state.lifespan);
		if (!lifespan) {
			AddNewActions.invalidLifespan();
			this.refs.lifespanTextField.focus();
			return;
		}

		var weight = parseInt(this.state.weight);
		if (!weight) {
			AddNewActions.invalidWeight();
			this.refs.weightTextField.focus();
			return;
		}

		var height = parseInt(this.state.height);
		if (!height) {
			AddNewActions.invalidHeight();
			this.refs.heightTextField.focus();
			return;
		}

		if (true) {
			AddNewActions.addNewPost(name);
		}
	}

	render() {
		return (
			<div className='container'>
				<div className='panel panel-default'>
					<div className='panel-heading'>You are adding a new {this.state.category}</div>
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
										<input type='text' className='form-control' ref='categoryTextField' value={this.state.category} onChange={AddNewActions.updateCategory} />
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