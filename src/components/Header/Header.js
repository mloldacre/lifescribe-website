import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default class Header extends Component {
  render(){
    return (
      <header className="Header">
        <Link to='/'>
          <h1>LifeScribe</h1>
        </Link>

        <Link to='/loginSignup'>
          Login/Signup
      </Link>
        <Link to='/demo'>
          Demo
      </Link>
      </header>
    );
  }
  
}
