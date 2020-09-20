import React, { Component } from 'react';
import '../../Style.css';
import AuthApiService from '../../services/auth-api-service'

export default class Registration extends Component {
  static defaultProps = {
    history: {
      push: () => { },
    },
  }

  handleRegistrationSuccess = user => {
    const { history } = this.props
    history.push('/loginRegister')
  }

  state = { error: null }

  handleSubmit = ev => {
    ev.preventDefault()
    const { first_name, last_name, email, user_name, password } = ev.target

    this.setState({ error: null })
    AuthApiService.postUser({
      first_name: first_name.value,
      last_name: last_name.value,
      email: email.value,
      user_name: user_name.value,
      password: password.value,
    })
      .then(user => {
        first_name.value = ''
        last_name.value = ''
        email.value = ''
        user_name.value = ''
        password.value = ''
        this.handleRegistrationSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  render() {
    const { error } = this.state
    return (
      <div className="Registration">
        <form
          className='RegistrationForm'
          onSubmit={this.handleSubmit}
        >
          <div role='alert'>
            {error && <p className='red'>{error}</p>}
          </div>
          <h1>Welcome!</h1>
          <fieldset>
          <legend>Registration</legend>
            <div className='first_name'>
              <label htmlFor='RegistrationFormFirstName'>
                First name:
            </label>
              <input
                name='first_name'
                type='text'
                required
                id='RegistrationFormFirstName'>
              </input>
            </div>
            <div className='last_name'>
              <label htmlFor='RegistrationFormLastName'>
                Last name:
            </label>
              <input
                name='last_name'
                type='text'
                required
                id='RegistrationFormLastName'>
              </input>
            </div>
            <div className='email'>
              <label htmlFor='RegistrationFormEmail'>
                Email:
          </label>
              <input
                name='email'
                type='text'
                required
                id='RegistrationFormEmail'>
              </input>
            </div>
            <div className='user_name'>
              <label htmlFor='RegistrationFormUsername'>
                Username:
          </label>
              <input
                name='user_name'
                type='text'
                required
                id='RegistrationFormUsername'>
              </input>
            </div>
            <div className='password'>
              <label htmlFor='RegistrationFormPassword'>
                Password:
            </label>
              <input
                name='password'
                type='password'
                required
                id='RegistrationFormPassword'>
              </input>
            </div>
            <button type='submit'>
              Register
        </button>
          </fieldset>
        </form>
      </div>
    )
  }
}

