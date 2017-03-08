import alt from '../alt';

class LoginActions {
	constructor() {
		this.generateActions(
			'loginSuccess',
			'loginFail',
			'updateName',
			'updatePassword',
			'invalidName',
			'invalidPassword'
		);
	}

	loginSubmit(name, password, state) {
		$.ajax({
			type: 'POST',
			url: '/auth/loginSubmit',
			data: { name: name, password: password }
		})
		.done((res) => {
			if(res.status === 1){
				var data = {user:res.user, stateProp:state}
				this.actions.loginSuccess(data);
			}
			else{
				this.actions.loginFail(res.message);
			}
		})
		.fail((error) => {
			this.actions.loginFail(error.statusText);
		});
	}
}

export default alt.createActions(LoginActions);