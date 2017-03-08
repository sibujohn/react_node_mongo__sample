import React from 'react';
import {Link} from 'react-router';

class NavBar extends React.Component {
	
	constructor(props) {
		super(props);
	}
	componentDidMount() {

	}

	componentWillUnmount() {

	}
	render() {
		return (
			<nav className='navbar navbar-default navbar-static-top'>
				<div className='navbar-header'>
					<div className='navbar-brand logo-division'>
						<Link to='/main/dashboard'>
							<span className='logo-img'>
								<img src='../images/logo.png'/>
							</span>
							<span className='logo-text'>
								REACT
							</span>
						</Link>
					</div>
				</div>
				<div id='navbar' className='navbar-collapse collapse'>
					<ul className='nav navbar-nav'>
						<li><Link to='/main/animals'>Animals</Link></li>
						<li><Link to='/main/birds'>Birds</Link></li>
						<li><Link to='/main/fishes'>Fishes</Link></li>
						<li><Link to='/main/plants'>Plants</Link></li>
					</ul>
					<div className='dropdown settings'>
						<a href='#' className='dropdown-toggle' data-toggle='dropdown'>
							<img src='../images/settings.png'/>
						</a>
						<ul className='dropdown-menu settings-drop'>
							<li>Profile</li>
							<li>Settings</li>
							<li>Logout</li>
						</ul>
					</div>
					<form ref='searchForm' className='navbar-form navbar-left animated header-search'>
						<div className='input-group'>
							<input type='text' className='form-control' />
							<span className='input-group-btn'>
								<button className='btn btn-default'>
									<span className='glyphicon glyphicon-search'>
									</span>
								</button>
							</span>
						</div>
					</form>
				</div>
			</nav>
		);
	}
}

export default NavBar;