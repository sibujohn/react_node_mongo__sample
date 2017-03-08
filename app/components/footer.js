import React from 'react';

class Footer extends React.Component {
	
	constructor(props) {
		super(props);
	}
	componentDidMount() {

	}

	componentWillUnmount() {

	}
	render() {
		return (
			<footer>
				<div className='container'>
					<div className='row'>
						<div className='col-sm-12'>
							<h3 className='lead'>
								This is a full-stack JavaScript project.
							</h3>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;