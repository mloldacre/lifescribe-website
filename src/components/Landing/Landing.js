import React from 'react';
import { Link } from 'react-router-dom';
import '../../Style.css';
import Logo from '../../image/Logo.png';

export default function Landing() {
  return (
    <div className="Landing">
      <Link to='/loginRegister'>
        <h1>Subscribe to YOUR life!</h1>
      </Link>
      <h4>LifeScribe is a time-based web journal application that allows you to review your entries based on time and date.</h4>
      <Link to='/demo'>
        Try a Scribe!
      </Link>
      <Link to='/demo'><img src={Logo} alt='Logo goes here' /></Link>
    </div>
  );
}
