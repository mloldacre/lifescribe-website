import React, { Component } from 'react';
import AuthApiService from '../services/auth-api-service'
import UserContext from '../contexts/UserContext'

export default class Profile extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => { },
    },
  }
  
  onUpdateSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/profile'
    history.push(destination)
  }

  static contextType = UserContext;
  
  componentDidMount() {
    this.context.clearError()
    AuthApiService.getUser()
      .then(this.context.setUser)
      .catch(this.context.setError)
  }
  
  
  state = { error: null }
  
  handleUpdate = ev => {
    ev.preventDefault()
    this.setState({ error: null })
    const { first_name, last_name, email, } = ev.target

    AuthApiService.updateUser({
      first_name: first_name.value,
      last_name: last_name.value,
      email: email.value,
    })
      .then(() => {
        this.context.setUser()
        this.onUpdateSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }
  
  handleClickCancel = () => {
    this.props.history.push('/profile')
  };

  render() {
    const { error } = this.context
    const { user } = this.context
    console.log('UserEdit:', user)
    return (
      <div className="Profile">
        Edit 
        <form
          className='ProfileForm'
          onSubmit={this.handleUpdate}
        >
          <div role='alert'>
            {error && <p className='red'>{error}</p>}
          </div>
          <div className='first_name'>
            <label htmlFor='ProfileFormFirstName'>
              First name
            </label>
            <input
              name='first_name'
              type='text'
              id='ProfileFormFirstName'>
            </input>
          </div>
          <div className='last_name'>
            <label htmlFor='ProfileFormLastName'>
              Last name
            </label>
            <input
              name='last_name'
              type='text'
              id='ProfileFormLastName'>
            </input>
          </div>
          <div className='email'>
            <label htmlFor='ProfileFormEmail'>
              Email
          </label>
            <input
              name='email'
              type='text'
              id='ProfileFormEmail'>
            </input>
          </div>
          {/* <div className='user_name'>
            <label htmlFor='ProfileFormUsername'>
              Username
          </label>
            <input
              name='user_name'
              type='text'
              id='ProfileFormUsername'>
            </input>
          </div>
          <div className='password'>
            <label htmlFor='ProfileFormPassword'>
              Password
            </label>
            <input
              name='password'
              type='password'
              id='ProfileFormPassword'>
            </input>
          </div> */}
          <button type='submit'>
            Edit
          </button>
          <button type='button' onClick={this.handleClickCancel}>
            Cancel
        </button>
        </form>
      </div>

    );
  }
}
