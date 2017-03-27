import  React from 'react';
import  DataStore from '../stores/dataStore';
import  DataActions from '../actions/dataActions';
import {isEqual} from 'underscore';
import {Link} from 'react-router';

class Animals extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = DataStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		DataStore.listen(this.onChange);
		DataActions.getDataList('animal');
	}
	componentWillUnmount() {
		DataStore.unlisten(this.onChange);
	}
	onChange(state) {
		this.setState(state);
	}

	render() {
		let itemList = this.state.list.map((item, index) => {
			return (
				<div key={item._id} className='list-group-item animated fadeIn'>
					<div className='media'>
						<span className='position pull-left'>{index + 1}</span>
						<div className='pull-left thumb-lg'>
							<img className='media-object' src={item.img} />
						</div>
						<div className='media-body'>
							<h4 className='media-heading'>
								{item.name}
							</h4>
							<small>Scientific name: <strong>{item.scientificName}</strong></small>
							<br />
							<small>Species: <strong>{item.species}</strong></small>
							<br />
							<small>Height: <strong>{item.height} cm</strong></small>
							<br />
							<small>Weight: <strong>{item.weight} Kg</strong></small>
							<br />
							<small>Life span: <strong>{item.lifespan} years</strong></small>
							<br />
						</div>
					</div>
				</div>
			);
		});

		return (
			<div className='container'>
				<div className='panel-heading'>						
					<span className='col-md-4'></span>
					<div className={'form-group ' + this.state.noItemState} >
						<span className={'col-md-8 help-block ' + this.state.noItemState} >
							{this.state.noItemMessage}
						</span>							
					</div>
				</div>
				<div className='list-group'>
					{itemList}
				</div>
			</div>
		);
	}
}

export default Animals;