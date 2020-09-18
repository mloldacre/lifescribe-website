import React, { Component } from 'react';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';
import '../../Style.css';
import { Link } from 'react-router-dom';

export default class Demo extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => { },
    },
  }

  handleLoginSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/loggedIn'
    history.push(destination)
  }

  state = { error: null }

  handleSubmitJwtAuth = ev => {
    ev.preventDefault()
    this.setState({ error: null })
    const { username, password } = ev.target

    AuthApiService.postLogin({
      user_name: username.value,
      password: password.value,
    })
      .then(res => {
        username.value = ''
        password.value = ''
        TokenService.saveAuthToken(res.authToken)
        this.handleLoginSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  render() {
    const { error } = this.state
    return (
      <form className="Demo"
        onSubmit={this.handleSubmitJwtAuth}
      >
        Demo Page
        <div role='alert'>
          {error && <p className="error">{error}</p>}
        </div>
        <h1>Greetings!</h1>
        <p>A demo account has been provided for you with the credentials:</p>
        <p>Username: DemoAccount</p>
        <p>Password: Password123!</p>
        <fieldset>
          <legend>Login</legend>
          <div className="username">
            <label htmlFor="DemoName">
              Username:
        </label>
            <input
              required
              name="username"
              defaultValue="DemoAccount"
              id="DemoName">
            </input>
          </div>
          <div className="password">
            <label htmlFor="DemoPassword">
              Password:
        </label>
            <input
              required
              name="password"
              type="password"
              defaultValue="Password123!"
              id="DemoPassword">
            </input>
          </div>
          <button type="submit">Login</button>
          </fieldset>
      </form>
    );
  }
}

