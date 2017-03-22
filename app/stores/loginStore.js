import  alt from '../config/alt';
import  LoginActions from '../actions/loginActions';

class LoginStore {
	constructor() {
		this.bindActions(LoginActions);
		this.authenticated = false;
		this.name = '';
		this.password = '';
		this.nameValidationState = '';
		this.passwordValidationState = '';
		this.userError = '';
		this.passwordError = '';
	}

	onLoginSuccess(response) {
		console.log(response);
		this.nameValidationState = 'has-success';
		this.authenticated = true;
		setTimeout(function(){
			response.stateProp.history.push('/main/dashboard')	
		}, 0);
		
	}

	onLoginFail(errorMessage) {
		this.nameValidationState = 'has-error';
		this.userError = errorMessage;
		this.passwordError = '';
	}

	onUpdateName(event) {
		this.name = event.target.value;
		this.nameValidationState = '';
		this.userError = '';
		this.passwordError = '';
	}

	onUpdatePassword(event) {
		this.password = event.target.value;
		this.passwordValidationState = '';
	}

	onInvalidName() {
		this.nameValidationState = 'has-error';
		this.userError = 'Please enter name.';
		this.passwordError = '';
	}

	onInvalidPassword() {
		this.passwordValidationState = 'has-error';
		this.userError = '';
		this.passwordError = 'Please enter password.';
	}
}

export default alt.createStore(LoginStore);