import React, { Component } from 'react'
import { Section } from '../components/Utils/Utils'
import LoginSignup from '../components/LoginSignup/LoginSignup'

export default class Login extends Component {
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
  
  render(){
    return(
      <LoginSignup
      onLoginSuccess={this.handleLoginSuccess}
      />
    )
  }
}