import  React from 'react';
import {browserHistory} from 'react-router';
import  LoginStore from '../stores/loginStore';
import  LoginActions from '../actions/loginActions';

class Login extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = LoginStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		LoginStore.listen(this.onChange);
	}
	componentWillUnmount() {
		LoginStore.unlisten(this.onChange);
	}
	onChange(state) {
		this.setState(state);
	}

	handleSubmit(event) {
		event.preventDefault();
		var name = this.state.name.trim();
		var password = this.state.password.trim();

		if (!name) {
			LoginActions.invalidName();
			this.refs.nameTextField.focus();
			return
		}

		if (!password) {
			LoginActions.invalidPassword();
			this.refs.passwordTextField.focus();
			return
		}

		if (name && password) {
			LoginActions.loginSubmit(name, password, this.props);
		}
	}

	render() {
		return (
			<div className='container login-container'>
				<div className='row flipInX animated login-cover'>
					<div className='col-sm-12'>
						<div className='panel panel-default'>
							<div className='panel-heading'>Login</div>
							<div className='panel-body'>
								<form onSubmit={this.handleSubmit.bind(this)}>
									<div className={'form-group ' + this.state.nameValidationState}>
										<label className='control-label'>User Name</label>
										<input type='text' className='form-control' ref='nameTextField' value={this.state.name} onChange={LoginActions.updateName} autoFocus/>
										<span className='help-block'>{this.state.userError}</span>
									</div>
									<div className={'form-group ' + this.state.passwordValidationState}>
										<label className='control-label'>Password</label>
										<input type='password' className='form-control' ref='passwordTextField' value={this.state.password} onChange={LoginActions.updatePassword}/>
										<span className='help-block'>{this.state.passwordError}</span>
									</div>
									<button type='submit' className='btn btn-primary'>Submit</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Login;