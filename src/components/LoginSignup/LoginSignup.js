import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';
import '../../Style.css';

export default class LoginSignup extends Component {
	static defaultProps = {
		onLoginSuccess: () => {},
	};

	state = { error: null };

	handleSubmitJwtAuth = (ev) => {
		ev.preventDefault();
		this.setState({ error: null });
		const { username, password } = ev.target;

		AuthApiService.postLogin({
			user_name: username.value,
			password: password.value,
		})
			.then((res) => {
				username.value = '';
				password.value = '';
				TokenService.saveAuthToken(res.authToken);
				this.props.onLoginSuccess();
			})
			.catch((res) => {
				this.setState({ error: res.error });
			});
	};

	render() {
		const { error } = this.state;
		return (
			<form className='LoginSignup' onSubmit={this.handleSubmitJwtAuth}>
				<div role='alert'>{error && <p className='error'>{error}</p>}</div>
				<h1>Greetings!</h1>
				<fieldset>
					<legend>Login</legend>
					<div className='username'>
						<label htmlFor='LoginUserName'>Username:</label>
						<input required name='username' id='LoginUserName' />
					</div>
					<div className='password'>
						<label htmlFor='LoginPassword'>
							Password: <br />
						</label>
						<input required name='password' type='password' id='LoginPassword' />
					</div>
					<button type='submit'>Login</button>
					<Link to='/registration'>
						<button type='button'>Sign-up!</button>
					</Link>
				</fieldset>
			</form>
		);
	}
}
