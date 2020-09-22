import React, { Component } from 'react';
import AuthApiService from '../services/auth-api-service';
import UserContext from '../contexts/UserContext';
import BackButton from '../components/BackButton/BackButton';

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
    const { first_name, last_name, email } = ev.target
    let fn = first_name.value

    const updatedUser = {
      first_name: first_name.value,
      last_name: last_name.value,
      email: email.value
    }
    AuthApiService.updateUser(updatedUser)
      .then(() => {
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
        <h2>My Profile</h2>
        <form
          className='ProfileForm'
          onSubmit={this.handleUpdate}
        >
          <fieldset><legend>Edit</legend>
            <div role='alert'>
              {error && <p className='red'>{error}</p>}
            </div>
            <div className='first_name'>
              <label htmlFor='ProfileFormFirstName'>
                First name
            </label>
              <input
                name='first_name'
                defaultValue={user.first_name}
                type='text'
                id='first_name'>
              </input>
            </div>
            <div className='last_name'>
              <label htmlFor='ProfileFormLastName'>
                Last name
            </label>
              <input
                name='last_name'
                defaultValue={user.last_name}
                type='text'
                id='last_name'>
              </input>
            </div>
            <div className='email'>
              <label htmlFor='ProfileFormEmail'>
                Email
          </label>
              <input
                name='email'
                defaultValue={user.email}
                type='text'
                id='email'>
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
          </fieldset>
        </form>
        <BackButton />
      </div>
    );
  }
}

