import  React from 'react';
import  DashBoardStore from '../stores/dashBoardStore';
import  DashBoardActions from '../actions/dashBoardActions';
import {isEqual} from 'underscore';
import {Link} from 'react-router';

class DashBoard extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = DashBoardStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		DashBoardStore.listen(this.onChange);
		DashBoardActions.getDashBoardList(this.props.params);
	}

	componentWillUnmount() {
		DashBoardStore.unlisten(this.onChange);
	}

	componentDidUpdate(prevProps) {
		if (!isEqual(prevProps.params, this.props.params)) {
			DashBoardActions.getDashBoardList(this.props.params);
		}
	}

	addNew(category){
		this.props.history.push('main/animals');
	}

	onChange(state) {
		this.setState(state);
	}

	render() {
		let dashBoardList = this.state.dashBoardList.map((item, index) => {
			return (
				<div key={item.id} className='col-md-6'>
					<div className='list-group-item animated fadeIn'>
						<div className='media'>
							<span className='position pull-left'>
								<img className='category-img' src={item.imgSrc}/>
							</span>
							<div className='pull-left thumb-lg'>
							</div>
							<div className='media-body'>
								<div className="heading-cover">
									<h4 className='media-heading'>
										<Link to={'/main/'+item.category}>{item.category}</Link>
									</h4>
								</div>
								<div className="add-cover">
									<span className="add-item" onClick={this.addNew.bind(this, item)}></span>
								</div>
								<small>Description: <strong>{item.description}</strong></small>
							</div>
						</div>
					</div>
				</div>
			);
		});

		return (
			<div className='container'>
				<div className='list-group'>
					{dashBoardList}
				</div>
			</div>
		);
	}
}

export default DashBoard;