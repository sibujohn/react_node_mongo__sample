import React from 'react';
import Navbar from './navbar';
import Footer from './footer';

class Main extends React.Component {
	
	constructor(props) {
		super(props);
	}
	componentDidMount() {

	}

	componentWillUnmount() {

	}
	render() {
		return (
			<div>
				<Navbar history={this.props.history} />
					{this.props.children}
				<Footer />
			</div>
		);
	}
}

export default Main;