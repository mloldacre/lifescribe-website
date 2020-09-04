import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import LoginSignup from '../LoginSignup/LoginSignup';
import Demo from '../Demo/Demo';

export default function Header() {
  return (
    <header className="Header">
      <Link to='/'>
        <h1>LifeScribe</h1>
      </Link>

      <Link to='/loginSignup'>
        <LoginSignup />
      </Link>
      <Link to='/demo'>
        <Demo />
      </Link>
    </header>
  );
}
