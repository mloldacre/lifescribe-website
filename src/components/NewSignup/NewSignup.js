import React, { Component } from 'react';
import './NewSignup.css';
import AuthApiService from '../../services/auth-api-service'

export default class NewSignup extends Component {
  static defaultProps = {
    history: {
      push: () => { },
    },
  }

  handleRegistrationSuccess = user => {
    const { history } = this.props
    history.push('/loginSignup')
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
    const { error} = this.state
    return (
      <div className="NewSignup">
        New Signup Page
        <form
          className='NewSignUpForm'
          onSubmit={this.handleSubmit}
        >
          <div role='alert'>
            {error && <p className='red'>{error}</p>}
          </div>
          <div className='first_name'>
            <label htmlFor='NewSignUpFormFirstName'>
              First name
            </label>
            <input
              name='first_name'
              type='text'
              required
              id='NewSignUpFormFirstName'>
            </input>
          </div>
          <div className='last_name'>
            <label htmlFor='NewSignUpFormLastName'>
              Last name
            </label>
            <input
              name='last_name'
              type='text'
              required
              id='NewSignUpFormLastName'>
            </input>
          </div>
          <div className='email'>
            <label htmlFor='NewSignUpFormEmail'>
              Email
          </label>
            <input
              name='email'
              type='text'
              required
              id='NewSignUpFormEmail'>
            </input>
          </div>
          <div className='user_name'>
            <label htmlFor='NewSignUpFormUsername'>
              Username
          </label>
            <input
              name='user_name'
              type='text'
              required
              id='NewSignUpFormUsername'>
            </input>
          </div>
          <div className='password'>
            <label htmlFor='NewSignUpFormPassword'>
              Password
            </label>
            <input
              name='password'
              type='password'
              required
              id='NewSignUpFormPassword'>
            </input>
          </div>
          <button type='submit'>
            Sign-up!
        </button>
        </form>
      </div>
    )
  }
}

